const Course = require('../model/Course');


class SiteControllers {
    //[GET] /
    index(req, res) {
        Course.find({}, (err, course) => {
            if (!err) {
                res.json(course);
                return;
            };
            res.status(400).json({ error: 'ERROR' });
        })
        // res.render('home');
    }
    //[GET] /search 
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteControllers();