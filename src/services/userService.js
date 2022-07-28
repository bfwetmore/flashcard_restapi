module.exports = class FlashcardService {

    constructor(userDB, userActions) {
        this.userDB = userDB;
        this.userActions = userActions;
    }

    /**
     * Preps user info to securely store credentials to database.
     * @param username
     * @param password
     * @returns {Promise<Error|{message: string}>}
     */
    async createUser(username, password) {
        try {
            await this.userActions.passwordFormatCheck(password);
            const hashedPass = await this.userActions.hashText(password);
            return await this.userDB.insertUser(username, hashedPass);
        } catch (err) {
            return err.message;
        }
    }

    /**
     * SELECT user credentials and compare stored password.
     * @param username
     * @param password
     * @returns {Promise<{message: string}>} If successful or not.
     */
    async checkUserCredentials(username, password) {
        try {
            const userCredentials = await this.userDB.selectUser(username);
            const user = await this.userActions.authenticatePassword(password, userCredentials[0].password);
            if (user !== true) {
                return {
                    "message": "Incorrect Username or Password"
                };
            }
            return {
                "message": "Login Successful!"
            };

        } catch (err) {
            return err.message;
        }
    }
};
