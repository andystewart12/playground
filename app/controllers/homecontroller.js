module.exports.controller = function(app) {


    app.get('/home', function (req, res) {
        res.topbarselect = "home";
        res.render('private/home', { model: res, layout: 'appmain.html'})
    });
};