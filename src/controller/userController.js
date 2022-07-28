module.exports = class UserController {

    constructor(userService) {
        this.userService = userService;
    }

    /**
     * Create new User.
     * @param req
     * @returns {Promise<Error|{message: string}>} Return message which tells if successful or not.
     */
    async createNewUser(req) {
        return await this.userService.createUser(req.body.username, req.body.password);
    }

    /**
     * Send input login info for credential check.
     * @param req
     * @returns {Promise<{message: string}>} Return message which tells if successful or not.
     */
    async userLogin(req) {
        return await this.userService.checkUserCredentials(req.body.username, req.body.password);
    }
};
