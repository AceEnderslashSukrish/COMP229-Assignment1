/*Sukrish Gokulakrishnan
  Student ID: 301226286*/

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', pageContent: 'Mission Statement'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', pageContent: 'Mission Statement'});
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About', pageContent: 'About Me'});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', pageContent: 'My Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services', pageContent: 'I Offer'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact', pageContent: 'Contact Me @'});
});

module.exports = router;
