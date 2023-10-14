const express = require("express");
const { createUser, getUser } = require("./usercontroller");
const router = express.Router();

router.route("/create").post(createUser);
router.route("/student/:rollno").get(getUser);

module.exports = router;
