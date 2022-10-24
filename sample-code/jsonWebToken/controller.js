const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'SECRET_KEY';

router.post('/login', (req, res, next) => {
  const email = 'test@naver.com';
  const name = 'test';

  //header 의 기본값은  alg: 'HS256', typ: 'JWT', 이다.

  //jwt.sign(payload, secretOrPrivateKey, [options, callback])
  // encoding 기본 값 -> base64url
  token = jwt.sign(
    {
      email: email,
      name: name,
    },
    SECRET_KEY,
    // {
    // encoding: 'base64-url',
    // },
    // {
    //   expiresIn: '15m', // 만료시간 15분
    //   issuer: '토큰발급자',
    // },
  );

  //response
  return res.status(200).json({
    code: 200,
    message: '토큰이 발급되었습니다.',
    token,
  });
});

module.exports = router;
