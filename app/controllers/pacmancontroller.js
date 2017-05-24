module.exports.controller = function (app) {
    app.get('/pacman', function (req, res) {
        res.topbarselect = 'pacman';
        res.render('private/pacman', { model: res, layout: 'appmain.html'});
    });
}