const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
router.use(express.json());
const utils = require("../utils");

// GET user data from JSON
router.get("/", (_req, res) => {
    const usersData = utils.readUsers();
    res.status(200).json(usersData);
});

// Will take in user login POST request and make sure they match data
router.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Condition to make sure all fields are filled before response
    if (!username && !password) {
        return res.status(400).send("All fields are required");
    }

    console.log(username, password);
})

module.exports = router;