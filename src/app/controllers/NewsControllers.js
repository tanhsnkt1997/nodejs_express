class NewControllers {
    //[GET] /news
    index(req, res) {
        res.render('news');
    }
    //[GET] /news/:slug
    show(req, res) {
        res.send('news detailllllllllllls');
    }
}

module.exports = new NewControllers();