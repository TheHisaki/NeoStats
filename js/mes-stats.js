// Mes Stats Page Management
let allStats = [];
let filteredStats = [];
let weightChart = null;
let volumeChart = null;

// Function to get muscle groups (use from musculation.js if available, otherwise fallback)
// This avoids redeclaration errors since muscleGroups is const in musculation.js
function getMuscleGroups() {
  // Try to access muscleGroups from musculation.js via window object
  // Wait a bit for musculation.js to load if needed
  if (
    typeof window !== "undefined" &&
    typeof window.muscleGroups !== "undefined"
  ) {
    return window.muscleGroups;
  }

  // Also try direct access (in case it's in scope)
  if (typeof muscleGroups !== "undefined") {
    return muscleGroups;
  }

  // Fallback if muscleGroups is not available
  return {
    triceps: { name: "Triceps", icon: "👊", color: "#ff6b35" },
    biceps: { name: "Biceps", icon: "💪", color: "#ffa502" },
    pectoraux: { name: "Pectoraux", icon: "🏋️", color: "#2ed573" },
    dos: { name: "Dos", icon: "🤸", color: "#5352ed" },
    epaules: { name: "Épaules", icon: "🤚", color: "#ff4757" },
    quadriceps: { name: "Quadriceps", icon: "🦵", color: "#5f27cd" },
    "ischio-jambiers": {
      name: "Ischio-jambiers",
      icon: "🦵",
      color: "#a55eea",
    },
    mollets: { name: "Mollets", icon: "🚶", color: "#26de81" },
    abdominaux: { name: "Abdominaux", icon: "🔥", color: "#00d2d3" },
  };
}

// Get muscle group from exercise name (fallback for old stats)
function getMuscleGroupFromExercise(exerciseName) {
  if (!exerciseName) return null;

  // Check if exercisesByGroup is available (from musculation.js)
  if (typeof exercisesByGroup === "undefined") {
    return null;
  }

  // Check all muscle groups
  for (const [groupKey, exercises] of Object.entries(exercisesByGroup)) {
    if (exercises && exercises.some((ex) => ex.name === exerciseName)) {
      return groupKey;
    }
  }

  // Check variants
  for (const [groupKey, exercises] of Object.entries(exercisesByGroup)) {
    if (
      exercises &&
      exercises.some(
        (ex) => ex.name && exerciseName.startsWith(ex.name.split("(")[0].trim())
      )
    ) {
      return groupKey;
    }
  }

  return null;
}

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  loadAllStats();
  setupFilters();
  updateDisplay();
});

// Load stats from localStorage
function loadAllStats() {
  try {
    const saved = localStorage.getItem("neostats_musculation");
    if (saved) {
      allStats = JSON.parse(saved);
      console.log("Stats loaded:", allStats.length, "entries");
      // Ensure all stats have muscleGroup (for backward compatibility)
      allStats = allStats.map((stat) => {
        if (!stat.muscleGroup) {
          stat.muscleGroup = getMuscleGroupFromExercise(stat.exercise);
        }
        return stat;
      });
    } else {
      console.log("No stats found in localStorage");
      allStats = [];
    }
  } catch (error) {
    console.error("Error loading stats:", error);
    allStats = [];
  }
  filteredStats = [...allStats];
}

// Setup filters
function setupFilters() {
  // Category filter
  const categoryFilter = document.getElementById("categoryFilter");
  const muscleGroups = getMuscleGroups();
  Object.keys(muscleGroups).forEach((key) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = muscleGroups[key].name;
    categoryFilter.appendChild(option);
  });

  // Exercise filter (will be populated dynamically)
  updateExerciseFilter();

  // Date filters
  const dateStart = document.getElementById("dateStart");
  const dateEnd = document.getElementById("dateEnd");

  // Don't set default date range - show all stats by default
  // User can filter by date if they want
  dateStart.value = "";
  dateEnd.value = "";

  // Event listeners
  categoryFilter.addEventListener("change", applyFilters);
  document
    .getElementById("exerciseFilter")
    .addEventListener("change", applyFilters);
  dateStart.addEventListener("change", applyFilters);
  dateEnd.addEventListener("change", applyFilters);
  document
    .getElementById("clearFilters")
    .addEventListener("click", clearFilters);
}

