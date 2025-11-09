// Configuration des images pour chaque exercice
// Mettez l'URL de l'image (gif, png, jpg, etc.) pour chaque exercice
// Laissez "" pour utiliser l'emoji par défaut

const exerciseImages = {
  triceps: {
    "Extension des triceps en planche":
      "https://www.docteur-fitness.com/wp-content/uploads/2023/07/extensions-triceps-planche.gif",
    "Barre front (Lying barbell tricep extension)":
      "https://www.docteur-fitness.com/wp-content/uploads/2000/09/barre-front.gif",
    "Dips aux barres parallèles":
      "https://www.docteur-fitness.com/wp-content/uploads/2000/01/dips-triceps.gif",
    "Extensions verticales d'un bras avec haltère":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/09/extension-triceps-haltere-un-bras.gif",
    "Extension verticale assis à la barre":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/04/extension-verticale-assis-barre.gif",
    "Extensions des triceps à la machine Technogym":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/02/extension-triceps-machine-technogym.gif",
    "Dips sur une chaise":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/01/dips-sur-une-chaise.gif",
    "Extensions des triceps incliné à la poulie basse":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/01/extension-triceps-incline-poulie-basse.gif",
    "Pompes (triceps)":
      "https://www.docteur-fitness.com/wp-content/uploads/2020/10/pompe-musculation.gif",
    "Extensions concentrées des triceps à la poulie":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/06/extensions-concentres-des-triceps-poulie.gif",
    "Extension horizontale à la poulie":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/04/extension-horizontale-poulie.gif",
    "Extension verticale à la poulie basse":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/04/extension-verticale-triceps-poulie-basse.gif",
    "Extensions verticales à la poulie haute":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/04/extension-triceps-poulie-haute.gif",
    "Dips assis à la machine Matrix":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/04/dips-assis-machine-matrix.gif",
    "Kickback alterné assis":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/09/kickback-alterne-assis.gif",
    "Extensions des triceps incliné avec haltères":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/09/extension-triceps-banc-incline-halteres.gif",
    "Extensions des triceps décliné avec haltères":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/09/extensions-triceps-decline-halteres.gif",
    "Handstand push-up":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/04/handstand-push-up.gif",
    "Dips assistés à la machine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/04/dips-assiste-machine.gif",
    "Dips assis à la machine Hammer Strength":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/12/dips-assis-machine-avec-poids.gif",
    "Kickback debout avec haltères":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/12/kickback-debout-avec-halteres.gif",
    "Extensions des triceps assis avec haltère":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/12/extensions-des-triceps-assis-avec-haltere.gif",
    "Extensions des triceps couché avec haltères":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/12/extensions-triceps-couche-halteres.gif",
    "Extensions des triceps incliné à la Smith machine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/11/extensions-triceps-incline-smith-machine.gif",
    "Développé couché prise serrée à la Smith machine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/11/developpe-couche-prise-serree-smith-machine.gif",
    "Extensions des triceps à la poulie haute à la corde":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/10/extension-triceps-poulie-haute-corde.gif",
    "Extensions des triceps avec sangles de suspension":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/10/extensions-des-triceps-avec-sangles-de-suspension.gif",
    "Dips aux anneaux":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/10/dips-aux-anneaux.gif",
    "Dips sur banc":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/09/dips-sur-banc.gif",
    Kickback:
      "https://www.docteur-fitness.com/wp-content/uploads/2021/09/kickback.gif",
    "Dips entre deux bancs":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/05/dips-entre-deux-bancs.gif",
    "Extensions verticales à deux mains avec haltère":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/09/extensions-verticales-a-deux-mains-avec-haltere.gif",
    "Extension des triceps au-dessus de la tête avec élastique":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/02/extension-triceps-derriere-tete-avec-elastique.gif",
    "Extension verticale des triceps avec élastique":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/02/extension-triceps-verticale-elastique.gif",
    "Tate press à un bras avec haltère":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/01/tate-press.gif",
  },
  biceps: {
    "Curl à la barre":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/09/curl-barre.gif",
    "Curl concentré":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/09/curl-concentre.gif",
    "Curl pupitre barre EZ":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/01/curl-au-pupitre-barre-ez-larry-scott.gif",
    "Curl allongé à la poulie":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/01/curl-allonge-a-la-poulie.gif",
    "Curl poulie en position squat":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/02/curl-poulie-en-position-squat.gif",
    "Curl au pupitre à la poulie":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/02/curl-pupitre-poulie.gif",
    "Curl biceps assis à la machine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/01/curl-pupitre-machine-prechargee.gif",
    "Curl haltère debout sur banc incliné":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/02/curl-haltere-debout-banc-incline.gif",
    "Curl Spider":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/01/spider-curl.gif",
    "Curl haltère incliné avec rotation":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/10/curl-haltere-incline.gif",
    "Curl biceps à la poulie basse":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/10/curl-biceps-poulie-basse.gif",
    "Traction supination":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/08/chin-up-traction-supination.gif",
    "Curl Zottman":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/01/curl-zottman.gif",
    "Curl en prise marteau avec élastique":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/01/curl-avec-elastique.gif",
    "Curl à la poulie vis-à-vis":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/10/curl-poulie-vis-a-vis.gif",
    "Drag curl avec haltères":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/09/drag-curl-halteres-assis.gif",
    "Curl inversé à la barre":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/04/curl-inverse-barre.gif",
    "Curl haltères prise neutre":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/09/curl-haltere-prise-neutre.gif",
    "Drag curl à la Smith machine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/08/drag-curl-smith-machine.gif",
    "Drag curl":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/06/drag-curl.gif",
    "Curl biceps alterné avec haltères":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/08/curl-biceps-avec-halteres-alterne.gif",
    "Waiter curl":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/06/waiter-curl.gif",
    "Curl biceps alterné en supination sur banc incliné":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/09/curl-biceps-alterne-sur-banc-incline.gif",
    "Curl biceps avec élastique":
      "https://www.docteur-fitness.com/wp-content/uploads/2023/07/curl-biceps-prise-pronation-bande-elastique.gif",
    "Curl unilatéral avec sangles de suspension":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/11/curl-unilateral-avec-sangles-de-suspension.gif",
    "Curl haltère prise marteau au pupitre":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/10/curl-haltere-prise-marteau-pupitre.gif",
    "Curl avec sangles de suspension":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/10/curl-avec-sangles-de-suspension.gif",
    "Curl incliné à la poulie":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/05/curl-incline-poulie.gif",
  },
  pectoraux: {
    "Pompes inclinées sur Smith Machine":
      "https://www.docteur-fitness.com/wp-content/uploads/2023/07/pompes-inclinees-sur-smith-machine.gif",
    "Pompes inclinées avec sangles de suspension":
      "https://www.docteur-fitness.com/wp-content/uploads/2023/08/pompes-inclinees-avec-sangles-de-suspension.gif",
    "Développé couché":
      "https://www.docteur-fitness.com/wp-content/uploads/2019/08/developpe-couche.gif",
    "Développé incliné à la barre":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/10/developpe-incline-barre.gif",
    "Écartés couché avec haltères":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/09/ecarte-couche-haltere.gif",
    "Écartés à la poulie vis-à-vis": {
      main: "https://www.docteur-fitness.com/wp-content/uploads/2000/06/ecarte-poulie-vis-a-vis-exercice-musculation-pectoraux.gif", // Image principale pour la carte (à configurer)
      variants: {
        haut: "https://louismove.com/wp-content/uploads/2023/01/01791101-Cable-Low-Fly_Chest-FIX_medium.png", // Image pour variante haut (poulie en bas = haut des pecs)
        milieu:
          "https://louismove.com/wp-content/uploads/2023/01/01881101-Cable-Middle-Fly_Chest-FIX_medium.png", // Image pour variante milieu
        bas: "https://louismove.com/wp-content/uploads/2023/01/02271101-Cable-Standing-Fly_Chest-FIX_medium.png", // Image pour variante bas (poulie en haut = bas des pecs)
      },
    },
    // Les anciennes entrées sont conservées pour compatibilité
    "Écartés à la poulie vis-à-vis (haut)": "",
    "Écartés à la poulie vis-à-vis (milieu)": "",
    "Écartés à la poulie vis-à-vis (bas)": "",
    "Développé couché haltères":
      "https://www.docteur-fitness.com/wp-content/uploads/2000/05/developpe-couche-halteres-exercice-musculation.gif",
    "Dips aux barres parallèles":
      "https://www.docteur-fitness.com/wp-content/uploads/2000/01/dips-pectoraux.gif",
    "Pec-deck ou butterfly":
      "https://www.docteur-fitness.com/wp-content/uploads/2000/06/pec-deck-butterfly-exercice-musculation.gif",
    "Développé incliné à la machine convergente":
      "https://www.docteur-fitness.com/wp-content/uploads/2000/06/developpe-incline-machine-convergente-exercice-musculation.gif",
    "Développé décliné à la barre":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/12/developpe-decline-barre.gif",
    "Écartés décliné avec haltères":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/11/ecartes-decline-avec-halteres.gif",
    "Écartés Hyght":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/06/hyght-dumbell-fly.gif",
    "Développé couché prise inversée":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/01/developpe-couche-prise-inversee.gif",
    "Écartés unilatéraux à la landmine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/04/ecartes-unilateral-landmine-pectoraux.gif",
    "Développé couché à la Smith machine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/08/developpe-couche-smith-machine.gif",
    "Hex press à la Smith machine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/08/hex-press-a-la-smith-machine.gif",
    "Écartés couché à la poulie vis-à-vis":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/04/ecartes-poulie-vis-a-vis.gif",
    "Développé debout avec élastique":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/02/developpe-debout-pectoraux-elastique.gif",
    "Développé couché serré avec haltères":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/08/developpe-couche-serre-avec-halteres.gif",
    "Développé incliné à la poulie":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/05/developpe-incline-poulie.gif",
    "Svend press":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/04/svend-press.gif",
    "Développé couché avec élastique":
      "https://www.docteur-fitness.com/wp-content/uploads/2023/07/developpe-couche-avec-elastique.gif",
    "Écarté à la poulie vis à vis haute à genoux":
      "https://www.docteur-fitness.com/wp-content/uploads/2023/07/ecarte-a-la-poulie-vis-a-vis-haute-a-genoux.gif",
    "Développé décliné avec élastique":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/09/developpe-decline-avec-elastique.gif",
    "Développé couché Larsen":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/09/developpe-couche-larsen.gif",
    "Développé couché unilatéral avec kettlebell":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/12/developpe-couche-unilateral-kettlebell.gif",
    "Développé couché au sol avec kettlebell":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/12/developpe-couche-au-sol-kettlebell.gif",
    "Développé à la landmine à genoux pour les pectoraux":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/11/developpe-landmine-pectoraux.gif",
    "Développé assis à la machine pour les pectoraux":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/11/developpe-machine-assis-pectoraux.gif",
    "Écartés avec sangles de suspension":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/11/ecartes-avec-sangles-de-suspension.gif",
    "Chest press avec sangles de suspension":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/10/chest-press-avec-sangles-suspension.gif",
    "Écartés incliné avec haltères":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/09/ecartes-incline-avec-halteres.gif",
    "Écarté unilatéral à la poulie":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/09/ecarte-unilateral-a-la-poulie.gif",
    "Développé incliné avec haltères":
      "https://www.docteur-fitness.com/wp-content/uploads/2000/06/developpe-incline-halteres-exercice-musculation.gif",
    "Écartés avec élastique":
      "https://www.docteur-fitness.com/wp-content/uploads/2000/02/ecartes-bande-elastique-bilateral.gif",
    "Développé couché au sol":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/12/developpe-couche-au-sol.gif",
  },
  dos: {
    "Muscle-up":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/08/muscle-up-calisthenics-street-workout-dos.gif",
    Traction:
      "https://www.docteur-fitness.com/wp-content/uploads/2022/02/traction-musculation-dos.gif",
    "Tirage horizontal à la poulie":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/02/tirage-horizontal-poulie.gif",
    "Rowing barre":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/09/rowing-barre.gif",
    "Shrug barre":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/01/shrug-barre.gif",
    "Pull-over assis à la machine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/01/musculation-pull-over-assis-machine.gif",
    "Traction supination":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/08/chin-up-traction-supination.gif",
    "Rowing haltère à un bras":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/08/rowing-haltere-un-bras.gif",
    "Rowing T-bar":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/08/rowing-barre-t-landmine.gif",
    "Tirage vertical prise serrée":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/08/tirage-vertical-prise-serree.gif",
    "Rowing en pronation assis à la machine Technogym":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/02/rowing-assis-machine-prise-pronation.gif",
    "Extension lombaire à la machine":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/12/extension-lombaire-a-la-machine.gif",
    "Rowing à la barre en T avec machine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/01/rowing-t-bar-machine.gif",
    "Rowing en prise neutre assis à la machine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/01/rowing-assis-machine-hammer-strenght.gif",
    "Tirage vertical en supination à la machine Hammer Strength":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/01/tirage-avant-iso-laterale-hammer-strength.gif",
    "Tirage vertical": {
      main: "assets/img/dos/Tirage vertical prise large.png", // Image principale pour la carte
      variants: {
        poulie:
          "https://www.docteur-fitness.com/wp-content/uploads/2021/08/tirage-vertical-prise-serree.gif", // Image pour variante poulie (à configurer)
        convergent:
          "https://lightinfitness.com/wp-content/uploads/2022/12/Tirage-dorsaux-Gold-Line.jpg", // Image pour variante convergent (à configurer)
      },
    },
    // Ancienne entrée conservée pour compatibilité
    "Tirage vertical prise large": "",
    "Tirage vertical prise inversée":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/01/tirage-vertical-prise-inversee.gif",
    "Pull-over décliné à la barre":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/05/pull-over-barre.gif",
    "Planche inversée":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/05/planche-inversee-abdos.gif",
    "Shrug à la poulie":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/04/shrug-poulie-haussement-epaules.gif",
    "Extension lombaire au banc à 45°":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/08/extension-lombaire-au-banc-45.gif",
    "Rowing buste penché avec élastique":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/09/rowing-buste-penche-avec-elastique.gif",
    "Shrugs avec haltères":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/11/shrugs-avec-halteres.gif",
    "Soulevé de terre avec machine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/11/souleve-de-terre-avec-machine.gif",
    "Tractions australiennes avec sangles de suspension":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/11/tractions-australiennes-avec-sangles-de-suspension.gif",
    "Extensions lombaires sur Swiss ball":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/11/extension-lombaire-sur-ballon-de-gym.gif",
    "Oiseau inversé avec sangles de suspension":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/10/oiseau-inverse-avec-sangles-de-suspension.gif",
    "Traction assistée avec élastique":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/12/traction-assiste-elastique.gif",
    "Rowing avec sangles de suspension":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/10/rowing-avec-sangles-de-suspension.gif",
    "Pullover avec deux haltères":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/10/pullover-avec-deux-halteres.gif",
    "Rowing inversé sous une table":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/10/rowing-inverse-sous-une-table.gif",
    "Bent over row prise disque":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/10/bent-over-row-prise-disque.gif",
    "Rowing unilatéral avec élastique":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/10/rowing-unilateral-avec-elastique.gif",
    "Rowing à la Smith machine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/10/rowing-smith-machine.gif",
    "Tirage horizontal prise large":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/10/tirage-horizontal-prise-large.gif",
    "Montée à la corde":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/10/montee-de-corde.gif",
    "Pull-over avec barre":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/04/pull-over-barre.gif",
    "Tirage incliné à la poulie haute":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/04/tirage-incline-poulie-haute.gif",
    "Traction lestée":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/02/traction-lestee.gif",
    "Traction assistée avec banc":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/02/traction-assistee-avec-banc.gif",
    "Tirage horizontal avec élastique":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/02/rowing-horizontal-bande-elastique.gif",
    "Soulevé de terre":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/01/tirage-vertical-prise-inversee.gif",
  },
  epaules: {
    "Élévation frontale sur banc incliné":
      "https://www.docteur-fitness.com/wp-content/uploads/2023/08/elevation-frontale-banc-incline.gif",
    "Développé épaules assis":
      "https://www.docteur-fitness.com/wp-content/uploads/2023/05/developpe-epaules-assis-dumbbell-z-press.gif",
    "Russian twist avec développé épaules":
      "https://www.docteur-fitness.com/wp-content/uploads/2023/07/russian-twist-avec-developpe-epaule.gif",
    "Développé militaire":
      "https://www.docteur-fitness.com/wp-content/uploads/2000/08/developpe-militaire-exercice-musculation.gif",
    "Développé Arnold":
      "https://www.docteur-fitness.com/wp-content/uploads/2000/08/developpe-arnold-exercice-musculation.gif",
    "Face pull":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/01/face-pull.gif",
    "Élévations latérales à la poulie vis à vis":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/02/elevations-laterales-poulie.gif",
    "Élévations latérales à la machine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/02/elevation-laterale-machine.gif",
    "Développé épaules avec haltères":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/02/developpe-epaule-halteres.gif",
    "Développé épaules debout à la landmine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/02/developpe-landmine.gif",
    "Rotation externe de l'épaule à la poulie":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/04/rotation-externe-epaule-poulie.gif",
    "Pec deck inversé":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/12/pec-deck-inverse.gif",
    "Oiseau assis sur banc":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/12/oiseau-assis-sur-banc.gif",
    "Développé épaule unilatéral avec élastique":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/08/developpe-epaule-unilateral-avec-elastique.gif",
    "Développé épaules à la Smith machine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/08/developpe-epaules-smith-machine.gif",
    "Tirage menton avec élastique":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/02/tirage-menton-avec-elastique.gif",
    "Oiseau avec élastique":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/09/oiseau-avec-elastique.gif",
    "Développé épaules avec élastique":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/08/developpe-epaules-avec-elastique.gif",
    "Élévations latérales inclinées avec haltère":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/06/elevation-laterale-incline-haltere.gif",
    "Rotation externe de l'épaule couchée avec haltère":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/06/rotation-externe-epaule-haltere.gif",
    "Handstand push-up":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/04/handstand-push-up.gif",
    "Pompes piquées":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/06/pike-push-up.gif",
    "Croix de fer avec haltères":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/04/croix-de-fer-halteres.gif",
    "Extension horizontale des épaules avec élastique":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/03/extension-horizontale-de-epaule-elastique.gif",
    "Thruster avec kettlebell":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/12/thruster-kettlebell.gif",
    "Développé épaule unilatéral à genou avec landmine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/11/developpe-epaules-unilateral-landmine.gif",
    "Élévations latérales unilatérales à la poulie":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/11/elevations-laterales-unilaterale-poulie.gif",
    "Développé épaules assis avec élastique":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/11/developpe-epaules-assis-avec-elastique.gif",
    "Développé épaules à la machine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/11/developpe-epaules-a-la-machine-shoulder-press.gif",
    "Oiseau inversé avec sangles de suspension":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/10/oiseau-inverse-avec-sangles-de-suspension.gif",
    "Thruster avec landmine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/10/thruster-landmine.gif",
    "Rotations cubaines":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/06/rotation-externe-vertical-epaule-haltere.gif",
    "Élévations frontales à la poulie basse":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/04/elevation-frontale-poulie-basse.gif",
    Thruster:
      "https://www.docteur-fitness.com/wp-content/uploads/2022/04/thruster.gif",
    "Développé nuque barre guidée":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/08/developpe-nuque-barre-guidee.gif",
    "Élévations latérales":
      "https://www.docteur-fitness.com/wp-content/uploads/2000/08/elevations-frontales-exercice-musculation.gif",
    "Élévations frontales":
      "https://www.docteur-fitness.com/wp-content/uploads/2000/08/elevations-laterales-exercice-musculation.gif",
    "Écartés inversés à la poulie":
      "https://www.inspireusafoundation.org/wp-content/uploads/2022/10/cable-rear-delt-fly.gif",
  },
  quadriceps: {
    Squat:
      "https://www.docteur-fitness.com/wp-content/uploads/2021/11/homme-faisant-un-squat-avec-barre.gif",
    "Squat barre devant":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/11/squat-barre-devant-front.gif",
    "Squat à la Smith machine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/12/split-squat-smith-machine.gif",
    "Hack Squat":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/01/hack-squat.gif",
    "Hack squat assis":
      "https://www.docteur-fitness.com/wp-content/uploads/2023/08/hack-squat-assis.gif",
    "Presse à cuisses inclinée":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/08/presse-a-cuisses-inclinee.gif",
    "Presse à cuisses horizontale":
      "https://www.docteur-fitness.com/wp-content/uploads/2000/06/presse-a-cuisse-exercice-musculation.gif",
    "Presse à cuisses verticale":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/08/presse-a-cuisses-verticale.gif",
    "Leg extension":
      "https://www.docteur-fitness.com/wp-content/uploads/2000/06/leg-extension-exercice-musculation.gif",
    "Montées sur banc":
      "https://www.docteur-fitness.com/wp-content/uploads/2000/06/montees-sur-banc-exercice-musculation.gif",
    "Fentes avant avec haltères":
      "https://www.docteur-fitness.com/wp-content/uploads/2000/06/fentes-avant-exercice-musculation.gif",
    "Squat bulgare avec haltères":
      "https://www.docteur-fitness.com/wp-content/uploads/2000/06/squat-bulgare-halteres-exercice-musculation.gif",
    "Squat sauté":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/04/squat-saute-exercice-musculation-jambes.gif",
    "Goblet squat avec haltère":
      "https://www.docteur-fitness.com/wp-content/uploads/2000/06/squat-goblet-exercice-musculation.gif",
    "Overhead squat":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/12/overhead-squat.gif",
    "Split squat à la Smith machine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/12/split-squat-smith-machine.gif",
    "Squat avec landmine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/01/squat-landmine.gif",
    "Squat cosaque":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/01/cossack-squat.gif",
    "Air Squat":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/08/air-squat.gif",
    "Squat pistolet avec sangle de suspension":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/10/squat-pistolet-avec-sangle-de-suspension.gif",
    "Split squat avec sangles de suspension":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/10/split-squat-avec-sangles-de-suspension.gif",
    "Squat avant avec double kettlebell":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/12/front-squat-kettlebell.gif",
    "Safety bar squat":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/07/safety-bar-squat.gif",
    "Fentes inversées avec landmine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/04/fentes-arriere-landmine.gif",
  },
  "ischio-jambiers": {
    "Leg curl allongé":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/10/leg-curl-allonge.gif",
    "Soulevé de terre jambes tendues":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/04/souleve-de-terre-jambes-tendues.gif",
    "Good morning":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/01/good-morning-exercice.gif",
    "Soulevé de terre roumain":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/12/souleve-de-terre-roumain-kettlebell.gif",
    "Leg curl assis à la machine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/02/leg-curl-assis-machine.gif",
    "Nordic hamstring curl":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/09/nordic-hamstring-curl-avec-elastique.gif",
    "Soulevé de terre":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/12/souleve-de-terre.gif",
    "Extensions de hanches au GHD":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/10/glute-ham-developer-ghd.gif",
    "Presse à cuisses inclinée":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/08/presse-a-cuisses-inclinee.gif",
    Squat:
      "https://www.docteur-fitness.com/wp-content/uploads/2021/11/homme-faisant-un-squat-avec-barre.gif",
    "Rack Pull":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/01/rack-pull.gif",
    "Fentes avant avec barre":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/12/fente-avant-barre-femme.gif",
  },
  mollets: {
    "Extensions des mollets avec partenaire":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/10/extensions-des-mollets-avec-partenaire.gif",
    "Extension des mollets à la barre debout":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/10/extension-mollets-barre-debout.gif",
    "Extensions des mollets assis avec barre":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/02/extension-mollets-assis-barre.gif",
    "Élévations des mollets au Donkey":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/02/extension-des-mollets-donkey.gif",
    "Extensions des mollets au hack-squat":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/11/extensions-mollets-hack-squat.gif",
    "Extensions des mollets assis à la Smith machine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/08/extension-mollets-assis-machine-smith.gif",
    "Extensions des mollets debout à la Smith machine":
      "https://www.docteur-fitness.com/wp-content/uploads/2022/08/extension-mollets-smith-machine.gif",
    "Extensions des mollets debout à la machine":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/10/extension-mollets-debout-machine.gif",
    "Extensions des mollets sur une marche":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/10/extension-mollets-sur-marche.gif",
    "Extension des mollets assis à la machine":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/10/extension-mollets-assis-machine.gif",
    "Extension des mollets à la presse":
      "https://www.docteur-fitness.com/wp-content/uploads/2021/10/extension-mollets-presse-45.gif",
  },
  abdominaux: {
    Crunch: "",
    Planche: "",
    "Relevés de jambes": "",
    "Russian twist": "",
  },
};

