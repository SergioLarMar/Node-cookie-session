const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('5bab316ce0a7c75f783cb8a8')
    .then(user => {
      //req se llama al session middleware y se pone el par valor isLoggeIn=true
      req.session.isLoggedIn = true;
      //guardar el usuario la session
      req.session.user = user;
      //salvar la session
      req.session.save(err => {
        console.log(err);
        res.redirect('/');
      });
    })
    .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
  //metodo para destruir la sesion
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};
