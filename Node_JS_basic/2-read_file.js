// Importe le module Node.js pour lire les fichiers
const fs = require('fs');

// Déclare une fonction qui compte les étudiants depuis un fichier CSV
function countStudents(path) {
  try {
    // Lit le contenu du fichier de façon synchrone
    const data = fs.readFileSync(path, 'utf8');

    // Découpe le fichier en lignes
    const lines = data.split('\n');

    // Supprime la première ligne qui contient les en-têtes
    const students = lines.slice(1);

    // Supprime les lignes vides
    const newTab = students.filter((line) => line.trim());

    // Affiche le nombre total d'étudiants
    console.log(`Number of students: ${newTab.length}`);

    // Crée un objet pour regrouper les prénoms par spécialité
    const obj = {};

    // Parcourt chaque ligne étudiant
    newTab.forEach((line) => {
      // Découpe une ligne CSV en plusieurs valeurs
      const student = line.split(',');

      // Récupère le prénom de l'étudiant
      const firstname = student[0];

      // Récupère la spécialité de l'étudiant
      const field = student[3];

      // Crée un tableau pour la spécialité si elle n'existe pas encore
      if (!obj[field]) {
        obj[field] = [];
      }

      // Ajoute le prénom dans le tableau de sa spécialité
      obj[field].push(firstname);
    });

    // Parcourt chaque spécialité enregistrée dans l'objet
    Object.keys(obj).forEach((group) => {
      // Compte le nombre d'étudiants dans la spécialité
      const numberOfStudents = obj[group].length;

      // Transforme le tableau des prénoms en liste séparée par des virgules
      const listOfName = obj[group].join(', ');

      // Affiche le nombre d'étudiants et leurs prénoms pour chaque spécialité
      console.log(`Number of students in ${group}: ${numberOfStudents}. List: ${listOfName}`);
    });
  } catch (error) {
    // Lance une erreur si le fichier ne peut pas être lu
    throw new Error('Cannot load the database');
  }
}

// Exporte la fonction pour pouvoir l'utiliser avec require()
module.exports = countStudents;