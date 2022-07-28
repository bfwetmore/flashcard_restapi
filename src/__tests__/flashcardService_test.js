import FlashcardService from '../services/flashcardService';
import MockFlashcardDb from '../db/__mocks__/flashcardDb';

describe("Flashcard Service", () => {

    test("getFlashcardById should return an array with one flashcard object.", async () => {
        const flashcardService = new FlashcardService(new MockFlashcardDb());
        const expectedMockResult = [{
            id: 2,
            question: "Mock 2 Question Successful",
            answer: "Mock 2 Answer Successful",
            hint: "Mock 2 Hint Successful"
        }];

        const result = await flashcardService.getFlashcardById(2);
        expect(result).toEqual(expectedMockResult);
    });
});
