// Configuration des zones musculaires travaillées pour chaque exercice
// Pour les pectoraux: "haut" (claviculaire), "bas" (sternal inférieur), "totalité"
// Pour d'autres muscles, adapter selon les besoins

const exerciseMuscleZones = {
  pectoraux: {
    "Pompes inclinées sur Smith Machine": "haut",
    "Pompes inclinées avec sangles de suspension": "haut",
    "Développé couché": "totalité",
    "Développé incliné à la barre": "haut",
    "Écartés couché avec haltères": "totalité",
    "Écartés à la poulie vis-à-vis (haut)": "haut", // Poulie en bas = haut des pecs
    "Écartés à la poulie vis-à-vis (milieu)": "totalité", // Poulie au milieu = totalité des pecs
    "Écartés à la poulie vis-à-vis (bas)": "bas", // Poulie en haut = bas des pecs
    "Développé couché haltères": "totalité",
    "Dips aux barres parallèles": "bas",
    "Pec-deck ou butterfly": "totalité",
    "Développé incliné à la machine convergente": "haut",
    "Développé décliné à la barre": "bas",
    "Écartés décliné avec haltères": "bas",
    "Écartés Hyght": "haut",
    "Développé couché prise inversée": "haut",
    "Écartés unilatéraux à la landmine": "totalité",
    "Développé couché à la Smith machine": "totalité",
    "Hex press à la Smith machine": "totalité",
    "Écartés couché à la poulie vis-à-vis": "totalité",
    "Développé debout avec élastique": "totalité",
    "Développé couché serré avec haltères": "totalité",
    "Développé incliné à la poulie": "haut",
    "Svend press": "totalité",
    "Développé couché avec élastique": "totalité",
    "Écarté à la poulie vis à vis haute à genoux": "bas",
    "Développé décliné avec élastique": "bas",
    "Développé couché Larsen": "totalité",
    "Développé couché unilatéral avec kettlebell": "totalité",
    "Développé couché au sol avec kettlebell": "totalité",
    "Développé à la landmine à genoux pour les pectoraux": "haut",
    "Développé assis à la machine pour les pectoraux": "totalité",
    "Écartés avec sangles de suspension": "totalité",
    "Chest press avec sangles de suspension": "totalité",
    "Écartés incliné avec haltères": "haut",
    "Écarté unilatéral à la poulie": "totalité",
    "Développé incliné avec haltères": "haut",
    "Écartés avec élastique": "totalité",
    "Développé couché au sol": "totalité",
  },
  // Zones pour les triceps
  triceps: {
    "Extension des triceps en planche": "tout",
    "Barre front (Lying barbell tricep extension)": "tout",
    "Dips aux barres parallèles": "tout",
    "Extensions verticales d'un bras avec haltère": "long portion",
    "Extension verticale assis à la barre": "tout",
    "Extensions des triceps à la machine Technogym": "tout",
    "Dips sur une chaise": "tout",
    "Extensions des triceps incliné à la poulie basse": "tout",
    "Pompes (triceps)": "tout",
    "Extensions concentrées des triceps à la poulie": "long portion",
    "Extension horizontale à la poulie": "vaste externe",
    "Extension verticale à la poulie basse": "tout",
    "Extensions verticales à la poulie haute": "long portion",
    "Dips assis à la machine Matrix": "tout",
    "Kickback alterné assis": "tout",
    "Extensions des triceps incliné avec haltères": "tout",
    "Extensions des triceps décliné avec haltères": "tout",
    "Handstand push-up": "tout",
    "Dips assistés à la machine": "tout",
    "Dips assis à la machine Hammer Strength": "tout",
    "Kickback debout avec haltères": "tout",
    "Extensions des triceps assis avec haltère": "long portion",
    "Extensions des triceps couché avec haltères": "tout",
    "Extensions des triceps incliné à la Smith machine": "tout",
    "Développé couché prise serrée à la Smith machine": "tout",
    "Extensions des triceps à la poulie haute à la corde": "long portion",
    "Extensions des triceps avec sangles de suspension": "tout",
    "Dips aux anneaux": "tout",
    "Dips sur banc": "tout",
    Kickback: "tout",
    "Dips entre deux bancs": "tout",
    "Extensions verticales à deux mains avec haltère": "long portion",
    "Extension des triceps au-dessus de la tête avec élastique": "long portion",
    "Extension verticale des triceps avec élastique": "long portion",
    "Tate press à un bras avec haltère": "vaste externe",
  },
  // Zones pour les biceps
  biceps: {
    "Curl à la barre": "tout",
    "Curl concentré": "tout",
    "Curl pupitre barre EZ": "chef court",
    "Curl allongé à la poulie": "tout",
    "Curl poulie en position squat": "tout",
    "Curl au pupitre à la poulie": "chef court",
    "Curl biceps assis à la machine": "chef court",
    "Curl haltère debout sur banc incliné": "chef long",
    "Curl Spider": "chef court",
    "Curl haltère incliné avec rotation": "chef long",
    "Curl biceps à la poulie basse": "tout",
    "Traction supination": "tout",
    "Curl Zottman": "tout",
    "Curl en prise marteau avec élastique": "brachio-radial",
    "Curl à la poulie vis-à-vis": "tout",
    "Drag curl avec haltères": "chef long",
    "Curl inversé à la barre": "brachio-radial",
    "Curl haltères prise neutre": "brachio-radial",
    "Drag curl à la Smith machine": "chef long",
    "Drag curl": "chef long",
    "Curl biceps alterné avec haltères": "tout",
    "Waiter curl": "chef long",
    "Curl biceps alterné en supination sur banc incliné": "chef long",
    "Curl biceps avec élastique": "tout",
    "Curl unilatéral avec sangles de suspension": "tout",
    "Curl haltère prise marteau au pupitre": "brachio-radial",
    "Curl avec sangles de suspension": "tout",
    "Curl incliné à la poulie": "chef long",
  },
  dos: {
    "Muscle-up": "totalité",
    Traction: "largeur",
    "Tirage horizontal à la poulie": "épaisseur",
    "Rowing barre": "épaisseur",
    "Shrug barre": "haut",
    "Pull-over assis à la machine": "largeur",
    "Traction supination": "largeur",
    "Rowing haltère à un bras": "épaisseur",
    "Rowing T-bar": "épaisseur",
    "Tirage vertical prise serrée": "largeur",
    "Rowing en pronation assis à la machine Technogym": "épaisseur",
    "Extension lombaire à la machine": "bas",
    "Rowing à la barre en T avec machine": "épaisseur",
    "Rowing en prise neutre assis à la machine": "épaisseur",
    "Tirage vertical en supination à la machine Hammer Strength": "largeur",
    "Tirage vertical": "largeur", // Zone par défaut
    "Tirage vertical (poulie)": "largeur", // Variante poulie
    "Tirage vertical (convergent)": "largeur", // Variante convergent
    // Ancienne entrée conservée pour compatibilité
    "Tirage vertical prise large": "largeur",
    "Tirage vertical prise inversée": "largeur",
    "Pull-over décliné à la barre": "largeur",
    "Planche inversée": "bas",
    "Shrug à la poulie": "haut",
    "Extension lombaire au banc à 45°": "bas",
    "Rowing buste penché avec élastique": "épaisseur",
    "Shrugs avec haltères": "haut",
    "Soulevé de terre avec machine": "totalité",
    "Tractions australiennes avec sangles de suspension": "épaisseur",
    "Extensions lombaires sur Swiss ball": "bas",
    "Oiseau inversé avec sangles de suspension": "haut",
    "Traction assistée avec élastique": "largeur",
    "Rowing avec sangles de suspension": "épaisseur",
    "Pullover avec deux haltères": "largeur",
    "Rowing inversé sous une table": "épaisseur",
    "Bent over row prise disque": "épaisseur",
    "Rowing unilatéral avec élastique": "épaisseur",
    "Rowing à la Smith machine": "épaisseur",
    "Tirage horizontal prise large": "épaisseur",
    "Montée à la corde": "totalité",
    "Pull-over avec barre": "largeur",
    "Tirage incliné à la poulie haute": "largeur",
    "Traction lestée": "largeur",
    "Traction assistée avec banc": "largeur",
    "Tirage horizontal avec élastique": "épaisseur",
    "Soulevé de terre": "totalité",
  },
  epaules: {
    // Antérieur (deltoïde antérieur)
    "Élévation frontale sur banc incliné": "antérieur",
    "Élévations frontales": "antérieur",
    "Élévations frontales à la poulie basse": "antérieur",
    "Développé militaire": "totalité",
    "Développé Arnold": "totalité",
    "Développé épaules assis": "totalité",
    "Développé épaules avec haltères": "totalité",
    "Développé épaules debout à la landmine": "totalité",
    "Développé épaules à la Smith machine": "totalité",
    "Développé épaules à la machine": "totalité",
    "Développé épaule unilatéral avec élastique": "totalité",
    "Développé épaule unilatéral à genou avec landmine": "totalité",
    "Développé épaules avec élastique": "totalité",
    "Développé épaules assis avec élastique": "totalité",
    "Développé nuque barre guidée": "totalité",
    "Tirage menton avec élastique": "latéral", // Cible principalement le deltoïde latéral
    "Thruster avec kettlebell": "totalité",
    "Thruster avec landmine": "totalité",
    Thruster: "totalité",
    "Russian twist avec développé épaules": "totalité",
    "Handstand push-up": "totalité",
    "Pompes piquées": "antérieur",
    // Latéral (deltoïde latéral)
    "Élévations latérales à la poulie vis à vis": "latéral",
    "Élévations latérales à la machine": "latéral",
    "Élévations latérales": "latéral",
    "Élévations latérales inclinées avec haltère": "latéral",
    "Élévations latérales unilatérales à la poulie": "latéral",
    "Croix de fer avec haltères": "latéral",
    // Postérieur (deltoïde postérieur)
    "Face pull": "postérieur",
    "Pec deck inversé": "postérieur",
    "Oiseau assis sur banc": "postérieur",
    "Oiseau avec élastique": "postérieur",
    "Oiseau inversé avec sangles de suspension": "postérieur",
    "Écartés inversés à la poulie": "postérieur",
    "Rotation externe de l'épaule à la poulie": "postérieur",
    "Rotation externe de l'épaule couchée avec haltère": "postérieur",
    "Rotations cubaines": "postérieur",
    "Extension horizontale des épaules avec élastique": "postérieur",
  },
  quadriceps: {
    Squat: "quadriceps",
    "Squat barre devant": "quadriceps",
    "Squat à la Smith machine": "quadriceps",
    "Hack Squat": "quadriceps",
    "Hack squat assis": "quadriceps",
    "Presse à cuisses inclinée": "quadriceps",
    "Presse à cuisses horizontale": "quadriceps",
    "Presse à cuisses verticale": "quadriceps",
    "Leg extension": "quadriceps",
    "Montées sur banc": "quadriceps",
    "Fentes avant avec haltères": "quadriceps",
    "Squat bulgare avec haltères": "quadriceps",
    "Squat sauté": "quadriceps",
    "Goblet squat avec haltère": "quadriceps",
    "Overhead squat": "quadriceps",
    "Split squat à la Smith machine": "quadriceps",
    "Squat avec landmine": "quadriceps",
    "Squat cosaque": "quadriceps",
    "Air Squat": "quadriceps",
    "Squat pistolet avec sangle de suspension": "quadriceps",
    "Split squat avec sangles de suspension": "quadriceps",
    "Squat avant avec double kettlebell": "quadriceps",
    "Safety bar squat": "quadriceps",
    "Fentes inversées avec landmine": "quadriceps",
  },
  "ischio-jambiers": {
    "Leg curl allongé": "ischio-jambiers",
    "Soulevé de terre jambes tendues": "ischio-jambiers",
    "Good morning": "ischio-jambiers",
    "Soulevé de terre roumain": "ischio-jambiers",
    "Leg curl assis à la machine": "ischio-jambiers",
    "Nordic hamstring curl": "ischio-jambiers",
    "Soulevé de terre": "ischio-jambiers",
    "Extensions de hanches au GHD": "ischio-jambiers",
    "Presse à cuisses inclinée": "ischio-jambiers",
    Squat: "ischio-jambiers",
    "Rack Pull": "ischio-jambiers",
    "Fentes avant avec barre": "ischio-jambiers",
  },
  mollets: {
    "Extensions des mollets avec partenaire": "mollets",
    "Extension des mollets à la barre debout": "mollets",
    "Extensions des mollets assis avec barre": "mollets",
    "Élévations des mollets au Donkey": "mollets",
    "Extensions des mollets au hack-squat": "mollets",
    "Extensions des mollets assis à la Smith machine": "mollets",
    "Extensions des mollets debout à la Smith machine": "mollets",
    "Extensions des mollets debout à la machine": "mollets",
    "Extensions des mollets sur une marche": "mollets",
    "Extension des mollets assis à la machine": "mollets",
    "Extension des mollets à la presse": "mollets",
  },
  abdominaux: {},
};

