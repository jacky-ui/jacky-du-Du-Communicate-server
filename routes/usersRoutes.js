const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
router.use(express.json());
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const utils = require("../utils");
const fileUpload = require("express-fileupload");
const path = require("path");

// Create new user
router.post("/uploadimage", (req, res) => {
    const imageData = req.files["image-field"];
    const imageName = imageData.name;
    const uploadPath = `images/${imageName}`;
    imageData.mv(`${__dirname}/../assets/${uploadPath}`, function(err) {
        if(err) {
            console.log(err);
            return res.status(500).send(err.message)
        }
        return res.status(201).send(uploadPath);
    })
})

router.post("/signup", (req, res) => {
    const { firstName, lastName, username, password } = req.body;

    if (!firstName || !lastName || !username || !password) {
        return res.status(400).send("Please enter all required fields!")
    }

    const hashedPassword = bcrypt.hashSync(password, 12);
    
    const usersData = utils.readUsers();

    const newUser = {
        id: uniqid(),
        firstname: firstName,
        lastname: lastName,
        username: username,
        password: hashedPassword,
    }

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

    // Will compare crypt password vs user password and return true
    const convertedPassword = bcrypt.compareSync(password, foundUsername.password)

    // Once found username, will take username info and add to new array
    let selectedUser = [foundUsername.username, convertedPassword, foundUsername.id, foundUsername.profile];

    // // Conditional to see if they match
    if ((selectedUser[1] === false)) {
        return res.status(400).send("Invalid password");
    } 

    // // Create token
    const token = jwt.sign(
        { id: selectedUser[2], user: selectedUser[0], profilePicture: selectedUser[3] },
        process.env.JWT_KEY,
        {expiresIn: "24h"}
    );

    res.json({ token });
})

module.exports = router;