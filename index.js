const express = require("express");
const app = express();
require("dotenv").config();
const { PORT } = process.env;
const usersRoutes = require("./routes/usersRoutes");
const dashbaordRoutes = require("./routes/dashboardRoutes");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/users/", usersRoutes);
app.use("/dashboard/", dashbaordRoutes);

app.use("/", (_req, res) => {
    res.send("Welcome!")
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});