// Create an express router instance object
const router = require('express').Router();
const path = require('path');
const { Post, User } = require('../models/');

// Add one test GET route at root - localhost:3333
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({ include: [User] })
        const posts = postData.map((post) => post.get({ plain: true }))
        res.render('landing', { posts })
    } catch (error) {
        console.log(error)
    }
});

// GET route to show the register form
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
        return
    }
    res.render('signup_form')
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
        return
    }
    res.render('login')
})

// Export the router
module.exports = router;