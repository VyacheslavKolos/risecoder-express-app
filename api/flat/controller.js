const service = require('./service');

async function getAllFlats(req, res) {
  const allUsers = await service.getAllFlats();

  res.json(allUsers);
}

async function getFlatById(req, res) {
  const singleFlat = await service.getFlatById(req.params.flatId);

  res.json(singleFlat);
}
async function createFlat(req, res) {
  const reqBodyFlat = req.body;
  const createdFlats = await service.createFlat(reqBodyFlat);

  res.json(createdFlats);
}

async function updateFullFlat(req, res) {
  const reqBodyFlat = req.body;
  const updatedFlats = await service.updateFullFlat(req.params.flatId, reqBodyFlat);

  res.json(updatedFlats);
}
async function deleteFlat(req, res) {
  const flatsAfterDelete = await service.deleteFlat(req.params.flatId);

  res.json(flatsAfterDelete);
}

module.exports = {
  getAllFlats,
  getFlatById,
  createFlat,
  updateFullFlat,
  deleteFlat,
};
