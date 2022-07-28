import FlashcardActions from '../actions/flashcardActions.js';

describe("Flashcard Actions", () => {

    test('getRandomId should return a random number between 1-5', async () => {
        let result;
        for (let i = 0; i < 20; i++) {
            result = await new FlashcardActions().getRandomNumber(5);
            if (result > 5 || result < 1) {
                console.error(`received an invalid number ${result}`);
                result = false;
                break;
            }
        }
        expect(result).toBeTruthy();
    });
});
