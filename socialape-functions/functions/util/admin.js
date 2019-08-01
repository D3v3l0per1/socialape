const admin = require("firebase-admin");

var serviceAccount = require("../secret.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socialape-d5d08.firebaseio.com",
  storageBucket: "socialape-d5d08.appspot.com",
});

const db = admin.firestore();

module.exports = { admin, db };