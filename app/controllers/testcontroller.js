module.exports.controller = function(app) {
    app.get('/test', function (req, res) {
        res.testthing = 'model test';
        res.topbarselect = 'test';
        res.render('private/test', { model:res, layout: 'appmain.html'});
    });
};