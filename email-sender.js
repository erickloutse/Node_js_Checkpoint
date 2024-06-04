// Ce fichier envoie un e-mail en utilisant le module "nodemailer".
const nodemailer = require("nodemailer");

// Configuration du service de messagerie
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mail@gmail.com",
    pass: "673042",
  },
});

// Options de l'e-mail à envoyer
const mailOptions = {
  from: "mai@gmail.com",
  to: "mail@gmail.com",
  subject: "Email de Test",
  text: "Ceci est un email de test depuis Node.js",
};

// Envoi de l'e-mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email envoyé: " + info.response);
  }
});
