const router = require('express').Router();

// Import the User model
const User = require('../models/User.js');

// localhost:3333/auth/signup
// Post request route that retrieves the form data (email, password) and creates a new user in the database, using our User model
// The route will respond with a data object with a property of message that says 'User added successfully!'
router.post('/signup', async (req, res) => {
    // const data = req.body;
    // User.create(data)
    //     .then(newUser => {
    //         res.json({
    //             message: 'User added successfully!',
    //             user: newUser
    //         });
    //     });
    try {
        await User.create(req.body);

        res.redirect('/');
    } catch (error) {
        res.redirect('/register');
    }
});

module.exports = router;