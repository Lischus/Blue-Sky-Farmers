const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
router.get('/', async(req, res) => {
    try {

        const userData = await User.findAll();
        const users = userData.map((project) => project.get({ plain: true }));
        res.render('home', {
            users,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/quiz', withAuth, async(req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id);
        const user = userData.get({ plain: true });
        res.render('match-quiz', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
// Use withAuth middleware to prevent access to route
router.get('/mymatch', withAuth, async(req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id);
        const user = userData.get({ plain: true });
        res.render('mymatch', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Creating New User
router.post('/api/users', async(req, res) => {
    try {
        console.log(req.body)
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});
// Use withAuth middleware to prevent access to route
router.get('/chat', withAuth, async(req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id);
        const user = userData.get({ plain: true });
        res.render('chat', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;