// Update exercise filter based on selected category
function updateExerciseFilter() {
  const categoryFilter = document.getElementById("categoryFilter");
  const exerciseFilter = document.getElementById("exerciseFilter");
  const selectedCategory = categoryFilter.value;

  // Get unique exercises from filtered stats by category
  let exercises = [];
  if (selectedCategory === "all") {
    exercises = [...new Set(allStats.map((stat) => stat.exercise))];
  } else {
    exercises = [
      ...new Set(
        allStats
          .filter((stat) => stat.muscleGroup === selectedCategory)
          .map((stat) => stat.exercise)
      ),
    ];
  }

  exercises.sort();

  // Save current selection
  const currentValue = exerciseFilter.value;

  // Clear and rebuild
  exerciseFilter.innerHTML = '<option value="all">Tous les exercices</option>';
  exercises.forEach((exercise) => {
    const option = document.createElement("option");
    option.value = exercise;
    option.textContent = exercise;
    exerciseFilter.appendChild(option);
  });

  // Restore selection if still available
  if (currentValue && exercises.includes(currentValue)) {
    exerciseFilter.value = currentValue;
  }
}

// Apply filters
function applyFilters() {
  const category = document.getElementById("categoryFilter").value;
  const exercise = document.getElementById("exerciseFilter").value;
  const dateStart = document.getElementById("dateStart").value;
  const dateEnd = document.getElementById("dateEnd").value;

  console.log("Applying filters:", {
    category,
    exercise,
    dateStart,
    dateEnd,
    allStatsCount: allStats.length,
  });

  filteredStats = allStats.filter((stat) => {
    // Category filter
    if (category !== "all" && stat.muscleGroup !== category) {
      return false;
    }

    // Exercise filter
    if (exercise !== "all" && stat.exercise !== exercise) {
      return false;
    }

    // Date range filter (only if dates are specified)
    if (dateStart && stat.date < dateStart) {
      return false;
    }
    if (dateEnd && stat.date > dateEnd) {
      return false;
    }

    return true;
  });

  console.log("Filtered stats:", filteredStats.length);

  // Update exercise filter options
  updateExerciseFilter();
  updateDisplay();
}

// Clear all filters
function clearFilters() {
  document.getElementById("categoryFilter").value = "all";
  document.getElementById("exerciseFilter").value = "all";
  document.getElementById("dateStart").value = "";
  document.getElementById("dateEnd").value = "";
  filteredStats = [...allStats];
  updateExerciseFilter();
  updateDisplay();
}

// Update display
function updateDisplay() {
  updateSummaryCards();
  updateStatsTable();
  updateExerciseStats();
  updateCharts();
  toggleEmptyState();
}

// Update summary cards
function updateSummaryCards() {
  const totalExercises = filteredStats.length; // Nombre total d'exercices enregistrés
  const totalDifferentExercises = new Set(
    filteredStats.map((stat) => stat.exercise)
  ).size; // Nombre d'exercices différents
  const totalSets = filteredStats.reduce(
    (sum, stat) => sum + (stat.sets || 0),
    0
  ); // Total de séries
  const totalReps = filteredStats.reduce(
    (sum, stat) => sum + (stat.reps || 0) * (stat.sets || 0),
    0
  ); // Total de répétitions (reps × sets pour chaque exercice)

  console.log("Updating summary cards:", {
    totalExercises,
    totalDifferentExercises,
    totalSets,
    totalReps,
    filteredStatsCount: filteredStats.length,
    allStatsCount: allStats.length,
  });

  document.getElementById("totalExercises").textContent = totalExercises;
  document.getElementById("totalDifferentExercises").textContent =
    totalDifferentExercises;
  document.getElementById("totalSets").textContent = totalSets.toLocaleString();
  document.getElementById("totalReps").textContent = totalReps.toLocaleString();
}

