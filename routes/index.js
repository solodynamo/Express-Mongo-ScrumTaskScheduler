var express = require('express');
var router = express.Router();

var meetingCtrl = require('../controllers/officemgmt.server.controller');


router.get('/', function(req, res, next) {
    return meetingCtrl.list(req, res);
});


router.post('/', function(req, res, next) {
    return meetingCtrl.filterByMember(req, res);
})
router.get('/newNote', function(req, res, next) {
    return meetingCtrl.getNote(req, res);

});

router.post('/newNote', function(req, res) {
    return meetingCtrl.create(req, res);
})

module.exports = router;