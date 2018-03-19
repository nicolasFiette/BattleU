var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, database) {
    if (err) throw err;
    db=database;
    console.log("Database created");
    app.listen(port);
    console.log('Port number: ' + port);
});

router.get('/', function(req, res) {
    res.json({ message: 'BattleU' });
});

router.get('/player/:id', function(req, res) {
    res.json({ message: 'BattleU' });
});
router.get('/champion/:id', function(req, res) {
    res.json({ message: 'BattleU' });
});

app.use('./', router);

