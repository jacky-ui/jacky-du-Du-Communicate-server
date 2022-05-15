const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
router.use(express.json());
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const utils = require("../utils");

// Create new user
router.post("/signup", (req, res) => {
    const { firstName, lastName, username, password } = req.body;
    console.log( firstName, lastName, username, password );

    if (!firstName || !lastName || !username || !password) {
        return res.status(400).send("Please enter all required fields!")
    }

    const hashedPassword = bcrypt.hashSync(password, 12);
    console.log(hashedPassword);
    
    const usersData = utils.readUsers();

    const newUser = {
        id: uniqid(),
        firstname: firstName,
        lastname: lastName,
        username: username,
        password: hashedPassword
    }
    console.log(newUser);
    utils.writeUsers(usersData);
    usersData.push(newUser);
    utils.writeUsers(usersData);

    res.status(201).send("Account created!");
})

// Will take in user login POST request and make sure they match data
router.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Condition to make sure all fields are filled before response
    if (!username || !password) {
        return res.status(400).send("All fields are required");
    }

    // Go through database, checks username and password and assigns it to a variable
    const dataBase = utils.readUsers();
    let foundUsername = dataBase.find((userName) => username === userName.username);
    let selectedUser = [foundUsername.username, foundUsername.password, foundUsername.id];

    // Conditional to see if they match
    if ((selectedUser.includes(username)) && (!selectedUser.includes(password))) {
        return res.status(400).send("Invalid login attempt");
    } 

    // // Create token
    const token = jwt.sign(
        { id: selectedUser.id, user: selectedUser.username },
        process.env.JWT_KEY,
        {expiresIn: "24h"}
    );

    res.json({ token });
})

module.exports = router;