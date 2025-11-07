// Musculation Stats Management
let stats = [];
let progressChart = null;
let selectedExercise = null;
let selectedMuscleGroup = null;
let favoriteExercises = [];

// Muscle groups with icons
const muscleGroups = {
  triceps: {
    name: "Triceps",
    icon: "👊",
    color: "#ff6b35",
  },
  biceps: {
    name: "Biceps",
    icon: "💪",
    color: "#ffa502",
  },
  pectoraux: {
    name: "Pectoraux",
    icon: "🏋️",
    color: "#2ed573",
  },
  dos: {
    name: "Dos",
    icon: "🤸",
    color: "#5352ed",
  },
  epaules: {
    name: "Épaules",
    icon: "🤚",
    color: "#ff4757",
  },
  quadriceps: {
    name: "Quadriceps",
    icon: "🦵",
    color: "#5f27cd",
  },
  "ischio-jambiers": {
    name: "Ischio-jambiers",
    icon: "🦵",
    color: "#a55eea",
  },
  mollets: {
    name: "Mollets",
    icon: "🚶",
    color: "#26de81",
  },
  abdominaux: {
    name: "Abdominaux",
    icon: "🔥",
    color: "#00d2d3",
  },
};

// Exercise data organized by muscle groups with icons
const exercisesByGroup = {
  triceps: [
    { name: "Extension des triceps en planche", icon: "🤸" },
    { name: "Barre front (Lying barbell tricep extension)", icon: "🏋️" },
    { name: "Dips aux barres parallèles", icon: "💫" },
    { name: "Extensions verticales d'un bras avec haltère", icon: "💪" },
    { name: "Extension verticale assis à la barre", icon: "📊" },
    { name: "Extensions des triceps à la machine Technogym", icon: "⚙️" },
    { name: "Dips sur une chaise", icon: "🪑" },
    { name: "Extensions des triceps incliné à la poulie basse", icon: "🔽" },
    { name: "Pompes (triceps)", icon: "🤲" },
    { name: "Extensions concentrées des triceps à la poulie", icon: "🎯" },
    { name: "Extension horizontale à la poulie", icon: "➡️" },
    { name: "Extension verticale à la poulie basse", icon: "⬇️" },
    { name: "Extensions verticales à la poulie haute", icon: "⬆️" },
    { name: "Dips assis à la machine Matrix", icon: "🔄" },
    { name: "Kickback alterné assis", icon: "👊" },
    { name: "Extensions des triceps incliné avec haltères", icon: "📈" },
    { name: "Extensions des triceps décliné avec haltères", icon: "📉" },
    { name: "Handstand push-up", icon: "🤸‍♂️" },
    { name: "Dips assistés à la machine", icon: "🆘" },
    { name: "Dips assis à la machine Hammer Strength", icon: "🔨" },
    { name: "Kickback debout avec haltères", icon: "🚶" },
    { name: "Extensions des triceps assis avec haltère", icon: "🪑" },
    { name: "Extensions des triceps couché avec haltères", icon: "🛏️" },
    { name: "Extensions des triceps incliné à la Smith machine", icon: "🏛️" },
    { name: "Développé couché prise serrée à la Smith machine", icon: "🤏" },
    { name: "Extensions des triceps à la poulie haute à la corde", icon: "🪢" },
    { name: "Extensions des triceps avec sangles de suspension", icon: "🎗️" },
    { name: "Dips aux anneaux", icon: "⭕" },
    { name: "Dips sur banc", icon: "🪑" },
    { name: "Kickback", icon: "👊" },
    { name: "Dips entre deux bancs", icon: "🪑🪑" },
    { name: "Extensions verticales à deux mains avec haltère", icon: "🤲" },
    {
      name: "Extension des triceps au-dessus de la tête avec élastique",
      icon: "🎯",
    },
    { name: "Extension verticale des triceps avec élastique", icon: "📏" },
    { name: "Tate press à un bras avec haltère", icon: "🎯" },
  ],
  biceps: [
    { name: "Curl à la barre", icon: "💪" },
    { name: "Curl concentré", icon: "🎯" },
    { name: "Curl pupitre barre EZ", icon: "📊" },
    { name: "Curl allongé à la poulie", icon: "🛏️" },
    { name: "Curl poulie en position squat", icon: "🦵" },
    { name: "Curl au pupitre à la poulie", icon: "📈" },
    { name: "Curl biceps assis à la machine", icon: "🪑" },
    { name: "Curl haltère debout sur banc incliné", icon: "📐" },
    { name: "Curl Spider", icon: "🕷️" },
    { name: "Curl haltère incliné avec rotation", icon: "🔄" },
    { name: "Curl biceps à la poulie basse", icon: "⬇️" },
    { name: "Traction supination", icon: "🤸" },
    { name: "Curl Zottman", icon: "🌀" },
    { name: "Curl en prise marteau avec élastique", icon: "🎗️" },
    { name: "Curl à la poulie vis-à-vis", icon: "👥" },
    { name: "Drag curl avec haltères", icon: "➡️" },
    { name: "Curl inversé à la barre", icon: "🔄" },
    { name: "Curl haltères prise neutre", icon: "🤲" },
    { name: "Drag curl à la Smith machine", icon: "🏛️" },
    { name: "Drag curl", icon: "➡️" },
    { name: "Curl biceps alterné avec haltères", icon: "🔄" },
    { name: "Waiter curl", icon: "🍽️" },
    { name: "Curl biceps alterné en supination sur banc incliné", icon: "📈" },
    { name: "Curl biceps avec élastique", icon: "🎗️" },
    { name: "Curl unilatéral avec sangles de suspension", icon: "🎗️" },
    { name: "Curl haltère prise marteau au pupitre", icon: "🔨" },
    { name: "Curl avec sangles de suspension", icon: "🎗️" },
    { name: "Curl incliné à la poulie", icon: "📈" },
  ],
  pectoraux: [
    { name: "Pompes inclinées sur Smith Machine", icon: "📈" },
    { name: "Pompes inclinées avec sangles de suspension", icon: "🎗️" },
    { name: "Développé couché", icon: "💪" },
    { name: "Développé incliné à la barre", icon: "📈" },
    { name: "Écartés couché avec haltères", icon: "🤲" },
    {
      name: "Écartés à la poulie vis-à-vis",
      icon: "👥",
      variants: ["haut", "milieu", "bas"],
    },
    { name: "Développé couché haltères", icon: "🏋️" },
    { name: "Dips aux barres parallèles", icon: "💫" },
    { name: "Pec-deck ou butterfly", icon: "🦋" },
    { name: "Développé incliné à la machine convergente", icon: "⚙️" },
    { name: "Développé décliné à la barre", icon: "📉" },
    { name: "Écartés décliné avec haltères", icon: "📉" },
    { name: "Écartés Hyght", icon: "📈" },
    { name: "Développé couché prise inversée", icon: "🔄" },
    { name: "Écartés unilatéraux à la landmine", icon: "🎯" },
    { name: "Développé couché à la Smith machine", icon: "🏛️" },
    { name: "Hex press à la Smith machine", icon: "⚙️" },
    { name: "Écartés couché à la poulie vis-à-vis", icon: "🛏️" },
    { name: "Développé debout avec élastique", icon: "🎗️" },
    { name: "Développé couché serré avec haltères", icon: "🤏" },
    { name: "Développé incliné à la poulie", icon: "📈" },
    { name: "Svend press", icon: "🤲" },
    { name: "Développé couché avec élastique", icon: "🎗️" },
    { name: "Écarté à la poulie vis à vis haute à genoux", icon: "🧎" },
    { name: "Développé décliné avec élastique", icon: "🎗️" },
    { name: "Développé couché Larsen", icon: "🛏️" },
    { name: "Développé couché unilatéral avec kettlebell", icon: "⚖️" },
    { name: "Développé couché au sol avec kettlebell", icon: "⚖️" },
    { name: "Développé à la landmine à genoux pour les pectoraux", icon: "🎯" },
    { name: "Développé assis à la machine pour les pectoraux", icon: "🪑" },
    { name: "Écartés avec sangles de suspension", icon: "🎗️" },
    { name: "Chest press avec sangles de suspension", icon: "🎗️" },
    { name: "Écartés incliné avec haltères", icon: "📈" },
    { name: "Écarté unilatéral à la poulie", icon: "🎯" },
    { name: "Développé incliné avec haltères", icon: "📈" },
    { name: "Écartés avec élastique", icon: "🎗️" },
    { name: "Développé couché au sol", icon: "🛏️" },
  ],
  dos: [
    { name: "Muscle-up", icon: "💪" },
    { name: "Traction", icon: "🤸" },
    { name: "Tirage horizontal à la poulie", icon: "➡️" },
    { name: "Rowing barre", icon: "🚣" },
    { name: "Shrug barre", icon: "⬆️" },
    { name: "Pull-over assis à la machine", icon: "⚙️" },
    { name: "Traction supination", icon: "🤸" },
    { name: "Rowing haltère à un bras", icon: "🚣" },
    { name: "Rowing T-bar", icon: "🚣" },
    { name: "Tirage vertical prise serrée", icon: "⬇️" },
    { name: "Rowing en pronation assis à la machine Technogym", icon: "⚙️" },
    { name: "Extension lombaire à la machine", icon: "🪑" },
    { name: "Rowing à la barre en T avec machine", icon: "⚙️" },
    { name: "Rowing en prise neutre assis à la machine", icon: "⚙️" },
    {
      name: "Tirage vertical en supination à la machine Hammer Strength",
      icon: "⬇️",
    },
    { name: "Tirage vertical prise large", icon: "⬇️" },
    { name: "Tirage vertical prise inversée", icon: "⬇️" },
    { name: "Pull-over décliné à la barre", icon: "📉" },
    { name: "Planche inversée", icon: "🤸" },
    { name: "Shrug à la poulie", icon: "⬆️" },
    { name: "Extension lombaire au banc à 45°", icon: "🪑" },
    { name: "Rowing buste penché avec élastique", icon: "🎗️" },
    { name: "Shrugs avec haltères", icon: "⬆️" },
    { name: "Soulevé de terre avec machine", icon: "🏋️" },
    { name: "Tractions australiennes avec sangles de suspension", icon: "🎗️" },
    { name: "Extensions lombaires sur Swiss ball", icon: "🏀" },
    { name: "Oiseau inversé avec sangles de suspension", icon: "🦅" },
    { name: "Traction assistée avec élastique", icon: "🎗️" },
    { name: "Rowing avec sangles de suspension", icon: "🎗️" },
    { name: "Pullover avec deux haltères", icon: "🚣" },
    { name: "Rowing inversé sous une table", icon: "🪑" },
    { name: "Bent over row prise disque", icon: "🍽️" },
    { name: "Rowing unilatéral avec élastique", icon: "🎗️" },
    { name: "Rowing à la Smith machine", icon: "🏛️" },
    { name: "Tirage horizontal prise large", icon: "➡️" },
    { name: "Montée à la corde", icon: "🪢" },
    { name: "Pull-over avec barre", icon: "🚣" },
    { name: "Tirage incliné à la poulie haute", icon: "⬆️" },
    { name: "Traction lestée", icon: "💪" },
    { name: "Traction assistée avec banc", icon: "🪑" },
    { name: "Tirage horizontal avec élastique", icon: "🎗️" },
    { name: "Soulevé de terre", icon: "🏋️" },
  ],
  epaules: [
    { name: "Élévation frontale sur banc incliné", icon: "📈" },
    { name: "Développé épaules assis", icon: "🪑" },
    { name: "Russian twist avec développé épaules", icon: "🔄" },
    { name: "Développé militaire", icon: "🤚" },
    { name: "Développé Arnold", icon: "💪" },
    { name: "Face pull", icon: "⬅️" },
    { name: "Élévations latérales à la poulie vis à vis", icon: "➡️" },
    { name: "Élévations latérales à la machine", icon: "⚙️" },
    { name: "Développé épaules avec haltères", icon: "🏋️" },
    { name: "Développé épaules debout à la landmine", icon: "🎯" },
    { name: "Rotation externe de l'épaule à la poulie", icon: "🔄" },
    { name: "Pec deck inversé", icon: "🦋" },
    { name: "Oiseau assis sur banc", icon: "🪑" },
    { name: "Développé épaule unilatéral avec élastique", icon: "🎗️" },
    { name: "Développé épaules à la Smith machine", icon: "🏛️" },
    { name: "Tirage menton avec élastique", icon: "🎗️" },
    { name: "Oiseau avec élastique", icon: "🎗️" },
    { name: "Développé épaules avec élastique", icon: "🎗️" },
    { name: "Élévations latérales inclinées avec haltère", icon: "📐" },
    { name: "Rotation externe de l'épaule couchée avec haltère", icon: "🛏️" },
    { name: "Handstand push-up", icon: "🤸‍♂️" },
    { name: "Pompes piquées", icon: "🤸" },
    { name: "Croix de fer avec haltères", icon: "✝️" },
    { name: "Extension horizontale des épaules avec élastique", icon: "🎗️" },
    { name: "Thruster avec kettlebell", icon: "⚖️" },
    { name: "Développé épaule unilatéral à genou avec landmine", icon: "🧎" },
    { name: "Élévations latérales unilatérales à la poulie", icon: "➡️" },
    { name: "Développé épaules assis avec élastique", icon: "🎗️" },
    { name: "Développé épaules à la machine", icon: "⚙️" },
    { name: "Oiseau inversé avec sangles de suspension", icon: "🎗️" },
    { name: "Thruster avec landmine", icon: "🎯" },
    { name: "Rotations cubaines", icon: "🔄" },
    { name: "Élévations frontales à la poulie basse", icon: "⬇️" },
    { name: "Thruster", icon: "🚀" },
    { name: "Développé nuque barre guidée", icon: "🏛️" },
    { name: "Élévations latérales", icon: "✋" },
    { name: "Élévations frontales", icon: "👋" },
    { name: "Écartés inversés à la poulie", icon: "🔄" },
  ],
  quadriceps: [
    { name: "Squat", icon: "🦵" },
    { name: "Squat barre devant", icon: "🦵" },
    { name: "Squat à la Smith machine", icon: "🏛️" },
    { name: "Hack Squat", icon: "🦵" },
    { name: "Hack squat assis", icon: "🦵" },
    { name: "Presse à cuisses inclinée", icon: "🔽" },
    { name: "Presse à cuisses horizontale", icon: "🔽" },
    { name: "Presse à cuisses verticale", icon: "🔽" },
    { name: "Leg extension", icon: "🦵" },
    { name: "Montées sur banc", icon: "📈" },
    { name: "Fentes avant avec haltères", icon: "🚶" },
    { name: "Squat bulgare avec haltères", icon: "🦵" },
    { name: "Squat sauté", icon: "🚀" },
    { name: "Goblet squat avec haltère", icon: "🏋️" },
    { name: "Overhead squat", icon: "⬆️" },
    { name: "Split squat à la Smith machine", icon: "🏛️" },
    { name: "Squat avec landmine", icon: "🎯" },
    { name: "Squat cosaque", icon: "🦵" },
    { name: "Air Squat", icon: "🤸" },
    { name: "Squat pistolet avec sangle de suspension", icon: "🔫" },
    { name: "Split squat avec sangles de suspension", icon: "🦵" },
    { name: "Squat avant avec double kettlebell", icon: "⚖️" },
    { name: "Safety bar squat", icon: "🏋️" },
    { name: "Fentes inversées avec landmine", icon: "🚶" },
  ],
  "ischio-jambiers": [
    { name: "Leg curl allongé", icon: "🦵" },
    { name: "Soulevé de terre jambes tendues", icon: "🏋️" },
    { name: "Good morning", icon: "🤸" },
    { name: "Soulevé de terre roumain", icon: "🏋️" },
    { name: "Leg curl assis à la machine", icon: "🪑" },
    { name: "Nordic hamstring curl", icon: "🦵" },
    { name: "Soulevé de terre", icon: "🏋️" },
    { name: "Extensions de hanches au GHD", icon: "🤸" },
    { name: "Presse à cuisses inclinée", icon: "🔽" },
    { name: "Squat", icon: "🦵" },
    { name: "Rack Pull", icon: "🏋️" },
    { name: "Fentes avant avec barre", icon: "🚶" },
  ],
  mollets: [
    { name: "Extensions des mollets avec partenaire", icon: "👥" },
    { name: "Extension des mollets à la barre debout", icon: "🏋️" },
    { name: "Extensions des mollets assis avec barre", icon: "🪑" },
    { name: "Élévations des mollets au Donkey", icon: "🫏" },
    { name: "Extensions des mollets au hack-squat", icon: "🦵" },
    { name: "Extensions des mollets assis à la Smith machine", icon: "🏛️" },
    { name: "Extensions des mollets debout à la Smith machine", icon: "🏛️" },
    { name: "Extensions des mollets debout à la machine", icon: "⚙️" },
    { name: "Extensions des mollets sur une marche", icon: "📈" },
    { name: "Extension des mollets assis à la machine", icon: "⚙️" },
    { name: "Extension des mollets à la presse", icon: "🔽" },
  ],
  abdominaux: [
    { name: "Crunch", icon: "🔥" },
    { name: "Planche", icon: "🤸" },
    { name: "Relevés de jambes", icon: "🦵" },
    { name: "Russian twist", icon: "🔄" },
  ],
};

