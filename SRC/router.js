const express = require('express');
const userControllers = require('./controllers/userControllers'); 

const router = express.Router();

router.post('/user/save', userControllers.saveUser);

router.get('/user/list', userControllers.listUser);

router.get('/user/list/:id', userControllers.editUser);



module.exports = router;
