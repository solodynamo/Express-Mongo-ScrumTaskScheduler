var express = require('express');
var router = express.Router();

var meetingCtrl = require('../controllers/officemgmt.server.controller');


router.get('/', function(req, res, next) {
 return meetingCtrl.getIndex(req, res);
});
router.get('/newNote', function(req, res, next) {
  return meetingCtrl.getNote(req,res);
  });

module.exports = router;
