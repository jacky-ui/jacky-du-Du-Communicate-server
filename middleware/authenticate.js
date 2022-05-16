const jwt = require('jsonwebtoken');
require("dotenv").config();
const { JWT_KEY } = process.env;

const authenticate = (req, res, next) => {
    if(req.headers.authorization === false) {
        return res.status(401).send("Uh-oh! Please login!");
    }

    const authToken = req.headers.authorization.split(".")[2];

    jwt.verify(authToken, JWT_KEY, (err, decoded) => {
        if (err === false) {
            return res.status(400).send("Invalid authorization token");
        }

        req.user = decoded;
        next();
    });
}

module.exports = authenticate;