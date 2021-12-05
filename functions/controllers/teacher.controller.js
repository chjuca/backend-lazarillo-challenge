const admin = require("firebase-admin")
const path = require("path");

admin.initializeApp({
    credential: admin.credential.cert(path.join(__dirname, "../service-account-credentials.json")),
    databaseURL: "https://lazarillo-challenge-9e1c9-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

async function createTeacher(req, res) {
    const {name, subjects, dateBirth, direction, typeContract}= req.body;
    try {
        db.collection("teachers").add({
            name,
            subjects,
            dateBirth,
            direction,
            typeContract
        }) 
        return res.status(204).json({
            ok: true,
            message: "Teacher created successfully"
        })      
    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Something goes wrong"
        })
    }  
}

async function getTeachers(req, res) {
    try {
        const query = db.collection("teachers");
        const querySnapshot = await query.get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            name: doc.data().name,
            subjects: doc.data().subjects,
            dateBirth: doc.data().dateBirth,
            direction: doc.data().direction,
            typeContract: doc.data().typeContract
        }))
        return res.status(200).json(response)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            message: "Something goes wrong"
        })
    }
}

module.exports = {createTeacher, getTeachers};