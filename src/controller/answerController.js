module.exports = class answerController {

    constructor(flashcardService) {
        this.flashcardService = flashcardService;
    }

    /**
     * Gets a flashcard answer from the database.
     * @param req
     * @returns {Promise<string>}
     */
    async getAnswer(req) {
        const flashcard = await this.flashcardService.getFlashcardById(req.params['questionId']);
        return flashcard[0].answer;
    }
};
