module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    res.locals.id = req.session.user.id;
    res.locals.login = req.session.user.login;
    res.locals.isSession = req.session.user.isSession;
  } else {
    res.locals.isSession = false;
  }
  next();
};
