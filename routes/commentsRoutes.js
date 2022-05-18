const express = require("express");
const router = express.Router();
router.use(express.json());
const utils = require("../utils");

router.get("/hello", (_req, res) => {
    console.log("Hello World");
});

module.exports = router;