const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 3007;


const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
    
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log(data);
    });

});

app.post('/notes', (req, res) => {
    
});



app.listen(PORT, () => {
    console.log(`Get ready to take notes on Port ${PORT}`);
});