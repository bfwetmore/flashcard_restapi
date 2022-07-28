const FlashcardService = require('../services/flashcardService');
const FlashcardDB = require('../db/flashcardDb');
const FlashcardController = require('../controller/flashcardController');
const QuestionController = require('../controller/questionController');
const FlashcardActions = require('../actions/flashcardActions');
const AnswerController = require('../controller/answerController');

module.exports = class FlashcardFactory {
    async getFlashcardFactory() {
        return new FlashcardController(new FlashcardService(new FlashcardDB()));
    }

    async getQuestionFactory() {
        return new QuestionController(new FlashcardService(new FlashcardDB(), new FlashcardActions()));
    }

    async getAnswerFactory() {
        return new AnswerController(new FlashcardService(new FlashcardDB()));
    }
};
