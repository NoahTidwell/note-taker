const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('./db/db.json');
const uuidv4 = require('uuid');
const PORT = process.env.PORT || 3007;


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, './public')));

// HTML Notes Page GET Route
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));

});

// POST Route for New Note
app.post('/notes', (req, res) => {
    console.log(req.body);
    res.status(201).send(`Created Note.`);
});

// HTML Landing Page GET Route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
    
});





app.listen(PORT, () => {
    console.log(`Get ready to take notes on Port ${PORT}`);
});