import express from 'express';
import FlashcardFactory from '../factories/flashcardFactory.js';

const questionRouter = express.Router();

questionRouter.get('/randomQuestion', async (req, res) => {
    const questionFactory = await new FlashcardFactory().getQuestionFactory();
    res.json(await questionFactory.getRandomQuestion());
});

export default questionRouter;