// Make muscleGroups globally accessible for mes-stats.js
window.muscleGroups = muscleGroups;

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  loadStats();
  loadFavoriteExercises();

  // Only setup muscle group grid if the element exists (musculation.html only)
  const muscleGroupGrid = document.getElementById("muscleGroupGrid");
  if (muscleGroupGrid) {
    setupMuscleGroupGrid();
  }

  // Only setup form if it exists (musculation.html only)
  const addStatsForm = document.getElementById("addStatsForm");
  if (addStatsForm) {
    setupForm();
    setupSteppers();
    setupVolumePreview();
    updateVolumePreview(); // Initialize volume display
  }

  // Only setup display if elements exist (musculation.html only)
  const statsCards = document.getElementById("statsCards");
  if (statsCards) {
    updateDisplay();
  }

  // Only setup filter buttons if they exist (musculation.html only)
  const filterButtons = document.getElementById("filterButtons");
  if (filterButtons) {
    setupFilterButtons();
  }
  // S'assurer que les images sont chargées
  if (typeof loadExerciseImages === "function") {
    loadExerciseImages();
  }
});

// Load favorite exercises from localStorage
function loadFavoriteExercises() {
  try {
    const saved = localStorage.getItem("neostats_favorite_exercises");
    if (saved) {
      favoriteExercises = JSON.parse(saved);
    }
  } catch (error) {
    console.warn("Impossible de charger les favoris:", error);
    favoriteExercises = [];
  }
}

