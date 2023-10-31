const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foriegnKey: 'postId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foriegnKey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = { User, Comment, Post };