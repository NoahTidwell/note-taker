const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3007;


const app = express();


app.listen(PORT, () => {
    console.log(`Get ready to take notes on ${PORT}`);
});