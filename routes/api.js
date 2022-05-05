var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET acronym list. */
router.get('/acronym?page=:page&limit=10&search=:search', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST add acronym. */
router.post('/acronym', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* PATCH update acronym. */
router.patch('/acronym/:acronymID', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* DELETE delete acronym. */
router.delete('/acronym/:acronymID', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
