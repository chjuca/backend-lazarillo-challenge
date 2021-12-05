const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { createTeacher, getTeachers } = require("./controllers/teacher.controller");

const app = express();
app.use(cors());

app.post("/api/teacher", createTeacher)
app.get("/api/teacher", getTeachers)

exports.app = functions.https.onRequest(app);