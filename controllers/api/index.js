const router = require('express').Router();
const userRoutes = require('./user_routes.js');
router.use('/user', userRoutes);
module.exports = router