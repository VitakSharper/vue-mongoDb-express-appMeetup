const express = require('express');
const router = express.Router();

const {getThreads} = require('../controllers/threads');

router.get('', getThreads);

module.exports = router;
