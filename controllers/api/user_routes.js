const router = require('express').Router();

// Import the User model
const User = require('../../models/User.js');

// localhost:3333/auth/signup
// Post request route that retrieves the form data (email, password) and creates a new user in the database, using our User model
// The route will respond with a data object with a property of message that says 'User added successfully!'
router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;
            res.json(userData)
        });

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.body.username
            },
        })
        if (!userData) {
            res.status(400).json({ message: 'No user found!' })
        }
        const validPassword = userData.checkPassword(req.body.password)
        if (!validPassword) {
            res.status(400).json({ message: 'No user found!' })
            return
        }
        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;
            res.json({ message: `You're logged in!` })
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Broken!' })
    }
});

module.exports = router;