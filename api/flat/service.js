const Flat = require('../../dataBase/Flat');

function getAllFlats() {
  return Flat.find();
}

function getFlatById(flatId) {
  return Flat.findById(flatId);
}

function createFlat(reqBodyFlat) {
  return Flat.create(reqBodyFlat);
}

function updateFullFlat(flatId, reqBodyFlat) {
  return Flat.findByIdAndUpdate(flatId, { $set: reqBodyFlat }, { new: true });
}

function deleteFlat(flatId) {
  return Flat.findOneAndDelete({ _id: flatId });
}

module.exports = {
  getAllFlats,
  getFlatById,
  createFlat,
  updateFullFlat,
  deleteFlat,
};
