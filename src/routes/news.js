const express = require('express');
const router = express.Router();
const newControllers = require('../app/controllers/NewsControllers');

router.use('/:slug', newControllers.show);
router.use('/', newControllers.index);

module.exports = router;