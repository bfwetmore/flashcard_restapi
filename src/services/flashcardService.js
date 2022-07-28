export default class FlashcardService {

    constructor(flashcardDB, flashcardActions) {
        this.flashcardDB = flashcardDB;
        this.flashcardActions = flashcardActions;
    }

    /**
     * Generates a random question based on the total number of flashcards.
     * @returns {Promise<array[object]>}
     */
    async generateRandomQuestion() {
        const allFlashcards = await this.getAllFlashcards();
        const randomId = await this.flashcardActions.getRandomNumber(allFlashcards.length);
        return await this.getFlashcardById(randomId);
    }

    /**
     * Builds the options for the query to the Database and passes it as a parameter to the Database Method
     * @param id Flashcard ID.
     * @returns {Promise<Array[Object]>}
     */
    async getFlashcardById(id) {
        const queryOptions = {
            raw: true,
            where: {
                id: id
            }
        };
        return await this.flashcardDB.getFlashcardRow(queryOptions);

    }

    /**
     * Retrieves all flashcards from the Database
     * @returns {Promise<Array[Object]>}
     */
    async getAllFlashcards() {
        return await this.flashcardDB.getFlashcardTable();
    }
}
