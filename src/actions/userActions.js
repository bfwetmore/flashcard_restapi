import bcrypt from 'bcrypt';

export default class UserActions {

    /**
     * Hash submitted text.
     * @param textToBeHashed
     * @returns {Promise<string>} Hashed text.
     */
    async hashText(textToBeHashed) {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(textToBeHashed, salt);
    }

    /**
     * Authenticate user submitted password.
     * @param passwordInput Password to check.
     * @param dbPasswordDigest Stored password.
     * @returns {Promise<boolean>}
     */
    async authenticatePassword(passwordInput, dbPasswordDigest) {
        return await bcrypt.compare(passwordInput, dbPasswordDigest);
    }

    /**
     * Checks for correct password format.
     * @param password
     * @returns {Promise<Error|Void>}
     */
    async passwordFormatCheck(password) {
        if (password.length < 8) {
            throw new Error("Use 8 characters or more for your password");
        }
    }
}