// Save favorite exercises to localStorage
function saveFavoriteExercises() {
  try {
    localStorage.setItem(
      "neostats_favorite_exercises",
      JSON.stringify(favoriteExercises)
    );
  } catch (error) {
    console.warn("Impossible de sauvegarder les favoris:", error);
  }
}

// Toggle favorite status for an exercise
function toggleFavoriteExercise(exerciseName, muscleGroupKey) {
  const exerciseKey = `${muscleGroupKey}:${exerciseName}`;
  const index = favoriteExercises.indexOf(exerciseKey);

  if (index > -1) {
    // Remove from favorites
    favoriteExercises.splice(index, 1);
  } else {
    // Add to favorites
    favoriteExercises.push(exerciseKey);
  }

  saveFavoriteExercises();

  // Update display if we're currently viewing favorites
  if (selectedMuscleGroup === "favoris") {
    showExercisesForGroup("favoris");
  }

  // Update the star icon in the current group if visible
  if (selectedMuscleGroup && selectedMuscleGroup !== "favoris") {
    updateFavoriteStarIcons(selectedMuscleGroup);
  }
}

// Check if an exercise is favorited
function isExerciseFavorite(exerciseName, muscleGroupKey) {
  const exerciseKey = `${muscleGroupKey}:${exerciseName}`;
  return favoriteExercises.includes(exerciseKey);
}

