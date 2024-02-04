const userRouter = require('express').Router();
const controller = require('./user.controller');

userRouter.get('/', controller.getAllUsers);

userRouter.post('/', controller.createUser);

// userRouter.get('/:flatId', controller.getFlatById);
//
// userRouter.put('/:flatId', controller.updateFullFlat);
//
// userRouter.delete('/:flatId', controller.deleteFlat);

module.exports = userRouter;
