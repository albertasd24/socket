export const logged = (req, res, next) => {
    if (req.cookies.username) {
        next();
    } else {
        res.redirect("/register")
    }
}