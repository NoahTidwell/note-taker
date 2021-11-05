const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();



// HTML Notes Page GET Route
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));

});

// HTML Landing Page GET Route
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
    
});

module.exports = router;