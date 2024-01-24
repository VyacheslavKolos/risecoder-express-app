const service = require('./service');

function getAllFlats(req, res) {
  const allUsers = service.getAllFlats();

  res.json(allUsers);
}

function getFlatById(req, res) {
  const singleFlat = service.getFlatById(req.params.flatId);

  if (!singleFlat) {
    return res.status(404).json('flat not found');
  }

  res.json(singleFlat);
}

function createFlat(req, res) {
  const reqBodyFlat = req.body;
  const createdFlats = service.createFlat(reqBodyFlat);

  if (!createdFlats) {
    return res.status(404).json('flat not found');
  }

  res.json(createdFlats);
}

function updateFullFlat(req, res) {
  const reqBodyFlat = req.body;
  const updatedFlats = service.updateFullFlat(req.params.flatId, reqBodyFlat);

  if (!updatedFlats) {
    return res.status(404).json('flats not found');
  }

  res.json(updatedFlats);
}
function deleteFlat(req, res) {
  const flatsAfterDelete = service.deleteFlat(req.params.flatId);

  if (!flatsAfterDelete) {
    return res.status(404).json('flat not found');
  }

  res.json(flatsAfterDelete);
}

module.exports = {
  getAllFlats,
  getFlatById,
  createFlat,
  updateFullFlat,
  deleteFlat,
};
