const { response } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/brew', function (req, res) {
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
router.post('/pass-it-on', function (req, res) {
  var q = req.body.message;
  if (q) {
    if (count == 0) {
      res.send("first")
    }
    else {
      res.send(messageArray[count - 1]);
    }
    messageArray[count] = q;
    count++;
  }
  else {
    res.sendStatus(400);
  }
});

router.post('/combine', function (req, res) {
  var linesArray = req.body.lines;
  var string = ""
  var suf = req.body.suffix;
  linesArray.forEach(function (el, index) {
    string = string + el + suf + "\n";
  });

  res.send(string);
});

router.get('/cookie', function (req, res) {
  if ('task3_1' in req.cookies) {
    let temp = Number(req.cookies.task3_1) + Number('1');
    let cookieCounter = temp.toString();
    res.cookie('task3_1', cookieCounter);
  } 
  else {
    res.cookie('task3_1', "1");
  }
  res.send();
})

module.exports = router;
