const express = require('express');
const { calendarData } = require('../controllers/calendarController');
const router = express.Router();

router.get('/', calendarData);

module.exports = router;
