export default class FlashcardActions {

    /**
     * Returns a Random ID number based on Total count of Flashcard Objects in the Database.
     * @returns {Promise<number>}
     */
    async getRandomNumber(numberOfFlashcards) {
        return Math.floor(Math.random() * numberOfFlashcards + 1);
    }
}
