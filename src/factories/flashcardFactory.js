import FlashcardService from '../services/flashcardService.js';
import FlashcardDB from '../db/flashcardDb.js';
import FlashcardController from '../controller/flashcardController.js';
import QuestionController from '../controller/questionController.js';
import FlashcardActions from '../actions/flashcardActions.js';
import AnswerController from '../controller/answerController.js';

export default class FlashcardFactory {
    async getFlashcardFactory() {
        return new FlashcardController(new FlashcardService(new FlashcardDB()));
    }

    async getQuestionFactory() {
        return new QuestionController(new FlashcardService(new FlashcardDB(), new FlashcardActions()));
    }

    async getAnswerFactory() {
        return new AnswerController(new FlashcardService(new FlashcardDB()));
    }
}
