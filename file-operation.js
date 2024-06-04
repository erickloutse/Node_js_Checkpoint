// Ce fichier effectue des opérations sur les fichiers.

const fs = require("fs");

// Écrire dans le fichier "welcome.txt"
fs.writeFile("welcome.txt", "Bonjour Node", (err) => {
  if (err) throw err;
  console.log("Fichier créé avec succès !");
});

// Lire à partir du fichier "welcome.txt"
fs.readFile("welcome.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
