const express = require("express");
const db = require('./models')
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json())

db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });


db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

require("./routes/tutorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || '4000';
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
