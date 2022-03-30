// const { DataTypes } = require("sequelize/types");
// const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', { // MySQL에는 posts 테이블 생성
        // id는 기본적으로 들어있다.
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4', //mb4를 추가해야 이모티콘같은것도 사용할 수 있음
        collate: 'utf8mb4_general_ci', // 이모티콘 저장
    });
    Post.associate = (db) => {
        db.Post.belongsTo(db.User); // 어떤 사람에게 속해있는 게시글
        db.Post.belongsToMany(db.Hashtag, { through: 'PostHashTag' });
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Image);
        db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' });
        db.Post.belongsTo(db.Post, { as: 'Retweet' });
    };
    return Post;
};