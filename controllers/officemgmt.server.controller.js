var Meeting = require('../models/officemgmt.server.model');


exports.getNote = function(req, res) {
    console.log("sklfjklsf");
    res.render('newNote', {
        title: 'Standup - New Note'
    });
};
exports.getIndex = function(req, res) {
    console.log("sklfjklsf");
    res.render('index', {
        title: 'Express',
        name: 'ankit'
    });
}

exports.create = function(req, res) {
    var entry = new Meeting({
        memberName: req.body.memberName,
        project: req.body.project,
        workYesterday: req.body.workYesterday,
        workToday: req.body.workToday,
        impediment: req.body.impediment
    });

    entry.save();

    res.redirect(301, '/');
};
