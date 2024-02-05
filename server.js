require("dotenv").config();

require('./config/db.connection.js')

const { PORT } = process.env;

const express = require("express");

const app = express();

const cors = require('cors')
const morgan = require('morgan')

// Router
const disneyAdultsRouter = require("./routes/disneyAdults");

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// Routes:
app.use("/", disneyAdultsRouter);


app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

