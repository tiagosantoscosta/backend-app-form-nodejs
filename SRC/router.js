const express = require('express');
const userControllers = require('./controllers/userControllers'); 

const router = express.Router();

router.post('/user/save', userControllers.saveUser);

module.exports = router;
