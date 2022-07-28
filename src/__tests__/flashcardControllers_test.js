describe("Controllers", () => {
    const MockFlashcardService = require('../services/__mocks__/flashcardService');
    const MockFlashcardActions = require('../actions/__mocks__/flashcardActions');

    describe("Question Controller", () => {
        const QuestionController = require('../controller/questionController');

        test("getRandomQuestion should return an object containing a number and string.", async () => {
            const questionController = new QuestionController(new MockFlashcardService(new MockFlashcardActions()));
            const expectedMockResponse = {flashcardId: 1, question: "Mock Question Successful"};
            const result = await questionController.getRandomQuestion();

            expect(result).toEqual(expectedMockResponse);
        });
    });

    describe("Answer Controller", () => {
        const AnswerController = require('../controller/answerController');

        test("getAnswer should return a string containing answer only.", async () => {
            const answerController = await new AnswerController(new MockFlashcardService());
            const mockRequest = {params: 1};
            const expectedMockResponse = "Mock Answer Successful";
            const result = await answerController.getAnswer(mockRequest);

            expect(result).toEqual(expectedMockResponse);
        });
    });

    describe("Flashcard Controller", () => {
        const FlashcardController = require("../controller/flashcardController");

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
