const express = require("express");
const router = express.Router();
router.use(express.json());
const uniqid = require("uniqid");
const utils = require("../utils");

router.post("/post", (req, res) => {
    const { userId, profilePicture, comments, username } = req.body;

    if (!userId || !profilePicture || !comments ||!username) {
        return res.status(400).send("Bad requests");
    }

    const newComment = {
        id: userId,
        commentId: uniqid(),
        username: username,
        comment: comments,
        profile: profilePicture
    }

    utils.writeComments(newComment);


    res.status(201).send("Posted!");
});

module.exports = router;