const Flat = require('../../dataBase/Flat');

async function getAllFlats(findObject) {
  const { page, perPage } = findObject;
  const skip = (page - 1) * perPage;

  const [flats, totalCount] = await Promise.all([
    Flat.find().limit(perPage).skip(skip),
    Flat.countDocuments(),
  ]);
  return {
    data: flats,
    page,
    limit: perPage,
    total: totalCount,
  };
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
