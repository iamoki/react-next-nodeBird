const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { User, Post } = require('../models');

const router = express.Router();

// 미들웨어 확장
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if(err) {
            console.error(err);
            next(error)
        }
        if(info) {
            return res.status(401).send(info.reason);
        }
        return req.login(user, async(loginErr) => {
            if(loginErr) {
                console.error(loginErr);
                return next(loginErr);
            }
            const fullUserWithoutPassword = await User.findOne({
                where: { id: user.id },
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: Post,
                }, {
                    model: User,
                    as: 'Followings',
                }, {
                    model: User,
                    as: 'Followers',
                }]
            })
            console.log(JSON.stringify(fullUserWithoutPassword));
            return res.status(200).json(user);
        });
    })(req, res, next);
});

router.post('/', async (req, res, next) => { // POST /user
    try {
        // 중복되는 이메일이 있는지 검증해서
        const exUser = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
        // 만약에 중복되면 함수종료시키기 return 필수
        if (exUser) {
            return res.status(403).send('이미 사용중인 아이디입니다.');
        }
        // 중복이 아니라면 req.body에 담고 성공시키기
        const hashedPassword = await bcrypt.hash(req.body.password, 12); // 1 - 13까지의 숫자가 들어가는데 높을수록 암호화가 강력해짐
        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
        });
        res.status(201).send('ok');
        // 에러가 발생하면 띄운다
    } catch (error) {
        console.error(error);
        next(error); // status 500
    }
});

router.post('/user/logout', (req, res) => {
    req.logout();
    req.session.destroy(); // 세션에 저장된 쿠키 삭제
    req.send('ok'); // 로그아웃 성공
});

module.exports = router;