const express = require("express");
const app = express();
const http = require("http");
require("dotenv").config();
const { PORT } = process.env;
const socketio = require("socket.io");
const usersRoutes = require("./routes/usersRoutes");
const dashbaordRoutes = require("./routes/dashboardRoutes");
const commentsRoutes = require("./routes/commentsRoutes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static("assets"));

// Socket 
const server = http.createServer(app);
const io = socketio(server, { 
    cors: { 
        origin: "*",
        method: ["GET", "POST"] 
    }  
});

io.on("connection", (socket) => {
    console.log("user connected");

    socket.on("send message", (data) => {
        console.log(data);
    })
})

app.use("/users/", usersRoutes);
app.use("/dashboard/", dashbaordRoutes);
app.use("/comments", commentsRoutes);

// io.on("connection", socket => {
//     // User enter chat
//     socket.on("user", user => {});

//     // When user sends message
//     socket.on("message", message => {});

//     // User leaves the chat
//     socket.on("disconnect", () => {});
// })

app.use("/", (_req, res) => {
    res.send("Welcome!")
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});