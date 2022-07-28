module.exports = class FlashcardController {

    constructor(flashcardService) {
        this.flashcardService = flashcardService;
    }

    /**
     * Gets a flashcard Object by ID.
     * @param req
     * @returns {Promise<*[{question: string, answer: string, hint: string, id: number}]>}
     */
    async getFlashcard(req) {
        return await this.flashcardService.getFlashcardById(req.params['flashcardId']);
    }
};
