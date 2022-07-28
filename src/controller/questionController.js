module.exports = class QuestionController {

    constructor(FlashcardService) {
        this.flashcardService = FlashcardService;
    }

    /**
     * Gets a random question from the database and returns an object of key values ID and question.
     * @returns {flashcardId <number>, question<string>}>}
     */
    async getRandomQuestion() {
        const flashcard = await this.flashcardService.generateRandomQuestion();
        return {flashcardId: flashcard[0].id, question: flashcard[0].question};
    }
};
