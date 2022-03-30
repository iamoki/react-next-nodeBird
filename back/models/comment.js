// const { DataTypes } = require("sequelize/types");
// const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', { // MySQL에는 comments 테이블 생성
        // id는 기본적으로 들어있다.
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4', //mb4를 추가해야 이모티콘같은것도 사용할 수 있음
        collate: 'utf8mb4_general_ci', // 이모티콘 저장
    });
    Comment.associate = (db) => {
        db.Comment.belongsTo(db.User);
        db.Comment.belongsTo(db.Post);
    };
    return Comment;
};