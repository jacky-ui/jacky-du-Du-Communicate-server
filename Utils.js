const fs = require("fs");

// Function to parse users JSON
function readUsers() {
    const users = fs.readFileSync("./data/users.json");
    const parsedUsers = JSON.parse(users);
    return parsedUsers;
};

// Function to add new users to users JSON
function writeUsers(newUser) {
    const stringifiedUsers = JSON.stringify(newUser);
    fs.writeFileSync("./data/users.json", stringifiedUsers);
}

// function to parse comments JSON
function readComments() {
    const commentsJSON = fs.readFileSync("./data/comments.json");
    const parsedComments = JSON.parse(commentsJSON);
    return parsedComments;
};

// function to write in comments JSON
function writeComments(comments) {
    const stringifiedComment = JSON.stringify(comments);
    fs.writeFileSync("./data/comments.json", stringifiedComment);
};

module.exports = { readUsers, writeUsers, readComments, writeComments };