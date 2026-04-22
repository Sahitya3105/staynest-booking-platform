exports.getLogin=(req,res,next) => {
    res.render('auth/auth',{ pageTitle: "Login", currentPage: "login" });
};