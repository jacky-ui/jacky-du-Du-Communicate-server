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

    const commentsData = utils.readComments();

    // Create timestamp for comment
    const timestamp = Date.now();
    console.log(typeof(username));

    const newComment =
        {
            id: userId,
            commentId: uniqid(),
            username: username,
            comment: comments,
            timestamp: timestamp,
            profile: profilePicture
        }

    utils.writeComments(commentsData);
    commentsData.push(newComment);
    utils.writeComments(commentsData);

    res.status(201).send("Posted!");
});

module.exports = router;