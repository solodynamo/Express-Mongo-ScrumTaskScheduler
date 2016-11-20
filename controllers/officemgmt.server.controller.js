// var Meeting = require('../models/officemgmt.server.model');


exports.getNote = function(req, res) {
    res.render('newNote', { title: 'Standup - New Note' });
};
exports.getIndex = function(req ,res) {
     res.render('index', { title: 'Express' , name: 'ankit'});
}
