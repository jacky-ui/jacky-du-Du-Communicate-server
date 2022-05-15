const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
router.use(express.json());
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const utils = require("../utils");

router.get("/:userId", (req, res) => {
    res.status(200).send("Hello World");
})

module.exports = router;