const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

//static files
app.use('/src', express.static(path.join(__dirname, "/src")));

//index
app.get('/', (req, res) => {res.sendFile(path.join(__dirname, "index.html"));});
app.get('/index.html', (req, res) => {res.sendFile(path.join(__dirname, "index.html"));});

//run the server
app.listen(port, () => console.log(`DontCodeThis.com listening on port ${port}!`));

