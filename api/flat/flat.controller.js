const service = require('./flat.service');
const httpStatuses = require('../../configs/responseStatuses');
async function getAllFlats(req, res, next) {
  try {
    const allFlats = await service.getAllFlats(req.query);

    if (!allFlats) {
      throw new Error('Flats not found or an error occurred during getAll.');
    }
    res.status(httpStatuses.OK).json(allFlats);
  } catch (error) {
    next(error);
  }
}

async function getFlatById(req, res, next) {
  try {
    const singleFlat = await service.getFlatById(req.params.flatId);
    if (!singleFlat) {
      throw new Error('Flat not found or an error occurred during getById.');
    }
    res.status(httpStatuses.OK).json(singleFlat);
  } catch (error) {
    next(error);
  }
}
async function createFlat(req, res, next) {
  const reqBodyFlat = req.body;
  try {
    const createdFlat = await service.createFlat(reqBodyFlat);
    if (!createdFlat) {
      throw new Error('An error occurred during create.');
    }
    res.status(httpStatuses.CREATED).json(createdFlat);
  } catch (error) {
    next(error);
  }
}
async function updateFullFlat(req, res, next) {
  const reqBodyFlat = req.body;
  try {
    const updatedFlat = await service.updateFullFlat(req.params.flatId, reqBodyFlat);
    if (updatedFlat === null) {
      throw new Error('Flat not found or an error occurred during update.');
    }
    res.json(updatedFlat);
  } catch (error) {
    next(error);
  }
}
async function deleteFlat(req, res, next) {
  try {
    const flatsAfterDelete = await service.deleteFlat(req.params.flatId);
    if (!flatsAfterDelete) {
      throw new Error('Flat not found or an error occurred during delete.');
    }
    res.json(flatsAfterDelete);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllFlats,
  getFlatById,
  createFlat,
  updateFullFlat,
  deleteFlat,
};
