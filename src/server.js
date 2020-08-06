const proffys = [
    {name, avatar, whatsapp, subject, cost, weekday, time_from, time_to}
]

const express = require('express');
const app = express();

app.use(express.static("public"))

app.get('/', (req, res) => {

    res.sendFile(__dirname + "/views/index.html");

});

app.get('/study', (req, res) => {

    res.sendFile(__dirname + "/views/study.html");

});

app.get('/give-classes', (req, res) => {

    res.sendFile(__dirname + "/views/give-classes.html");

});

app.listen(5500);
