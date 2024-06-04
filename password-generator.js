// Ce fichier utilise le module "generate-password" pour générer un mot de passe aléatoire.
const generatePassword = require("generate-password");

// Fonction pour générer un mot de passe aléatoire
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true,
  });
  console.log(password);
}

generateRandomPassword();
