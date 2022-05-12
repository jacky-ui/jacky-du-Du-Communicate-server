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