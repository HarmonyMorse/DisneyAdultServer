require("dotenv").config();

require('./config/db.connection.js')

const { PORT } = process.env;

const express = require("express");

const app = express();

// Routes:


app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
