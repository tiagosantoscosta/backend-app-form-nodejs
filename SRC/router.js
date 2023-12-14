const express = require('express');
const userControllers = require('./controllers/userControllers'); 

const router = express.Router();

router.post('/user/save', userControllers.saveUser);

router.get('/user/list', userControllers.listUser);



module.exports = router;
