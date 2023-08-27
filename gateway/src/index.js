const express = require("express");
const cors = require("cors");
const axios = require("axios");


const app = express();

app.use(cors());

app.use(express.json());

// simple route
app.get("/", (req, res) => {
    axios.get(process.env.MAIL_URL + '/')
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

app.get("/published", (req, res) => {
    const id = req.params.id
    axios.get(process.env.MAIL_URL + '/published' + '/' + id)
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

app.get("/:id", (req, res) => {
    const id = req.params.id
    axios.get(process.env.MAIL_URL + '/' + id)
        .then(data => res.json(data))
        .catch(err => res.json(err));
});


app.put("/:id", (req, res) => {
    const id = req.params.id
    axios.put(process.env.MAIL_URL + '/published'+ '/' + id)
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

app.post("/", (req, res) => {
    const body = req.body
    axios.post(process.env.MAIL_URL + '/')
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

app.delete("/:id", (req, res) => {
    const id = req.params.id
    axios.delete(process.env.MAIL_URL + '/' + id)
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

app.delete("/", (req, res) => {
    axios.delete(process.env.MAIL_URL + '/')
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

const PORT = process.env.PORT || '8080';
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
