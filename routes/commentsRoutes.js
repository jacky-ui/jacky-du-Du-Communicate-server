const express = require("express");
const router = express.Router();
router.use(express.json());
const uniqid = require("uniqid");
const authenticate = require("../middleware/authenticate");
const utils = require("../utils");

// Will take front-end POST request and add to comments JSON
router.post("/post", (req, res) => {
    const { userId, profilePicture, comments, username } = req.body;

    if (!userId || !profilePicture || !comments ||!username) {
        return res.status(400).send("Bad requests");
    }

    const commentsData = utils.readComments();

    // Create timestamp for comment
    const timestamp = Date.now();

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
    commentsData.unshift(newComment);
    utils.writeComments(commentsData);

    res.status(201).send("Posted!");
});

// Front-end request to get all comments in JSON
router.get("/", authenticate, (_req, res) => {
    const commentsJSON = utils.readComments();

    res.status(200).json(commentsJSON);
})

// Front-end request to get all comments by a user
router.get("/:id", authenticate, (req, res) => {
    const userId = req.params.id;
    console.log(userId);

    const userComments = utils.readComments();
    const foundComments = userComments.filter((comment) => comment.id === userId);
    console.log(foundComments.length);
    if(foundComments.length === 0) {
       return console.log("Nothing here");
    }console.log("Found something");

    res.status(200).send(foundComments);
})

module.exports = router;