// Setup muscle group grid
function setupMuscleGroupGrid() {
  const muscleGroupGrid = document.getElementById("muscleGroupGrid");
  if (!muscleGroupGrid) {
    return; // Element doesn't exist (not on musculation.html page)
  }
  muscleGroupGrid.innerHTML = ""; // Clear existing content

  // Add "Favoris" category first
  const favoritesCard = document.createElement("div");
  favoritesCard.className = "muscle-group-card";
  favoritesCard.dataset.muscleGroup = "favoris";
  favoritesCard.style.setProperty("--group-color", "#ffd700");
  const favoritesCount = favoriteExercises.length;
  favoritesCard.innerHTML = `
    <div class="muscle-group-icon">⭐</div>
    <p class="muscle-group-name">Favoris</p>
    <span class="exercise-count">${favoritesCount} exercice${
    favoritesCount > 1 ? "s" : ""
  }</span>
  `;

  favoritesCard.addEventListener("click", function () {
    document.querySelectorAll(".muscle-group-card").forEach((c) => {
      c.classList.remove("selected");
    });
    this.classList.add("selected");
    selectedMuscleGroup = "favoris";
    showExercisesForGroup("favoris");
  });

  muscleGroupGrid.appendChild(favoritesCard);

  // Add other muscle groups
  Object.keys(muscleGroups).forEach((key) => {
    const group = muscleGroups[key];
    const card = document.createElement("div");
    card.className = "muscle-group-card";
    card.dataset.muscleGroup = key;
    card.style.setProperty("--group-color", group.color);
    card.innerHTML = `
      <div class="muscle-group-icon">${group.icon}</div>
      <p class="muscle-group-name">${group.name}</p>
      <span class="exercise-count">${
        exercisesByGroup[key] ? exercisesByGroup[key].length : 0
      } exercices</span>
    `;

    card.addEventListener("click", function () {
      // Remove previous selection
      document.querySelectorAll(".muscle-group-card").forEach((c) => {
        c.classList.remove("selected");
      });

      // Add selection to clicked card
      this.classList.add("selected");
      selectedMuscleGroup = key;

      // Show exercises for this muscle group
      showExercisesForGroup(key);
    });

    muscleGroupGrid.appendChild(card);
  });
}

// Show exercises for selected muscle group
function showExercisesForGroup(muscleGroupKey) {
  const exerciseGrid = document.getElementById("exerciseGrid");
  const exerciseSelectionSection = document.getElementById(
    "exerciseSelectionSection"
  );
  const exerciseSectionLabel = document.getElementById("exerciseSectionLabel");

  // Clear previous exercises
  exerciseGrid.innerHTML = "";
  selectedExercise = null;

  // Hide exercise preview when changing muscle group
  hideSelectedExercisePreview();

  // Show exercise selection section
  exerciseSelectionSection.style.display = "block";

  let exercises = [];
  let groupName = "";
  let groupIcon = "";

  // Handle favorites category
  if (muscleGroupKey === "favoris") {
    groupName = "Favoris";
    groupIcon = "⭐";
    // Get all favorite exercises
    favoriteExercises.forEach((exerciseKey) => {
      const parts = exerciseKey.split(":");
      const groupKey = parts[0];
      // Rejoin the rest in case the exercise name contains ":"
      const exerciseName = parts.slice(1).join(":");

      if (exercisesByGroup[groupKey]) {
        // Try to find exact match first (for variants)
        let exercise = exercisesByGroup[groupKey].find(
          (ex) => ex.name === exerciseName
        );

        // If not found, try to find base exercise (for exercises with variants)
        if (!exercise) {
          // Check if it's a variant (contains parentheses)
          if (exerciseName.includes("(")) {
            const baseName = exerciseName.split("(")[0].trim();
            exercise = exercisesByGroup[groupKey].find(
              (ex) => ex.name === baseName
            );
            if (exercise) {
              // Create a copy with the full variant name
              exercise = { ...exercise, name: exerciseName };
            }
          }
        }

        if (exercise) {
          exercises.push({
            ...exercise,
            originalGroup: groupKey, // Keep track of original group
          });
        }
      }
    });
  } else {
    const group = muscleGroups[muscleGroupKey];
    groupName = group.name;
    groupIcon = group.icon;
    exercises = exercisesByGroup[muscleGroupKey] || [];

    // Trier les exercices : favoris en premier
    exercises.sort((a, b) => {
      const aIsFavorite = isExerciseFavorite(a.name, muscleGroupKey);
      const bIsFavorite = isExerciseFavorite(b.name, muscleGroupKey);

      if (aIsFavorite && !bIsFavorite) return -1;
      if (!aIsFavorite && bIsFavorite) return 1;
      return 0; // Garder l'ordre original si même statut favori
    });
  }

  exerciseSectionLabel.textContent = `${groupIcon} Choisissez un exercice - ${groupName}`;

  exercises.forEach((exercise) => {
    const card = document.createElement("div");
    card.className = "exercise-card";
    card.dataset.exercise = exercise.name;

    // Determine the group key for this exercise (favorites use originalGroup)
    const exerciseGroupKey = exercise.originalGroup || muscleGroupKey;
    const isFavorite = isExerciseFavorite(exercise.name, exerciseGroupKey);

    // Vérifier si une image existe pour cet exercice
    // Pour les exercices avec variantes, utiliser l'image principale
    let imageUrl = null;
    if (typeof getExerciseImageUrl === "function") {
      imageUrl = getExerciseImageUrl(exercise.name, exerciseGroupKey);
    }

    // Construire le contenu de la carte avec étoile de favori
    let cardContent = "";
    const favoriteStarClass = isFavorite
      ? "favorite-star active"
      : "favorite-star";
    const favoriteStarIcon = isFavorite ? "⭐" : "☆";

    if (imageUrl) {
      // Afficher l'image avec fallback sur emoji en cas d'erreur
      const safeExerciseName = exercise.name.replace(/'/g, "\\'");
      cardContent = `
        <div class="exercise-image-container">
          <img src="${imageUrl}" alt="${safeExerciseName}" class="exercise-image" loading="lazy" 
               onerror="this.onerror=null; this.style.display='none'; this.parentElement.querySelector('.fallback-icon').style.display='block';">
          <div class="exercise-icon fallback-icon" style="display: none;">${exercise.icon}</div>
          <div class="${favoriteStarClass}" data-exercise="${safeExerciseName}" data-group="${exerciseGroupKey}">${favoriteStarIcon}</div>
        </div>
        <p class="exercise-name">${exercise.name}</p>
      `;
    } else {
      // Afficher l'emoji par défaut
      cardContent = `
        <div class="exercise-icon-container">
          <div class="exercise-icon">${exercise.icon}</div>
          <div class="${favoriteStarClass}" data-exercise="${exercise.name.replace(
        /'/g,
        "\\'"
      )}" data-group="${exerciseGroupKey}">${favoriteStarIcon}</div>
        </div>
        <p class="exercise-name">${exercise.name}</p>
      `;
    }

    card.innerHTML = cardContent;

    // Add click handler for favorite star
    const favoriteStar = card.querySelector(".favorite-star");
    if (favoriteStar) {
      favoriteStar.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent card click
        e.preventDefault(); // Prevent any default behavior
        const exerciseName = this.dataset.exercise;
        const groupKey = this.dataset.group;
        const wasFavorite = isExerciseFavorite(exerciseName, groupKey);
        toggleFavoriteExercise(exerciseName, groupKey);
        const isNowFavorite = isExerciseFavorite(exerciseName, groupKey);

        // Update star icon
        if (isNowFavorite) {
          this.classList.add("active");
          this.textContent = "⭐";
        } else {
          this.classList.remove("active");
          this.textContent = "☆";
        }

        // Update favorites count if visible
        updateFavoritesCount();

        // Si on est dans une catégorie (pas favoris), réorganiser les exercices
        if (selectedMuscleGroup && selectedMuscleGroup !== "favoris") {
          // Réafficher les exercices pour mettre les favoris en haut
          showExercisesForGroup(selectedMuscleGroup);
        }
      });
    }

    card.addEventListener("click", function (e) {
      // Ignore clicks on the favorite star
      if (e.target.classList.contains("favorite-star")) {
        return;
      }

      // Check if this is a variant (name contains parentheses)
      // If so, don't show variant selector, just select it directly
      const isVariant = exercise.name.includes("(");

      // Vérifier si l'exercice a des variantes (and it's not already a variant)
      if (exercise.variants && exercise.variants.length > 0 && !isVariant) {
        // Afficher le menu de sélection de variante
        showExerciseVariantSelector(exercise, exerciseGroupKey);
        return;
      }

      // Comportement normal si pas de variantes
      // Remove previous selection
      document.querySelectorAll(".exercise-card").forEach((c) => {
        c.classList.remove("selected");
      });

      // Add selection to clicked card
      this.classList.add("selected");
      selectedExercise = exercise.name;

      // Hide custom exercise input
      document.getElementById("customExerciseGroup").style.display = "none";
      document.getElementById("customExercise").required = false;
      document.getElementById("customExercise").value = "";

      // Update exercise preview (use originalGroup if in favorites)
      updateSelectedExercisePreview(
        exercise.name,
        exerciseGroupKey,
        exercise.icon
      );
    });

    exerciseGrid.appendChild(card);
  });

  // Add "Autre" card
  const otherCard = document.createElement("div");
  otherCard.className = "exercise-card";
  otherCard.dataset.exercise = "Autre";
  otherCard.innerHTML = `
    <div class="exercise-icon">➕</div>
    <p class="exercise-name">Autre</p>
  `;

  otherCard.addEventListener("click", function () {
    document.querySelectorAll(".exercise-card").forEach((c) => {
      c.classList.remove("selected");
    });
    this.classList.add("selected");
    selectedExercise = "Autre";

    // Show custom exercise input
    const customGroup = document.getElementById("customExerciseGroup");
    customGroup.style.display = "block";
    document.getElementById("customExercise").required = true;
    document.getElementById("customExercise").focus();

    // Hide exercise preview for "Autre"
    hideSelectedExercisePreview();
  });

  exerciseGrid.appendChild(otherCard);

  // Update favorites count in the favorites card
  updateFavoritesCount();

  // Scroll to exercise section
  exerciseSelectionSection.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
}

