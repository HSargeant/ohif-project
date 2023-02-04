module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      console.log("no user")
      res.redirect("/");
    }
  },
  ensureGuest: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/");
    }
  },
};
