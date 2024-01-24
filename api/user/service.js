const dataBase = require('../../dataBase/users');

function getAllUsers() {
    return dataBase;
}

function getUserById(userId) {
    return dataBase[userId];
}

module.exports = {
    getAllUsers,
    getUserById
}
