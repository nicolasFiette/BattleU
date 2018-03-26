const express = require('express');
const path = require('path');
const app = express();
const opn = require('opn');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
    res.json({ message: 'BattleU' });
});

app.get('/player/:id', function(req, res) {
    res.json({ message: 'Player information' });
});
app.get('/champion/:id', function(req, res) {
    res.json({ message: 'Player information' });
});

app.listen(8080,function() {
        console.log("Running at Port 8080");
        opn('http://localhost:8080');
    }
);
