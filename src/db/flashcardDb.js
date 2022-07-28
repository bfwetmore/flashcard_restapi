const db = require('./connection');
const {Flashcard} = db.models;

module.exports = class FlashcardDB {

    /**
     * Make a call to the Database to SELECT a Row by based on query options.
     * @param options Sequelize query options.
     * @returns {Promise<Array[Object]>}
     */
    async getFlashcardRow(options) {
        return await Flashcard.findAll(options);
    }

    /**
     * SELECT entire Flashcard table.
     * @returns {Promise<Array[Object]>}
     */
    async getFlashcardTable() {
        return await Flashcard.findAll();
    }
};
