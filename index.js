const express = require("express");
const app = express();
const http = require("http");
require("dotenv").config();
const { PORT } = process.env;
const socketio = require("socket.io");
const usersRoutes = require("./routes/usersRoutes");
const dashbaordRoutes = require("./routes/dashboardRoutes");
const commentsRoutes = require("./routes/commentsRoutes");
const uniqid = require("uniqid");
const cors = require("cors");
const fileUpload = require("express-fileupload");

app.use(cors());
app.use(fileUpload());
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

    socket.on("send message", (data) => {
        data.id = uniqid();

        io.emit("receive_message", data);
    })

    socket.on("join", (data) => {

        io.emit("receive_member", data);
    })
})

app.use("/users/", usersRoutes);
app.use("/dashboard/", dashbaordRoutes);
app.use("/comments", commentsRoutes);

app.use("/", (_req, res) => {
    res.send("Welcome!")
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});