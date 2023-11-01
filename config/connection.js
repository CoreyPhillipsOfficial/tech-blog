// Import the Sequelize constructor from sequelize
const Sequelize = require('sequelize');

require('dotenv').config();

// Create a new connection instance, using option 3 from the docs
const sequelize = new Sequelize('tech_blog_db', 'root', 'password', {
    hots: '127.0.0.1',
    dialect: 'mysql',
    port: 3001
})

// Export the connection object
module.exports = sequelize;