// Update stats table
function updateStatsTable() {
  const tbody = document.getElementById("statsTableBody");
  tbody.innerHTML = "";

  // Sort by date (newest first)
  const sortedStats = [...filteredStats].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  sortedStats.forEach((stat) => {
    const row = document.createElement("tr");
    const muscleGroups = getMuscleGroups();
    const muscleGroupName = stat.muscleGroup
      ? muscleGroups[stat.muscleGroup]?.name || stat.muscleGroup
      : "Non spécifié";
    const muscleGroupIcon = stat.muscleGroup
      ? muscleGroups[stat.muscleGroup]?.icon || "💪"
      : "❓";

    row.innerHTML = `
      <td>${formatDate(stat.date)}</td>
      <td>
        <span class="muscle-group-badge" data-group="${stat.muscleGroup || ""}">
          ${muscleGroupIcon} ${muscleGroupName}
        </span>
      </td>
      <td>${escapeHtml(stat.exercise)}</td>
      <td>${stat.weight} kg</td>
      <td>${stat.reps}</td>
      <td>${stat.sets}</td>
      <td>${stat.volume} kg</td>
      <td>
        <button class="btn-delete" onclick="deleteStat(${
          stat.id
        })" title="Supprimer">
          🗑️
        </button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Update exercise stats
function updateExerciseStats() {
  const container = document.getElementById("exerciseStatsContainer");
  container.innerHTML = "";

  // Group by exercise
  const exerciseGroups = {};
  filteredStats.forEach((stat) => {
    if (!exerciseGroups[stat.exercise]) {
      exerciseGroups[stat.exercise] = [];
    }
    exerciseGroups[stat.exercise].push(stat);
  });

  Object.keys(exerciseGroups)
    .sort()
    .forEach((exercise) => {
      const exerciseStats = exerciseGroups[exercise];
      const sortedStats = exerciseStats.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );

      const firstStat = sortedStats[0];
      const latestStat = sortedStats[sortedStats.length - 1];
      const maxWeight = Math.max(...exerciseStats.map((s) => s.weight));
      const maxVolume = Math.max(...exerciseStats.map((s) => s.volume));
      const totalVolume = exerciseStats.reduce((sum, s) => sum + s.volume, 0);
      const avgWeight =
        exerciseStats.reduce((sum, s) => sum + s.weight, 0) /
        exerciseStats.length;
      const improvement = latestStat.weight - firstStat.weight;
      const improvementPercent =
        firstStat.weight > 0
          ? ((improvement / firstStat.weight) * 100).toFixed(1)
          : 0;

      // Get muscle group info
      const muscleGroup = exerciseStats[0].muscleGroup;
      const muscleGroups = getMuscleGroups();
      const muscleGroupName = muscleGroup
        ? muscleGroups[muscleGroup]?.name || muscleGroup
        : "Non spécifié";
      const muscleGroupIcon = muscleGroup
        ? muscleGroups[muscleGroup]?.icon || "💪"
        : "❓";
      const muscleGroupColor = muscleGroup
        ? muscleGroups[muscleGroup]?.color || "#666"
        : "#666";

      // Get exercise icon
      let exerciseIcon = "💪";
      // Try to get icon from exercisesByGroup if available
      if (
        typeof exercisesByGroup !== "undefined" &&
        muscleGroup &&
        exercisesByGroup[muscleGroup]
      ) {
        const exerciseData = exercisesByGroup[muscleGroup].find(
          (e) => e.name === exercise
        );
        if (exerciseData && exerciseData.icon) {
          exerciseIcon = exerciseData.icon;
        }
      }

      const card = document.createElement("div");
      card.className = "exercise-stat-card";
      card.innerHTML = `
        <div class="exercise-stat-header">
          <div class="exercise-stat-icon">${exerciseIcon}</div>
          <div class="exercise-stat-title">
            <h3>${escapeHtml(exercise)}</h3>
            <span class="exercise-stat-category" style="border-color: ${muscleGroupColor}">
              ${muscleGroupIcon} ${muscleGroupName}
            </span>
          </div>
        </div>
        <div class="exercise-stat-body">
          <div class="exercise-stat-row">
            <div class="exercise-stat-item">
              <span class="stat-item-label">Exercices</span>
              <span class="stat-item-value">${exerciseStats.length}</span>
            </div>
            <div class="exercise-stat-item">
              <span class="stat-item-label">Meilleur poids</span>
              <span class="stat-item-value">${maxWeight} kg</span>
            </div>
            <div class="exercise-stat-item">
              <span class="stat-item-label">Volume max</span>
              <span class="stat-item-value">${maxVolume} kg</span>
            </div>
          </div>
          <div class="exercise-stat-row">
            <div class="exercise-stat-item">
              <span class="stat-item-label">Poids moyen</span>
              <span class="stat-item-value">${avgWeight.toFixed(1)} kg</span>
            </div>
            <div class="exercise-stat-item">
              <span class="stat-item-label">Volume total</span>
              <span class="stat-item-value">${totalVolume.toLocaleString()} kg</span>
            </div>
            <div class="exercise-stat-item">
              <span class="stat-item-label">Progression</span>
              <span class="stat-item-value ${
                improvement >= 0 ? "stat-positive" : "stat-negative"
              }">
                ${improvement >= 0 ? "+" : ""}${improvement.toFixed(1)} kg
                (${improvement >= 0 ? "+" : ""}${improvementPercent}%)
              </span>
            </div>
          </div>
          <div class="exercise-stat-dates">
            <span class="stat-date-label">Premier exercice:</span>
            <span class="stat-date-value">${formatDate(firstStat.date)}</span>
            <span class="stat-date-label">Dernier exercice:</span>
            <span class="stat-date-value">${formatDate(latestStat.date)}</span>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
}

// Update charts
function updateCharts() {
  updateWeightChart();
  updateVolumeChart();
}

// Update weight chart
function updateWeightChart() {
  const ctx = document.getElementById("weightChart");
  if (!ctx) return;

  if (filteredStats.length === 0) {
    if (weightChart) {
      weightChart.destroy();
      weightChart = null;
    }
    return;
  }

  // Group by exercise and date
  const chartData = {};
  filteredStats.forEach((stat) => {
    if (!chartData[stat.exercise]) {
      chartData[stat.exercise] = {};
    }
    if (!chartData[stat.exercise][stat.date]) {
      chartData[stat.exercise][stat.date] = [];
    }
    chartData[stat.exercise][stat.date].push(stat.weight);
  });

  // Get all unique dates and sort them
  const allDates = Array.from(
    new Set(filteredStats.map((stat) => stat.date))
  ).sort();

  // Limit to top 5 exercises by number of sessions
  const exerciseCounts = Object.keys(chartData).map((exercise) => ({
    exercise,
    count: filteredStats.filter((s) => s.exercise === exercise).length,
  }));
  exerciseCounts.sort((a, b) => b.count - a.count);
  const topExercises = exerciseCounts.slice(0, 5).map((e) => e.exercise);

  // Calculate average weight per date per exercise for top exercises
  const datasets = [];
  topExercises.forEach((exercise) => {
    const weights = allDates.map((date) => {
      if (chartData[exercise][date]) {
        const weightsForDate = chartData[exercise][date];
        return (
          weightsForDate.reduce((sum, w) => sum + w, 0) / weightsForDate.length
        );
      }
      return null; // No data for this date
    });

    // Get color for exercise based on muscle group
    let color = "#ff6b35";
    const firstStat = filteredStats.find((s) => s.exercise === exercise);
    if (firstStat && firstStat.muscleGroup) {
      const muscleGroups = getMuscleGroups();
      color = muscleGroups[firstStat.muscleGroup]?.color || "#ff6b35";
    }

    datasets.push({
      label: exercise,
      data: weights,
      borderColor: color,
      backgroundColor: color + "40",
      tension: 0.4,
      fill: false,
      spanGaps: true,
    });
  });

  if (weightChart) {
    weightChart.destroy();
  }

  weightChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: allDates.map((date) => formatDate(date)),
      datasets: datasets,
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Poids (kg)",
          },
        },
        x: {
          title: {
            display: true,
            text: "Date",
          },
        },
      },
    },
  });
}

