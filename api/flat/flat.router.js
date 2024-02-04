const flatRouter = require('express').Router();
const controller = require('./flat.controller');
const mdlwr = require('./flat.middlwares');

flatRouter.get('/', mdlwr.getUserPaginationValidator, controller.getAllFlats);

flatRouter.get('/:flatId', controller.getFlatById);

flatRouter.post('/', controller.createFlat);

flatRouter.put('/:flatId', controller.updateFullFlat);

flatRouter.delete('/:flatId', controller.deleteFlat);

module.exports = flatRouter;
