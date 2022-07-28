import UserService from '../services/userService.js';
import UserActions from '../actions/userActions.js';
import UserController from '../controller/userController.js';
import UserDB from '../db/userDb.js';

export default class UserFactory {
    async createNewUser(req) {
        return await new UserController(new UserService(new UserDB(), new UserActions())).createNewUser(req);
    }

    async userLogin(req) {
        return await new UserController(new UserService(new UserDB(), new UserActions())).userLogin(req);
    }
}
