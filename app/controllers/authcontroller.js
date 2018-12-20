var exports = module.exports = {}


exports.signup = function (req, res) {
    res.render('signup');
}

exports.signin = function (req, res) {
    res.render('signin');
}

exports.dashboard = function (req, res) {
    var currentUser = JSON.stringify(req.user)
    console.log("USER: "+currentUser);
    res.render('dashboard', {curUser: currentUser.id});
}

exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');
    });
}