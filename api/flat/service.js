const dataBase = require('../../dataBase/flats');

function getAllFlats() {
  return dataBase;
}

function getFlatById(flatId) {
  return dataBase[flatId];
}

function createFlat(reqBodyFlat) {
  dataBase.push(reqBodyFlat);
  return dataBase;
}

function updateFullFlat(flatIndex, reqBodyFlat) {
  if (flatIndex >= 0 && flatIndex < dataBase.length) {
    dataBase[flatIndex] = reqBodyFlat;
    return dataBase;
  } else {
    console.error('Invalid flatIndex');
    return dataBase;
  }
}

function deleteFlat(flatId) {
  if (flatId >= 0 && flatId < dataBase.length) {
    dataBase.splice(flatId, 1);
    return dataBase;
  } else {
    console.error('Invalid flatIndex');
    return dataBase;
  }
}

module.exports = {
  getAllFlats,
  getFlatById,
  createFlat,
  updateFullFlat,
  deleteFlat,
};
