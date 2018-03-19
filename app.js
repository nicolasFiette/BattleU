var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

// Get data from a POST
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017";
var router = express.Router();

MongoClient.connect(url, function(err, database) {
    if (err) throw err;
    db = database;

    app.listen(port);
    console.log('port n° ' + port);
});

router.get('/', function(req, res) {
    res.json({ message: 'BattleU API' });
});

router.get('/player/:id', function(req, res) {
    res.json( { message: 'player information' } );
});

router.get('/champions/:id', function(req, res) {
    res.json({ message: 'champions information' });
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);

// START THE SERVER
// =============================================================================
