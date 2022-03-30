// const { DataTypes } = require("sequelize/types");
// const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Hashtag = sequelize.define('Hashtag', { // MySQL에는 hashtags 테이블 생성
        // id는 기본적으로 들어있다.
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4', //mb4를 추가해야 이모티콘같은것도 사용할 수 있음
        collate: 'utf8mb4_general_ci', // 이모티콘 저장
    });
    Hashtag.associate = (db) => {
        db.Hashtag.belongsToMany(db.Post, { through: 'PostHashTag' });
    };
    return Hashtag;
};