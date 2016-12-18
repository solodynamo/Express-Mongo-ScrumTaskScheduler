var Meeting = require('../models/officemgmt.server.model');


exports.getNote = function(req, res) {
    res.render('newNote', {
        title: 'New Task Log'
    });
};
exports.getIndex = function(req, res) {
    res.render('index', {
        title: 'TaskScheduler',
        message: 'This is a list of the last dozen meeting notes that were entered in.'
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
