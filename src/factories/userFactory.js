const UserService = require('../services/userService');
const UserActions = require('../actions/userActions');
const UserController = require('../controller/userController');
const UserDB = require('../db/userDb');

module.exports = class UserFactory {
    async createNewUser(req) {
        return await new UserController(new UserService(new UserDB(), new UserActions())).createNewUser(req);
    }

    async userLogin(req) {
        return await new UserController(new UserService(new UserDB(), new UserActions())).userLogin(req);
    }
};
