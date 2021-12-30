const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const {
  createTeacher,
  getTeachers,
  deleteTeacher,
  updateTeachers,
  getTeacherByID,
} = require("./controllers/teacher.controller");

const app = express();
app.use(cors());

app.post("/api/teacher", createTeacher);
app.get("/api/teacher", getTeachers);
app.get("/api/teacher/:id", getTeacherByID);
app.put("/api/teacher/:id", updateTeachers);
app.delete("/api/teacher/:id", deleteTeacher);

exports.app = functions.https.onRequest(app);
