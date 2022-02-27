//to get you set up to use it
// importing express.js module
const express = require('express');
//create an object of the express module
const app = express();
//set the port to 8080
const port = 8080;

const path = require('path');

// //what user can do??? get post put delete
// app.get('/', function(req, res) {
//     res.send('the main index')
// });
// app.get('/about', function(req, res) {
//     res.send('About me')
// });
app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, '/about.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});



//listener to say express works
//making the server listen on port module
app.listen(port, () => {
    console.log(`Listening on post ${port}`);
});