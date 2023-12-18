var express = require('express');
var path = require('path');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'McRedeem', name:null });
});

router.post('/', function(req, res, next) {

  res.render('index', { title: 'McRedeem', name:req.body.name });
});

router.get('/page1', function(req, res, next) {
  res.render('page1', { title: '', name:null });
});

router.get('/page2', function(req, res, next) {
  res.render('page2', { title: 'McRedeem', name:null });
});

router.get('/page3', function(req, res, next) {
  res.render('page3', { title: 'McRedeem', name:null });
});

router.get('/page4', function(req, res, next) {
  res.render('page4', { title: 'McRedeem', name:null });
});


router.get('/page5', function(req, res, next) {
  res.render('page5', { title: 'What you can get', name:null });
});

router.get('/page6', function(req, res, next) {
  res.render('page6', { title: 'Verifying', name:null });
});

router.get('/page7', function(req, res, next) {
  res.render('page7', { title: 'Thank you!', name:null });
});

router.get('/voting', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/voting.html'),{ contentType: 'text/html' });
});

module.exports = router;
