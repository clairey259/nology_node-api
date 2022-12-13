
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccount.firebase");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;