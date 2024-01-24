const service = require('./service');

function getAllUsers(req, res) {
  const allUsers = service.getAllUsers();

  res.json(allUsers);
}

function getUserById(req, res) {
  const singleUser = service.getUserById(req.params.userId);

  if (!singleUser) {
    return res.status(404).json('User not found');
  }

  res.json(singleUser);
}

module.exports = {
  getAllUsers,
  getUserById,
};
