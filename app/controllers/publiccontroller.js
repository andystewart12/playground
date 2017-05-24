module.exports.controller = function(app) {
    app.get('/', function (req, res) {
        if (app.user) {
            console.log('user already logged in');
        }
        res.render('public/public', { model: res, layout: 'global.html'});
    });

    app.post('/login', function (req, res) {
        var post = req.body;
        if (post.username === 'ando' && post.password === 'test') {
            app.user = 1;
            res.redirect('/home');
        } else {
            res.redirect('/');
        }
    });

    app.get('/logout', function (req, res) {
        app.user = null;
        res.redirect('/');
    });

};
