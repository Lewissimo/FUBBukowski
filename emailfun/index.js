const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true}); // Domyślnie zezwala na wszystkie źródła
admin.initializeApp();

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(functions.config().sendgrid.key);

exports.sendEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => { 
    if (req.method !== "POST") {
      return res.status(405).send("Metoda nie dozwolona");
    }

    try {
      const {to, from, subject, text} = req.body;
      const msg = {
        to,
        from,
        subject,
        text,
      };

      sgMail.send(msg)
          .then(() => res.status(200).send("Email wysłany pomyślnie"))
          .catch((error) => {
            console.error("Błąd przy wysyłaniu emaila:", error);
            res.status(500).send(`Błąd serwera`);
          });
    } catch (error) {
      console.error("Błąd przy wysyłaniu emaila:", error);
      res.status(500).send(`Błąd serwera`);
    }
  });
});
