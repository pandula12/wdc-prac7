var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/brew', function(req, res) {
  var q = req.query.drink;
  if (q === "tea") {
    res.send("A delicious cup of tea!");
  }
  else if (q === "coffee") {
    res.sendStatus(418);
  }
  else {
    res.sendStatus(400);
  }
});

var count = 0;
var messageArray = [];
router.get('/pass-it-on', function(req, res) {
  var q = req.query.message;
  if (q) {
    if (count == 0) {
      res.send("first")
    }
    else {
      res.send(messageArray[count-1]);
    }
    messageArray[count] = q;
    count++;
  }
  else {
    res.sendStatus(400);
  }
});

module.exports = router;
