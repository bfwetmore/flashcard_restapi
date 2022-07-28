import MockFlashcardService from '../services/__mocks__/flashcardService.js';
import MockFlashcardActions from '../actions/__mocks__/flashcardActions.js';
import QuestionController from '../controller/questionController.js';
import FlashcardController from "../controller/flashcardController";
import AnswerController from '../controller/answerController';

describe("Controllers", () => {

    describe("Question Controller", () => {

        test("getRandomQuestion should return an object containing a number and string.", async () => {
            const questionController = new QuestionController(new MockFlashcardService(new MockFlashcardActions()));
            const expectedMockResponse = {flashcardId: 1, question: "Mock Question Successful"};
            const result = await questionController.getRandomQuestion();

            expect(result).toEqual(expectedMockResponse);
        });
    });

    describe("Answer Controller", () => {

        test("getAnswer should return a string containing answer only.", async () => {
            const answerController = await new AnswerController(new MockFlashcardService());
            const mockRequest = {params: 1};
            const expectedMockResponse = "Mock Answer Successful";
            const result = await answerController.getAnswer(mockRequest);

            expect(result).toEqual(expectedMockResponse);
        });
    });

    describe("Flashcard Controller", () => {

        test("getFlashcard should return an array with one object containing all flashcard Values.", async () => {
            const flashcardController = new FlashcardController(new MockFlashcardService());
            const mockRequest = {params: {flashcardId: 1}};
            const expectedMockResponse = [{
                id: 1,
                question: "Mock Question Successful",
                answer: "Mock Answer Successful",
                hint: "Mock Hint Successful"
            }];
            const results = await flashcardController.getFlashcard(mockRequest);
            expect(results).toEqual(expectedMockResponse);
        });
    });
});
