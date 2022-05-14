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
    console.log(username, password);

    // Condition to make sure all fields are filled before response
    if (!username || !password) {
        return res.status(400).send("All fields are required");
    }

    // Check if user is in database
    const dataBase = utils.readUsers();
    const foundUsername = dataBase.find((userName) => username === userName.username);
    const foundPassword = dataBase.find((passWord) => password === passWord.password);

    console.log(foundUsername.username);
    console.log(foundPassword.password)
    if ((foundUsername.username === username) && foundPassword.password === password) {
        console.log("Welcome");
        return;
    } console.log("try again");

    // if ((username === foundUsername && (password === foundPassword))) {
    //     console.log("You made it");
    //     return;
    // } console.log("Try again");

    res.status(200).send("hello world");

    // Parse JSON and find user
})

module.exports = router;