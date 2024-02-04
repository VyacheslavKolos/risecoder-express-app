const service = require('./user.service');
const httpStatuses = require('../../configs/responseStatuses');
const passwordService = require('../../services/password.service');
async function getAllUsers(req, res, next) {
  try {
    const allUsers = await service.getAllUsers(req.query);

    if (!allUsers) {
      throw new Error('Users not found');
    }
    res.status(httpStatuses.OK).json(allUsers);
  } catch (e) {
    next(e);
  }
}

async function createUser(req, res, next) {
  const reqBodyUser = req.body;
  try {
    const hashedPassword = await passwordService.hashPassword(req.body.password);
    const createdUser = await service.createUser({ ...reqBodyUser, password: hashedPassword });
    if (!createdUser) {
      throw new Error('User not found');
    }
    res.status(httpStatuses.CREATED).json(createdUser);
  } catch (e) {
    next(e);
  }
}

// async function getFlatById(req, res) {
//   try {
//     const singleFlat = await service.getFlatById(req.params.flatId);
//     if (!singleFlat) {
//       return res
//         .status(httpStatuses.NOT_FOUND)
//         .json({ error: 'Flat not found or an error occurred during getById.' });
//     }
//     res.status(httpStatuses.OK).json(singleFlat);
//   } catch (error) {
//     return res.json({ error: `Error getting flat: ${error.message}` });
//   }
// }

// async function updateFullFlat(req, res) {
//   const reqBodyFlat = req.body;
//   try {
//     const updatedFlat = await service.updateFullFlat(req.params.flatId, reqBodyFlat);
//     if (updatedFlat === null) {
//       return res
//         .status(httpStatuses.NOT_FOUND)
//         .json({ error: 'Flat not found or an error occurred during update.' });
//     }
//     res.json(updatedFlat);
//   } catch (error) {
//     return res.json({ error: `Error updating flat: ${error.message}` });
//   }
// }
// async function deleteFlat(req, res) {
//   try {
//     const flatsAfterDelete = await service.deleteFlat(req.params.flatId);
//     if (!flatsAfterDelete) {
//       return res
//         .status(httpStatuses.NOT_FOUND)
//         .json({ error: 'Flat not found or an error occurred during delete.' });
//     }
//     res.json(flatsAfterDelete);
//   } catch (error) {
//     return res.json({ error: `Error deleting flat: ${error.message}` });
//   }
// }

module.exports = {
  getAllUsers,
  createUser,
  // getFlatById,
  // updateFullFlat,
  // deleteFlat,
};
