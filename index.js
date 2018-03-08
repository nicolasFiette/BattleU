var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

// Get data from a POST
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTER
var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'BattleU API' });
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('port n° ' + port);
