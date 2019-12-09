const express = require('express');
const router = express.Router();

const {getUsers, login, register} = require('../controllers/users');

router.get('', getUsers);
router.post('/register', register);
router.post('/login', login);


module.exports = router;
