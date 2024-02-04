const User = require('../../dataBase/User');

async function getAllUsers() {
  return User.find();
}

function createUser(reqBodyUser) {
  return User.create(reqBodyUser);
}

function getUserByParams(searchObj) {
  return User.findOne(searchObj);
}

// function getFlatById(flatId) {
//   return Flat.findById(flatId);
// }
//
// function updateFullFlat(flatIddd, reqBodyFlat) {
//   return Flat.findByIdAndUpdate(flatIddd, { $set: reqBodyFlat }, { new: true });
// }
//
// function deleteFlat(flatId) {
//   return Flat.findOneAndDelete({ _id: flatId });
// }

module.exports = {
  getAllUsers,
  createUser,
  getUserByParams,
  // getFlatById,
  // updateFullFlat,
  // deleteFlat,
};
