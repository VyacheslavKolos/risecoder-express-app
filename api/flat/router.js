const router = require('express').Router();

const controller = require('./controller');

router.get('/', controller.getAllFlats);

router.get('/:flatId', controller.getFlatById);

router.post('/', controller.createFlat);

router.put('/:flatId', controller.updateFullFlat);

router.delete('/:flatId', controller.deleteFlat);

module.exports = router;
