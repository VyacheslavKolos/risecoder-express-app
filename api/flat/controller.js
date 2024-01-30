const service = require('./service');
const httpStatuses = require('../../configs/responseStatuses');
async function getAllFlats(req, res) {
  try {
    const allUsers = await service.getAllFlats();

    if (!allUsers) {
      return res
        .status(httpStatuses.NOT_FOUND)
        .json({ error: 'Flats not found or an error occurred during getAll.' });
    }
    res.status(httpStatuses.OK).json(allUsers);
  } catch (error) {
    return res.json({ error: `Error getting flat: ${error.message}` });
  }
}

async function getFlatById(req, res) {
  try {
    const singleFlat = await service.getFlatById(req.params.flatId);
    if (!singleFlat) {
      return res
        .status(httpStatuses.NOT_FOUND)
        .json({ error: 'Flat not found or an error occurred during getById.' });
    }
    res.status(httpStatuses.OK).json(singleFlat);
  } catch (error) {
    return res.json({ error: `Error getting flat: ${error.message}` });
  }
}
async function createFlat(req, res) {
  const reqBodyFlat = req.body;
  try {
    const createdFlat = await service.createFlat(reqBodyFlat);
    if (!createdFlat) {
      return res
        .status(httpStatuses.NOT_FOUND)
        .json({ error: 'Flats not found or an error occurred during create.' });
    }
    res.status(httpStatuses.CREATED).json(createdFlat);
  } catch (error) {
    return res.json({ error: `Error creating flat: ${error.message}` });
  }
}
async function updateFullFlat(req, res) {
  const reqBodyFlat = req.body;
  try {
    const updatedFlat = await service.updateFullFlat(req.params.flatId, reqBodyFlat);
    if (updatedFlat === null) {
      return res
        .status(httpStatuses.NOT_FOUND)
        .json({ error: 'Flat not found or an error occurred during update.' });
    }
    res.json(updatedFlat);
  } catch (error) {
    return res.json({ error: `Error updating flat: ${error.message}` });
  }
}
async function deleteFlat(req, res) {
  try {
    const flatsAfterDelete = await service.deleteFlat(req.params.flatId);
    if (!flatsAfterDelete) {
      return res
        .status(httpStatuses.NOT_FOUND)
        .json({ error: 'Flat not found or an error occurred during delete.' });
    }
    res.json(flatsAfterDelete);
  } catch (error) {
    return res.json({ error: `Error deleting flat: ${error.message}` });
  }
}

module.exports = {
  getAllFlats,
  getFlatById,
  createFlat,
  updateFullFlat,
  deleteFlat,
};
