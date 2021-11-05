const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes/index');
const pageRoutes = require('./routes/pageRoutes/index');

const PORT = process.env.PORT || 3007;

// Create Server
const app = express();

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));

app.use('/api', apiRoutes);
app.use('/', pageRoutes);



app.listen(PORT, () => {
    console.log(`Get ready to take notes on Port ${PORT}`);
});