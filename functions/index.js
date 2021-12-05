const functions = require("firebase-functions");
const admin = requiere("firebase-admin")
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

admin.initializeApp({
    credential: admin.credential.cert("./credendials.json"),
    databaseURL: "https://lazarillo-challenge-9e1c9-default-rtdb.firebaseio.com"
  
});

app.get('/holis', (req, res) => {
    res.json({
        message: "Hola"
    })
})

exports.app = functions.https.onRequest(app);