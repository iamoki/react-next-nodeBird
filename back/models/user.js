// const { DataTypes } = require("sequelize/types");
// const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', { // MySQL에는 users 테이블 생성
        // id는 기본적으로 들어있다.
        email: {
            type: DataTypes.STRING(30), // 문자열인지, 30자 미만인지 체크
            allowNull: false, // 키에 해당하는 값이 필수인지 아닌지 false면 필수값
            unique: true, // 고유한 값인지
        },
        nickname: {
            type: DataTypes.STRING(30),
            allowNull: false, // 필수
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false, // 필수
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글 저장
    });
    User.associate = (db) => {
        db.User.hasMany(db.Post); // 1 : 다수관계
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.Post, { through: 'Like', ad: 'Liked' });
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'FollowingId' });
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'FollowerId' });
    };
    return User;
};