// Update favorite star icons in current view
function updateFavoriteStarIcons(muscleGroupKey) {
  document.querySelectorAll(".exercise-card").forEach((card) => {
    const exerciseName = card.dataset.exercise;
    const star = card.querySelector(".favorite-star");
    if (star && exerciseName) {
      const isFavorite = isExerciseFavorite(exerciseName, muscleGroupKey);
      if (isFavorite) {
        star.classList.add("active");
        star.textContent = "⭐";
      } else {
        star.classList.remove("active");
        star.textContent = "☆";
      }
    }
  });
}

// Update favorites count in the favorites card
function updateFavoritesCount() {
  const favoritesCard = document.querySelector('[data-muscle-group="favoris"]');
  if (favoritesCard) {
    const count = favoriteExercises.length;
    const countSpan = favoritesCard.querySelector(".exercise-count");
    if (countSpan) {
      countSpan.textContent = `${count} exercice${count > 1 ? "s" : ""}`;
    }
  }
}

// Update selected exercise preview with variant support
function updateSelectedExercisePreviewWithVariant(
  baseExerciseName,
  variantExerciseName,
  muscleGroupKey,
  defaultIcon,
  variant = null
) {
  const preview = document.getElementById("selectedExercisePreview");
  const previewImage = document.getElementById("previewExerciseImage");
  const previewIcon = document.getElementById("previewExerciseIcon");
  const previewName = document.getElementById("previewExerciseName");
  const previewMuscleZone = document.getElementById("previewMuscleZone");
  const previewMuscleZoneIcon = document.getElementById(
    "previewMuscleZoneIcon"
  );
  const previewMuscleZoneText = document.getElementById(
    "previewMuscleZoneText"
  );

  if (!preview || !previewImage || !previewIcon || !previewName) return;

  // Get image URL if available (avec support des variantes)
  let imageUrl = null;
  if (typeof getExerciseImageUrl === "function") {
    // Essayer d'abord avec le nom de base et la variante
    imageUrl = getExerciseImageUrl(baseExerciseName, muscleGroupKey, variant);
    // Si pas d'image avec variante, essayer avec le nom complet
    if (!imageUrl) {
      imageUrl = getExerciseImageUrl(variantExerciseName, muscleGroupKey);
    }
  }

  // Update name avec le nom de la variante
  previewName.textContent = variantExerciseName;

  // Get muscle zone information if available
  if (
    typeof getExerciseMuscleZone === "function" &&
    previewMuscleZone &&
    previewMuscleZoneIcon &&
    previewMuscleZoneText
  ) {
    const zone = getExerciseMuscleZone(variantExerciseName, muscleGroupKey);
    if (zone) {
      const zoneText =
        typeof getMuscleZoneText === "function"
          ? getMuscleZoneText(zone, muscleGroupKey)
          : zone;
      const zoneIcon =
        typeof getMuscleZoneIcon === "function"
          ? getMuscleZoneIcon(zone)
          : "📍";

      previewMuscleZoneIcon.textContent = zoneIcon;
      previewMuscleZoneText.textContent = zoneText;
      previewMuscleZone.style.display = "flex";
    } else {
      previewMuscleZone.style.display = "none";
    }
  }

  // Show preview
  preview.style.display = "block";

  if (imageUrl) {
    // Show image
    previewImage.src = imageUrl;
    previewImage.style.display = "block";
    previewIcon.style.display = "none";
    previewImage.onerror = function () {
      // If image fails to load, show icon instead
      this.style.display = "none";
      previewIcon.textContent = defaultIcon;
      previewIcon.style.display = "block";
    };
  } else {
    // Show icon
    previewImage.style.display = "none";
    previewIcon.textContent = defaultIcon;
    previewIcon.style.display = "block";
  }

  // Scroll to preview
  preview.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// Update selected exercise preview
function updateSelectedExercisePreview(
  exerciseName,
  muscleGroupKey,
  defaultIcon
) {
  const preview = document.getElementById("selectedExercisePreview");
  const previewImage = document.getElementById("previewExerciseImage");
  const previewIcon = document.getElementById("previewExerciseIcon");
  const previewName = document.getElementById("previewExerciseName");
  const previewMuscleZone = document.getElementById("previewMuscleZone");
  const previewMuscleZoneIcon = document.getElementById(
    "previewMuscleZoneIcon"
  );
  const previewMuscleZoneText = document.getElementById(
    "previewMuscleZoneText"
  );

  if (!preview || !previewImage || !previewIcon || !previewName) return;

  // Get image URL if available
  let imageUrl = null;
  if (typeof getExerciseImageUrl === "function") {
    imageUrl = getExerciseImageUrl(exerciseName, muscleGroupKey);
  }

  // Update name
  previewName.textContent = exerciseName;

  // Get muscle zone information if available
  if (
    typeof getExerciseMuscleZone === "function" &&
    previewMuscleZone &&
    previewMuscleZoneIcon &&
    previewMuscleZoneText
  ) {
    const zone = getExerciseMuscleZone(exerciseName, muscleGroupKey);
    if (zone) {
      const zoneText =
        typeof getMuscleZoneText === "function"
          ? getMuscleZoneText(zone, muscleGroupKey)
          : zone;
      const zoneIcon =
        typeof getMuscleZoneIcon === "function"
          ? getMuscleZoneIcon(zone)
          : "📍";

      previewMuscleZoneIcon.textContent = zoneIcon;
      previewMuscleZoneText.textContent = zoneText;
      previewMuscleZone.style.display = "flex";
    } else {
      previewMuscleZone.style.display = "none";
    }
  }

  // Show preview
  preview.style.display = "block";

  if (imageUrl) {
    // Show image
    previewImage.src = imageUrl;
    previewImage.style.display = "block";
    previewIcon.style.display = "none";
    previewImage.onerror = function () {
      // If image fails to load, show icon instead
      this.style.display = "none";
      previewIcon.textContent = defaultIcon;
      previewIcon.style.display = "block";
    };
  } else {
    // Show icon
    previewImage.style.display = "none";
    previewIcon.textContent = defaultIcon;
    previewIcon.style.display = "block";
  }

  // Scroll to preview
  preview.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// Hide selected exercise preview
function hideSelectedExercisePreview() {
  const preview = document.getElementById("selectedExercisePreview");
  const previewMuscleZone = document.getElementById("previewMuscleZone");
  if (preview) {
    preview.style.display = "none";
  }
  if (previewMuscleZone) {
    previewMuscleZone.style.display = "none";
  }
}

// Show exercise variant selector modal
function showExerciseVariantSelector(exercise, muscleGroupKey) {
  // Créer le modal si il n'existe pas
  let modal = document.getElementById("variantSelectorModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "variantSelectorModal";
    modal.className = "variant-selector-modal";
    modal.innerHTML = `
      <div class="variant-selector-content">
        <h3 id="variantSelectorTitle">Choisissez une variante</h3>
        <p id="variantSelectorDescription">Sélectionnez la position de la poulie pour cibler une zone spécifique</p>
        <div id="variantSelectorOptions" class="variant-options"></div>
        <button id="variantSelectorCancel" class="variant-cancel-btn">Annuler</button>
      </div>
    `;
    document.body.appendChild(modal);

    // Ajouter l'écouteur pour fermer le modal
    document
      .getElementById("variantSelectorCancel")
      .addEventListener("click", function () {
        modal.style.display = "none";
      });

    // Fermer le modal en cliquant à l'extérieur
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  // Configurer le modal pour cet exercice
  document.getElementById("variantSelectorTitle").textContent = exercise.name;
  const optionsContainer = document.getElementById("variantSelectorOptions");
  optionsContainer.innerHTML = "";

  // Labels des variantes
  // Note: Poulie en bas = haut des pecs, Poulie en haut = bas des pecs
  const variantLabels = {
    haut: {
      label: "Haut des pectoraux",
      icon: "⬆️",
      description: "Poulie en bas",
    },
    milieu: {
      label: "Totalité des pectoraux",
      icon: "💪",
      description: "Poulie au milieu",
    },
    bas: {
      label: "Bas des pectoraux",
      icon: "⬇️",
      description: "Poulie en haut",
    },
  };

  // Créer les options de variantes
  exercise.variants.forEach((variant) => {
    const variantData = variantLabels[variant] || {
      label: variant,
      icon: "📍",
      description: "",
    };
    const option = document.createElement("div");
    option.className = "variant-option";
    option.innerHTML = `
      <div class="variant-option-icon">${variantData.icon}</div>
      <div class="variant-option-text">
        <div class="variant-option-label">${variantData.label}</div>
        <div class="variant-option-description">${variantData.description}</div>
      </div>
    `;
    option.addEventListener("click", function () {
      // Sélectionner la variante
      const variantExerciseName = `${exercise.name} (${variant})`;
      selectedExercise = variantExerciseName;

      // Mettre à jour la sélection visuelle
      document.querySelectorAll(".exercise-card").forEach((c) => {
        c.classList.remove("selected");
        if (c.dataset.exercise === exercise.name) {
          c.classList.add("selected");
        }
      });

      // Fermer le modal
      modal.style.display = "none";

      // Cacher l'input custom
      document.getElementById("customExerciseGroup").style.display = "none";
      document.getElementById("customExercise").required = false;
      document.getElementById("customExercise").value = "";

      // Mettre à jour le compteur de favoris
      updateFavoritesCount();

      // Afficher l'aperçu avec la variante sélectionnée
      // Passer la variante pour obtenir la bonne image
      updateSelectedExercisePreviewWithVariant(
        exercise.name,
        variantExerciseName,
        muscleGroupKey,
        variantData.icon,
        variant
      );
    });
    optionsContainer.appendChild(option);
  });

  // Afficher le modal
  modal.style.display = "flex";
}

// Setup form
function setupForm() {
  const form = document.getElementById("addStatsForm");
  if (!form) {
    return; // Form doesn't exist (not on musculation.html page)
  }

  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    addStat();
  });

  // Set default date to today
  const dateInput = document.getElementById("date");
  if (dateInput) {
    dateInput.value = new Date().toISOString().split("T")[0];
  }

  // Update volume preview on input change
  ["weight", "reps", "sets"].forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener("input", updateVolumePreview);
    }
  });
}

