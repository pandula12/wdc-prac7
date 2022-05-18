var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var blogList = [];
var blogListReverse = [];
var count = 0;

router.post('/addpost', function(req, res) {
  if (req.body.hasOwnProperty("title") && req.body.hasOwnProperty("content")) {
    blogList.push(req.body);
  }
  count++;
  res.send();
}); 


router.get('/getposts', function(req, res) {
  res.send(blogList);
});

module.exports = router;
