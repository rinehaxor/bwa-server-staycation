const isLogin = (req, res, next) => {
  if (req.session == null || req.session.user == undefined) {
    req.flash('alertMassage', 'session telah habis silakan signin');
    req.flash('alertStatus', 'success');
    res.redirect('/admin/signin');
  } else {
    next();
  }
};

module.exports = isLogin;