// Setup steppers
function setupSteppers() {
  document.querySelectorAll(".stepper-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const targetId = this.dataset.target;
      const action = this.dataset.action;
      const input = document.getElementById(targetId);
      const step = targetId === "weight" ? 0.5 : 1;
      const min = parseFloat(input.getAttribute("min")) || 0;
      const max = parseFloat(input.getAttribute("max")) || Infinity;

      let value = parseFloat(input.value) || 0;

      if (action === "increase") {
        value = Math.min(value + step, max);
      } else if (action === "decrease") {
        value = Math.max(value - step, min);
      }

      input.value = value;
      updateVolumePreview();
    });
  });
}

// Update volume preview
function updateVolumePreview() {
  const weightInput = document.getElementById("weight");
  const repsInput = document.getElementById("reps");
  const setsInput = document.getElementById("sets");

  if (!weightInput || !repsInput || !setsInput) {
    return; // Elements don't exist (not on musculation.html page)
  }

  const weight = parseFloat(weightInput.value) || 0;
  const reps = parseInt(repsInput.value) || 0;
  const sets = parseInt(setsInput.value) || 0;

  const volume = weight * reps * sets;
  const volumeValue = document.querySelector(".volume-value");
  if (volumeValue) {
    volumeValue.textContent = `${volume.toFixed(0)} kg`;
  }
}