// Fonction pour obtenir l'URL de l'image d'un exercice
function getExerciseImageUrl(exerciseName, muscleGroup, variant = null) {
  if (!exerciseImages[muscleGroup]) {
    return null;
  }

  // Extraire la variante du nom d'exercice si elle est entre parenthèses
  let baseExerciseName = exerciseName;
  let extractedVariant = variant;

  if (
    !extractedVariant &&
    exerciseName.includes("(") &&
    exerciseName.includes(")")
  ) {
    const match = exerciseName.match(/^(.+?)\s*\((.+?)\)$/);
    if (match) {
      baseExerciseName = match[1].trim();
      extractedVariant = match[2].trim();
    }
  }

  // Essayer d'abord avec le nom de base
  let exerciseImage = exerciseImages[muscleGroup][baseExerciseName];

  // Si pas trouvé, essayer avec le nom complet (pour compatibilité avec anciennes stats)
  if (!exerciseImage) {
    exerciseImage = exerciseImages[muscleGroup][exerciseName];
  }

  // Si l'exercice a une structure avec image principale et variantes
  if (
    exerciseImage &&
    typeof exerciseImage === "object" &&
    exerciseImage.main !== undefined
  ) {
    // Utiliser la variante extraite ou celle fournie en paramètre
    const finalVariant = extractedVariant || variant;

    // Si on demande une variante spécifique
    if (
      finalVariant &&
      exerciseImage.variants &&
      exerciseImage.variants[finalVariant]
    ) {
      const variantUrl = exerciseImage.variants[finalVariant];
      if (typeof variantUrl === "string" && variantUrl.trim() !== "") {
        return variantUrl.trim();
      }
    }
    // Sinon, retourner l'image principale
    if (
      exerciseImage.main &&
      typeof exerciseImage.main === "string" &&
      exerciseImage.main.trim() !== ""
    ) {
      return exerciseImage.main.trim();
    }
    return null;
  }

  // Structure classique (chaîne simple)
  if (typeof exerciseImage === "string" && exerciseImage.trim() !== "") {
    return exerciseImage.trim();
  }

  return null;
}

