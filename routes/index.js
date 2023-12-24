const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const user = {
  email: 'admin@gmail.com',
  password: 12345678
}
const options = {
  expiresIn: '1h', // Token expiration time
  issuer: 'your-app-name', // Token issuer
};
const secretKey = 'test-secret';

router.get('/', function (req, res, next) {
  res.status(200).json({ message: 'Hello World!' });
});

router.post('/login', function (req, res, next) {
  const data = req.body;

  if (data.email !== user.email) {
    return res.status(203).json({ message: 'Email does not exist.' });
  }

  if (data.password !== user.password) {
    return res.status(203).json({ message: 'Password is wrong.' });
  }

  const token = jwt.sign(user, secretKey, options);
  res.status(200).json({
    accessToken: token
  })
});

module.exports = router;
