var Meeting = require('../models/officemgmt.server.model');


exports.list = function(req, res) {
    var query = Meeting.find();

    query.sort({
            createdOn: 'desc'
        })
        .limit(12)
        .exec(function(err, results) {
            res.render('index', {
                title: 'NoTes',
                notes: results
            });
        })
}

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

exports.filterByMember = function(req, res) {
    var query = Meeting.find();
    var filter = req.body.memberName;

    query.sort({
        createdOn: 'desc'
    });

    if (filter.length > 0 && filter != 'All') {
        query.where({
            memberName: filter
        });
    }

    query.exec(function(err, results) {
        res.render('index', {
            title: 'NoTTEs',
            notes: results
        });
    })

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