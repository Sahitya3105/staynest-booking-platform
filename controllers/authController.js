exports.getLogin = (req, res, next) => {
  res.render("auth/auth", {
    pageTitle: "Login",
    currentPage: "login",
    isLoggedIn: false,
  });
};

exports.postLogin = (req, res, next) => {
  res.cookie("isLoggedIn", true);
  res.redirect("/");
};

exports.postLogout = (req, res, next) => {
  res.cookie("isLoggedIn", false);
  res.redirect("/login");
};
