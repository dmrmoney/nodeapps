var express = require('express');
var router = express.Router();

const notes = require('../models/notes-memory');  // Herron

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
router.get('/', async (req, res, next) => {
  let keylist = await notes.keylist();
  let keyPromises = keylist.map(key => {
    return notes.read(key)
  });
  let notelist = await Promise.all(keyPromises);
  res.render('index', {title: 'Notes', notelist: notelist});
});

module.exports = router;