// Add new stat
function addStat() {
  const form = document.getElementById("addStatsForm");

  // Get selected exercise
  let exercise = selectedExercise;

  if (exercise === "Autre") {
    exercise = document.getElementById("customExercise").value.trim();
    if (!exercise) {
      showNotification("Veuillez entrer un nom d'exercice", "error");
      document.getElementById("customExercise").focus();
      return;
    }
  }

  if (!selectedMuscleGroup) {
    showNotification("Veuillez sélectionner un groupe musculaire", "error");
    return;
  }

  if (!exercise) {
    showNotification("Veuillez sélectionner un exercice", "error");
    return;
  }

  const weight = parseFloat(document.getElementById("weight").value);
  const reps = parseInt(document.getElementById("reps").value);
  const sets = parseInt(document.getElementById("sets").value);
  const date = document.getElementById("date").value;

  if (!date || !weight || !reps || !sets) {
    showNotification("Veuillez remplir tous les champs", "error");
    return;
  }

  const stat = {
    id: Date.now(),
    date: date,
    exercise: exercise,
    muscleGroup: selectedMuscleGroup || null,
    weight: weight,
    reps: reps,
    sets: sets,
    volume: weight * reps * sets,
  };

  stats.push(stat);
  saveStats();
  updateDisplay();

  // Reset form
  form.reset();
  document.getElementById("date").value = new Date()
    .toISOString()
    .split("T")[0];
  document.getElementById("weight").value = 20;
  document.getElementById("reps").value = 10;
  document.getElementById("sets").value = 3;
  selectedExercise = null;
  selectedMuscleGroup = null;
  document.querySelectorAll(".exercise-card").forEach((c) => {
    c.classList.remove("selected");
  });
  document.querySelectorAll(".muscle-group-card").forEach((c) => {
    c.classList.remove("selected");
  });
  document.getElementById("exerciseSelectionSection").style.display = "none";
  document.getElementById("customExerciseGroup").style.display = "none";
  hideSelectedExercisePreview();
  updateVolumePreview();

  showNotification("Exercice enregistré avec succès ! 💪", "success");
}

// Delete stat
function deleteStat(id) {
  if (confirm("Êtes-vous sûr de vouloir supprimer cette statistique ?")) {
    stats = stats.filter((stat) => stat.id !== id);
    saveStats();
    updateDisplay();
    showNotification("Statistique supprimée", "success");
  }
}

// Save stats to localStorage
function saveStats() {
  localStorage.setItem("neostats_musculation", JSON.stringify(stats));
}

// Load stats from localStorage
function loadStats() {
  const saved = localStorage.getItem("neostats_musculation");
  if (saved) {
    stats = JSON.parse(saved);
  }
}

// Update display
function updateDisplay() {
  // Only update if elements exist (musculation.html only)
  const filterButtons = document.getElementById("filterButtons");
  if (filterButtons) {
    updateFilterButtons();
  }

  const statsCards = document.getElementById("statsCards");
  if (statsCards) {
    updateStatsCards();
    updateStatsTable();
    updateCharts();
    toggleEmptyState();
  }
}

// Setup filter buttons
function setupFilterButtons() {
  // Only setup if filter buttons container exists (musculation.html only)
  const filterButtons = document.getElementById("filterButtons");
  if (!filterButtons) {
    return;
  }

  // Add event listener to "Tous" button
  const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
  if (allBtn) {
    allBtn.addEventListener("click", function () {
      document.querySelectorAll(".filter-btn").forEach((b) => {
        b.classList.remove("active");
      });
      this.classList.add("active");
      updateDisplay();
    });
  }
}

// Update filter buttons
function updateFilterButtons() {
  const filterButtons = document.getElementById("filterButtons");
  const exercises = [...new Set(stats.map((stat) => stat.exercise))].sort();

  // Get "Tous" button
  const allBtn = filterButtons.querySelector('[data-filter="all"]');
  const isAllActive = allBtn && allBtn.classList.contains("active");

  // Clear and rebuild
  filterButtons.innerHTML = "";

  // Recreate "Tous" button
  const newAllBtn = document.createElement("button");
  newAllBtn.className = "filter-btn" + (isAllActive ? " active" : "");
  newAllBtn.dataset.filter = "all";
  newAllBtn.textContent = "Tous";
  newAllBtn.addEventListener("click", function () {
    document.querySelectorAll(".filter-btn").forEach((b) => {
      b.classList.remove("active");
    });
    this.classList.add("active");
    updateDisplay();
  });
  filterButtons.appendChild(newAllBtn);

  // Add exercise buttons
  exercises.forEach((exercise) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.dataset.filter = exercise;
    btn.textContent = exercise;
    btn.addEventListener("click", function () {
      document.querySelectorAll(".filter-btn").forEach((b) => {
        b.classList.remove("active");
      });
      this.classList.add("active");
      updateDisplay();
    });
    filterButtons.appendChild(btn);
  });
}

// Get filtered stats
function getFilteredStats() {
  const activeFilter = document.querySelector(".filter-btn.active");
  if (!activeFilter || activeFilter.dataset.filter === "all") {
    return stats;
  }
  return stats.filter((stat) => stat.exercise === activeFilter.dataset.filter);
}

