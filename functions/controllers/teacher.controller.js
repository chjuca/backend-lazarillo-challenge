const admin = require("firebase-admin");
const path = require("path");
const moment = require("moment");

admin.initializeApp({
  credential: admin.credential
      .cert(path.join(__dirname, "../service-account-credentials.json")),
  databaseURL: "https://lazarillo-challenge-9e1c9-default-rtdb.firebaseio.com",
});

const db = admin.firestore();

/**
 * @param {Object} req - function request
 * @param {Object} res - function response
 */
async function createTeacher(req, res) {
  const {name, subjects, dateBirth, direction, typeContract} = req.body;
  try {
    db.collection("teachers").add({
      name,
      subjects,
      dateBirth: new Date(dateBirth),
      direction,
      typeContract,
    });
    return res.status(201).json({
      ok: true,
      message: "Teacher created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: "Something goes wrong",
    });
  }
}

/**
 * @param {Object} req - function request
 * @param {Object} res - function response
 */
async function getTeachers(req, res) {
  try {
    const query = db.collection("teachers");
    const querySnapshot = await query.get();
    const docs = querySnapshot.docs;

    const response = docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      subjects: doc.data().subjects,
      dateBirth: doc.data().dateBirth,
      direction: doc.data().direction,
      typeContract: doc.data().typeContract,
    }));
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      message: "Something goes wrong",
    });
  }
}

/**
 * @param {Object} req - function request
 * @param {Object} res - function response
 */
async function getTeacherByID(req, res) {
  try {
    const doc = db.collection("teachers").doc(req.params.id);
    const item = await doc.get();
    const response = item.data();
    const dateObj = new Date(response.dateBirth._seconds * 1000);
    response.dateBirth = moment.utc(dateObj).format("YYYY-MM-DD");
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).send(error);
  }
}


/**
 * @param {Object} req - function request
 * @param {Object} res - function response
 */
async function updateTeachers(req, res) {
  const {name, subjects, dateBirth, direction, typeContract} = req.body;
  try {
    const document = db.collection("teachers").doc(req.params.id);
    await document.update({
      name,
      subjects,
      dateBirth,
      direction,
      typeContract,
    });
    return res.status(200).json({
      ok: true,
      message: "Teacher updated successfully",
    });
  } catch (error) {
    return res.status(500).json(error);
  }
}

/**
 * @param {Object} req - function request
 * @param {Object} res - function response
 */
async function deleteTeacher(req, res) {
  try {
    const doc = db.collection("teachers").doc(req.params.id);
    await doc.delete();
    return res.status(200).json({
      ok: true,
      message: "Teacher deleted successfully",
    });
  } catch (error) {
    return res.status(500).json(error);
  }
}


module.exports = {createTeacher, getTeachers, updateTeachers, deleteTeacher,
  getTeacherByID};
