const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
router.use(express.json());
const utils = require("../utils");

router.get("/login", (_req, res) => {
    const usersData = utils.readUsers();
    res.status(200).json(usersData);
})

module.exports = router;