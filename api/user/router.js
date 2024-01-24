const router = require('express').Router();

const controller = require('./controller');

router.get('/', controller.getAllUsers);

router.get('/:userId', controller.getUserById);

module.exports = router;
