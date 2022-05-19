var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var blogList = [];

router.post('/addpost', function(req, res) {
  if (req.body.hasOwnProperty("title") && req.body.hasOwnProperty("content")) {
    blogList.push(req.body);
  }
  res.send();
}); 


router.get('/getposts', function(req, res) {
  blogList.reverse();
  res.send(blogList);
  blogList.reverse();
});

module.exports = router;
