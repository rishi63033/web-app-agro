const express = require('express');
const router = express.Router();
const { createRequest, getRequestsByUser } = require('../controllers/requestController');

router.post('/', createRequest);
router.get('/user/:userId', getRequestsByUser);

module.exports = router;
