const express = require('express');
const router = express.Router();

const {getMeetups, getMeetupById} = require('../controllers/meetups');

router.get('', getMeetups);
router.get('/:id', getMeetupById);

module.exports = router;
