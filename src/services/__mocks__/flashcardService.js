export default class FlashcardService {
    getFlashcardById(flashcardId) {
        return [{
            id: flashcardId,
            question: "Mock Question Successful",
            answer: "Mock Answer Successful",
            hint: "Mock Hint Successful"
        }];
    }

    generateRandomQuestion() {
        return [{
            id: 1,
            question: "Mock Question Successful",
            answer: "Mock Answer Successful",
            hint: "Mock Hint Successful"
        }];
    }

    getAllFlashcards() {
        return [
            {
                id: 1,
                question: "Mock 1 Question Successful",
                answer: "Mock 1 Answer Successful",
                hint: "Mock 1 Hint Successful"
            },
            {
                id: 2,
                question: "Mock 2 Question Successful",
                answer: "Mock 2 Answer Successful",
                hint: "Mock 2 Hint Successful"
            },
            {
                id: 3,
                question: "Mock 3 Question Successful",
                answer: "Mock 3 Answer Successful",
                hint: "Mock 3 Hint Successful"
            },
            {
                id: 4,
                question: "Mock 4 Question Successful",
                answer: "Mock 4 Answer Successful",
                hint: "Mock 4 Hint Successful"
            },
            {
                id: 5,
                question: "Mock 5 Question Successful",
                answer: "Mock 5 Answer Successful",
                hint: "Mock 5 Hint Successful"
            }
        ];
    }
}
