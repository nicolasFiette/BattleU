const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();
const opn = require('opn');
const steam = require('steam');
const bodyparser = require('body-parser');


app.get('/', function(req, res) {
    res.json({ message: 'BattleU' });
});

app.get('/authenticate', steam.authenticate(), function(req, res) {
    res.redirect('/');
});

app.get('/verify', steam.verify(), function(req, res) {
    res.send(req.user).end();
});

app.get('/logout', steam.enforceLogin('/'), function(req, res) {
    req.logout();
    res.redirect('/');
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
