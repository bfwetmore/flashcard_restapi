const db = require('./connection');
const {Users} = db.models;

module.exports = class UserDB {
    /**
     * INSERTS a new user to the database.
     * @param username
     * @param password Should be Hashed
     * @returns {Promise}
     */
    async insertUser(username, password) {
        try {
            await db.sequelize.sync({force: false});
            await Users.create({username, password, role: "member"});

            return {message: "User successfully created"};
        } catch (err) {
            if (err.errors[0].message === "username must be unique") {
                throw new Error("Username already taken, please select another.");
            }
            return err.message;
        }
    }

    /**
     * Select username from database. Usernames on database are unique.
     * @param username
     * @returns {Promise<Array[Object]>} Full database of selected user row.
     */
    async selectUser(username) {
        return await Users.findAll({
            where: {
                username: username
            }
        });
    }
};
