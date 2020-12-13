const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./lib/db.js').db;
const path = require('path');

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/getPosts', (req, res) => {
    db.query('SELECT * FROM posts', (err, result) => {
        (err) ? res.json(err) : res.json(result)
    });
});

app.get('/getPost/:id', (req, res) => {
    const id = req.params.id;
    db.query(`SELECT * FROM posts WHERE id="${id}"`, (err, result) => {
        (err) ? res.json(err) : res.json(result);
    });
});

app.post('/addPost', (req, res) => {
    const inf = req.body;
    let curDate = new Date();
    let goDate = curDate.getFullYear() + '-' + curDate.getMonth() + '-' + curDate.getDate();
    db.query(`INSERT INTO posts VALUES (null, "${inf.title}", "${inf.content}", ${goDate}, "${inf.writer}", 0)`, (err, result) => {
        (err) ? res.status(500).json(err) : res.status(200).json({status: "post added"});
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening. PORT: ${port}`);
});