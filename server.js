const express = require('express');
const path = require('path');
const fs = require('fs');
const { 
    v1: uuidv1,
    v4: uuidv4,
  } = require('uuid');
const db = require('./db/db.json');
const PORT = process.env.PORT || 3007;

// Create Server
const app = express();

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));

// HTML Notes Page GET Route
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));

});

app.get('/api/notes', (req, res) => {
    res.json(db);
});

// POST Route for New Note
app.post('/notes', (req, res) => {
    const newNote = req.body;

    // create unique ID for each note
    newNote.id = uuidv4();
    // add newNote to db.json file
    db.push(newNote);
    console.log(newNote);

    
    fs.writeFileSync(path.join(__dirname + '/db/db.json'), JSON.stringify(db,null,4));
    // send file to display Notes HTML page
    res.sendFile(path.join(__dirname + '/public/notes.html'));
});

// BONUS: DELETE Route for Created Notes
//app.delete('/api/notes/:id', (req, res) => {
//});


// HTML Landing Page GET Route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
    
});


app.listen(PORT, () => {
    console.log(`Get ready to take notes on Port ${PORT}`);
});