const admin = requiere("firebase-admin")

admin.initializeApp({
    credential: admin.credential.cert("../credentials.json"),
    databaseURL: "https://lazarillo-challenge-9e1c9-default-rtdb.firebaseio.com"
  
});

const db = admin.firestore();

async function getTeachers(req, res) {
    const {name, subjects, dateBirth, direction, typeContract}= req.body;
    try {
        db.collection("teachers").add({
            name,
            subjects,
            dateBirth,
            direction,
            typeContract
        })       
    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Something goes wrong"
        })
    }  
}