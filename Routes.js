const express = require('express');
const router = express.Router();
const user = require('./Users/User_Route');

router.use('/user', user);

module.exports = router;