// Update stats cards
function updateStatsCards() {
  const container = document.getElementById("statsCards");
  const filteredStats = getFilteredStats();

  if (filteredStats.length === 0) {
    container.innerHTML = "";
    return;
  }

  // Group by exercise
  const exerciseGroups = {};
  filteredStats.forEach((stat) => {
    if (!exerciseGroups[stat.exercise]) {
      exerciseGroups[stat.exercise] = [];
    }
    exerciseGroups[stat.exercise].push(stat);
  });

  container.innerHTML = "";

  Object.keys(exerciseGroups).forEach((exercise) => {
    const exerciseStats = exerciseGroups[exercise];
    const sortedStats = exerciseStats.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    // Calculate stats
    const latestStat = sortedStats[sortedStats.length - 1];
    const firstStat = sortedStats[0];
    const maxWeight = Math.max(...exerciseStats.map((s) => s.weight));
    const totalVolume = exerciseStats.reduce((sum, s) => sum + s.volume, 0);
    const improvement = latestStat.weight - firstStat.weight;
    const improvementPercent =
      firstStat.weight > 0
        ? ((improvement / firstStat.weight) * 100).toFixed(1)
        : 0;

    // Find exercise icon from all groups
    let icon = "💪";
    Object.keys(exercisesByGroup).forEach((groupKey) => {
      const exerciseData = exercisesByGroup[groupKey].find(
        (e) => e.name === exercise
      );
      if (exerciseData) {
        icon = exerciseData.icon;
      }
    });

    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = `
      <h3>${icon} ${exercise}</h3>
      <div class="stat-item">
        <span>Poids actuel</span>
        <span class="stat-value">${latestStat.weight} kg</span>
      </div>
      <div class="stat-item">
        <span>Poids max</span>
        <span class="stat-value">${maxWeight} kg</span>
      </div>
      <div class="stat-item">
        <span>Amélioration</span>
        <span class="stat-value" style="color: ${
          improvement >= 0 ? "#2ed573" : "#ff4757"
        }">
          ${improvement >= 0 ? "+" : ""}${improvement.toFixed(
      1
    )} kg (${improvementPercent}%)
        </span>
      </div>
      <div class="stat-item">
        <span>Volume total</span>
        <span class="stat-value">${totalVolume.toFixed(0)} kg</span>
      </div>
      <div class="stat-item">
        <span>Exercices</span>
        <span class="stat-value">${exerciseStats.length}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

// Update stats table
function updateStatsTable() {
  const tbody = document.getElementById("statsTableBody");
  const filteredStats = getFilteredStats();

  if (filteredStats.length === 0) {
    tbody.innerHTML = "";
    return;
  }

  // Sort by date (newest first)
  const sortedStats = [...filteredStats].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  tbody.innerHTML = "";

  sortedStats.forEach((stat) => {
    const row = document.createElement("tr");
    const date = new Date(stat.date);
    const formattedDate = date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    row.innerHTML = `
      <td>${formattedDate}</td>
      <td><strong>${stat.exercise}</strong></td>
      <td>${stat.weight} kg</td>
      <td>${stat.reps}</td>
      <td>${stat.sets}</td>
      <td><strong>${stat.volume.toFixed(0)} kg</strong></td>
      <td>
        <button class="btn btn-danger" onclick="deleteStat(${
          stat.id
        })">Supprimer</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Update charts
function updateCharts() {
  const filteredStats = getFilteredStats();
  const chartsSection = document.getElementById("chartsSection");

  if (filteredStats.length === 0) {
    chartsSection.style.display = "none";
    if (progressChart) {
      progressChart.destroy();
      progressChart = null;
    }
    return;
  }

  chartsSection.style.display = "block";

  // Group by exercise and date
  const exerciseData = {};
  filteredStats.forEach((stat) => {
    if (!exerciseData[stat.exercise]) {
      exerciseData[stat.exercise] = [];
    }
    exerciseData[stat.exercise].push({
      date: stat.date,
      weight: stat.weight,
      volume: stat.volume,
    });
  });

  // Prepare chart data
  const ctx = document.getElementById("progressChart").getContext("2d");

  if (progressChart) {
    progressChart.destroy();
  }

  // Get all unique dates and sort them
  const allDates = [...new Set(filteredStats.map((stat) => stat.date))].sort();

  // Format dates for labels
  const labels = allDates.map((date) => {
    const d = new Date(date);
    return d.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
    });
  });

  const datasets = [];
  const colors = [
    "rgb(255, 107, 53)",
    "rgb(247, 147, 30)",
    "rgb(46, 213, 115)",
    "rgb(255, 165, 2)",
    "rgb(255, 71, 87)",
    "rgb(116, 185, 255)",
  ];

  let colorIndex = 0;
  Object.keys(exerciseData).forEach((exercise) => {
    const exerciseStats = exerciseData[exercise].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    // Map to chart data format - align with allDates
    const data = allDates.map((date) => {
      const stat = exerciseStats.find((s) => s.date === date);
      return stat ? stat.weight : null;
    });

    datasets.push({
      label: exercise,
      data: data,
      borderColor: colors[colorIndex % colors.length],
      backgroundColor: colors[colorIndex % colors.length] + "20",
      tension: 0.4,
      fill: false,
      spanGaps: false,
      borderWidth: 3,
    });
    colorIndex++;
  });

  progressChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: datasets,
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: "#b0b0b0",
            font: {
              weight: "600",
            },
          },
        },
        tooltip: {
          backgroundColor: "rgba(26, 26, 26, 0.95)",
          titleColor: "#ffffff",
          bodyColor: "#b0b0b0",
          borderColor: "#ff6b35",
          borderWidth: 2,
          padding: 12,
          callbacks: {
            label: function (context) {
              return context.dataset.label + ": " + context.parsed.y + " kg";
            },
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#b0b0b0",
            maxRotation: 45,
            minRotation: 45,
          },
          grid: {
            color: "rgba(255, 255, 255, 0.05)",
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: "#b0b0b0",
            callback: function (value) {
              return value + " kg";
            },
          },
          grid: {
            color: "rgba(255, 255, 255, 0.05)",
          },
        },
      },
    },
  });
}

// Toggle empty state
function toggleEmptyState() {
  const emptyState = document.getElementById("emptyState");
  const statsCards = document.getElementById("statsCards");
  const statsTable = document.getElementById("statsTable");
  const chartsSection = document.getElementById("chartsSection");

  if (stats.length === 0) {
    emptyState.style.display = "block";
    statsCards.style.display = "none";
    statsTable.style.display = "none";
    chartsSection.style.display = "none";
  } else {
    emptyState.style.display = "none";
    statsCards.style.display = "grid";
    statsTable.style.display = "block";
  }
}

// Show notification
function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  const bgColor =
    type === "success" ? "#2ed573" : type === "error" ? "#ff4757" : "#ff6b35";
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${bgColor};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    z-index: 10000;
    animation: slideInRight 0.3s ease-out;
    font-weight: 600;
    max-width: 300px;
  `;
  notification.textContent = message;

  document.body.appendChild(notification);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease-out";
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Add animation styles
const style = document.createElement("style");
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