// Fonction pour obtenir la zone musculaire travaillée
function getExerciseMuscleZone(exerciseName, muscleGroup) {
  if (
    exerciseMuscleZones[muscleGroup] &&
    exerciseMuscleZones[muscleGroup][exerciseName]
  ) {
    return exerciseMuscleZones[muscleGroup][exerciseName];
  }
  return null;
}

// Fonction pour obtenir le texte descriptif de la zone
function getMuscleZoneText(zone, muscleGroup) {
  if (!zone) return "";

  const zoneLabels = {
    pectoraux: {
      haut: "Haut des pectoraux (claviculaire)",
      bas: "Bas des pectoraux (sternal inférieur)",
      totalité: "Totalité des pectoraux",
    },
    triceps: {
      "vaste externe": "Vaste externe",
      "vaste interne": "Vaste interne",
      "long portion": "Long portion",
      tout: "Tout le triceps",
    },
    biceps: {
      "chef court": "Chef court",
      "chef long": "Chef long",
      "brachial antérieur": "Brachial antérieur",
      "brachio-radial": "Brachiordial (brachioradial)",
      tout: "Tout le biceps",
    },
    dos: {
      largeur: "Largeur du dos (grand dorsal)",
      épaisseur: "Épaisseur du dos (rhomboïdes, grand rond)",
      haut: "Haut du dos (trapèzes)",
      bas: "Bas du dos (lombaires)",
      totalité: "Totalité du dos",
    },
    epaules: {
      antérieur: "Antérieur (deltoïde antérieur)",
      latéral: "Latéral (deltoïde latéral)",
      postérieur: "Postérieur (deltoïde postérieur)",
      totalité: "Totalité des épaules",
    },
    quadriceps: {
      quadriceps: "Quadriceps",
    },
    "ischio-jambiers": {
      "ischio-jambiers": "Ischio-jambiers",
    },
    mollets: {
      mollets: "Mollets",
    },
  };

  if (zoneLabels[muscleGroup] && zoneLabels[muscleGroup][zone]) {
    return zoneLabels[muscleGroup][zone];
  }

  // Fallback générique
  return zone.charAt(0).toUpperCase() + zone.slice(1);
}

// Fonction pour obtenir l'icône de la zone
function getMuscleZoneIcon(zone) {
  const zoneIcons = {
    // Pectoraux
    haut: "⬆️",
    bas: "⬇️",
    totalité: "💪",
    // Triceps
    "vaste externe": "↗️",
    "vaste interne": "↘️",
    "long portion": "↖️",
    // Biceps
    "chef court": "📍",
    "chef long": "🔺",
    "brachial antérieur": "💪",
    "brachio-radial": "🎯",
    // Dos
    largeur: "↔️",
    épaisseur: "↕️",
    haut: "⬆️",
    bas: "⬇️",
    totalité: "💪",
    // Général
    tout: "💪",
    // Épaules
    antérieur: "⬆️",
    latéral: "➡️",
    postérieur: "⬅️",
    totalité: "💪",
    // Quadriceps, Ischio-jambiers, Mollets
    quadriceps: "🦵",
    "ischio-jambiers": "🦵",
    mollets: "🚶",
  };
  return zoneIcons[zone] || "📍";
}
