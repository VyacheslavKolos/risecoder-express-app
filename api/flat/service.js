const Flat = require('../../dataBase/Flat');

function getAllFlats() {
  const foundedFlats = Flat.find();

  if (!foundedFlats) {
    console.log('Flats not found');
    return null;
  }

  return foundedFlats;
}

function getFlatById(flatId) {
  const flatById = Flat.findById(flatId);

  if (!flatById) {
    console.log('Flat not found');
    return null;
  }

  return flatById;
}

function createFlat(reqBodyFlat) {
  const createdFlat = Flat.create(reqBodyFlat);

  if (!createdFlat) {
    console.log('Someething went wrong...');
  }

  return Flat.find();
}

function updateFullFlat(flatId, reqBodyFlat) {
  const updatedFlat = Flat.findByIdAndUpdate(flatId, { $set: reqBodyFlat }, { new: true });

  if (!updatedFlat) {
    console.log('Flat not found');
    return null;
  }

  return updatedFlat;
}

function deleteFlat(flatId) {
  const deletedFlat = Flat.findOneAndDelete({ _id: flatId });

  if (!deletedFlat) {
    console.log('Flat not found');
    return null;
  }

  return deletedFlat;
}

module.exports = {
  getAllFlats,
  getFlatById,
  createFlat,
  updateFullFlat,
  deleteFlat,
};