// Fonction pour réinitialiser le cache des images (utile pour debug)
function resetExerciseImagesCache() {
  try {
    localStorage.removeItem("neostats_exercise_images");
    // Recharger la page pour réinitialiser
    if (confirm("Le cache sera réinitialisé. La page va se recharger.")) {
      window.location.reload();
    }
  } catch (error) {
    console.warn("Impossible de réinitialiser le cache:", error);
  }
}

// Fonction pour définir l'URL de l'image d'un exercice
function setExerciseImageUrl(exerciseName, muscleGroup, imageUrl) {
  if (!exerciseImages[muscleGroup]) {
    exerciseImages[muscleGroup] = {};
  }
  exerciseImages[muscleGroup][exerciseName] = imageUrl;
  // Sauvegarder dans localStorage
  saveExerciseImages();
}

// Sauvegarder les images dans localStorage
function saveExerciseImages() {
  try {
    localStorage.setItem(
      "neostats_exercise_images",
      JSON.stringify(exerciseImages)
    );
  } catch (error) {
    console.warn("Impossible de sauvegarder les images:", error);
  }
}

// Charger les images depuis localStorage
function loadExerciseImages() {
  try {
    // Créer une copie des valeurs par défaut du fichier
    const defaultImages = JSON.parse(JSON.stringify(exerciseImages));

    const saved = localStorage.getItem("neostats_exercise_images");
    if (saved) {
      const savedImages = JSON.parse(saved);

      // Fusionner intelligemment :
      // 1. Les valeurs du fichier JS (non vides) sont TOUJOURS prioritaires
      // 2. Si une valeur dans le fichier JS est vide, vérifier localStorage
      // 3. Si localStorage a une valeur non vide, l'utiliser
      Object.keys(exerciseImages).forEach((group) => {
        if (savedImages[group]) {
          Object.keys(exerciseImages[group]).forEach((exerciseName) => {
            const fileValue =
              defaultImages[group] && defaultImages[group][exerciseName]
                ? defaultImages[group][exerciseName]
                : "";
            const savedValue = savedImages[group][exerciseName];

            // PRIORITÉ 1: Si le fichier a une valeur non vide, elle est TOUJOURS utilisée
            if (
              fileValue &&
              typeof fileValue === "string" &&
              fileValue.trim() !== ""
            ) {
              // Utiliser la valeur du fichier (ne pas laisser localStorage l'écraser)
              exerciseImages[group][exerciseName] = fileValue;
            }
            // PRIORITÉ 2: Si le fichier est vide mais localStorage a une valeur, l'utiliser
            else if (
              savedValue &&
              typeof savedValue === "string" &&
              savedValue.trim() !== ""
            ) {
              exerciseImages[group][exerciseName] = savedValue;
            }
            // Sinon, garder la valeur du fichier (vide)
            else {
              exerciseImages[group][exerciseName] = fileValue || "";
            }
          });
        }
      });
    }

    // Sauvegarder pour synchroniser localStorage avec les valeurs actuelles
    saveExerciseImages();
  } catch (error) {
    console.warn("Impossible de charger les images:", error);
  }
}

// Initialiser le chargement des images
loadExerciseImages();