// Update volume chart
function updateVolumeChart() {
  const ctx = document.getElementById("volumeChart");
  if (!ctx) return;

  // Group by date
  const volumeByDate = {};
  filteredStats.forEach((stat) => {
    if (!volumeByDate[stat.date]) {
      volumeByDate[stat.date] = 0;
    }
    volumeByDate[stat.date] += stat.volume;
  });

  const dates = Object.keys(volumeByDate).sort();
  const volumes = dates.map((date) => volumeByDate[date]);

  if (volumeChart) {
    volumeChart.destroy();
  }

  if (filteredStats.length === 0) {
    ctx.getContext("2d").clearRect(0, 0, ctx.width, ctx.height);
    return;
  }

  volumeChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: dates.map((date) => formatDate(date)),
      datasets: [
        {
          label: "Volume total (kg)",
          data: volumes,
          backgroundColor: "rgba(255, 107, 53, 0.6)",
          borderColor: "#ff6b35",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Volume (kg)",
          },
        },
        x: {
          title: {
            display: true,
            text: "Date",
          },
        },
      },
    },
  });
}

// Delete stat
function deleteStat(id) {
  if (confirm("Êtes-vous sûr de vouloir supprimer cette statistique ?")) {
    // Remove from allStats
    allStats = allStats.filter((stat) => stat.id !== id);
    // Save to localStorage
    localStorage.setItem("neostats_musculation", JSON.stringify(allStats));
    // Reload and update
    loadAllStats();
    applyFilters();
    showNotification("Statistique supprimée", "success");
  }
}

// Show notification
function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  // Show notification
  setTimeout(() => {
    notification.classList.add("show");
  }, 10);

  // Hide and remove after 3 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Toggle empty state
function toggleEmptyState() {
  const emptyState = document.getElementById("emptyStatsMessage");
  const statsTable = document.querySelector(".stats-table-container");
  const exerciseStats = document.getElementById("exerciseStatsContainer");

  if (filteredStats.length === 0) {
    if (emptyState) emptyState.style.display = "block";
    if (statsTable) statsTable.style.display = "none";
    if (exerciseStats) exerciseStats.style.display = "none";
  } else {
    if (emptyState) emptyState.style.display = "none";
    if (statsTable) statsTable.style.display = "block";
    if (exerciseStats) exerciseStats.style.display = "grid";
  }
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

// Escape HTML
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
