const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
router.use(express.json());
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const utils = require("../utils");
const authenticate = require('../middleware/authenticate');

// GET request for current user information
router.get("/:userId", authenticate, (req, res) => {
    console.log(req.params);
    console.log(req.headers.authorization);
    const incomingId = req.params;

    // Compare and find id of current user vs database
    const userdataBase = utils.readUsers();
    const foundUser = userdataBase.find((user) => incomingId === user.id);

    res.status(200).send("Hello World");
})

module.exports = router;