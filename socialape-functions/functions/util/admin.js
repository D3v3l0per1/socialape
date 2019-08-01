const admin = require("firebase-admin");

var serviceAccount = require("../secret.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socialape-d5d08.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };