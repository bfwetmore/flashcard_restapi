import express from 'express';
import FlashcardFactory from '../factories/flashcardFactory.js';

const flashcardRouter = express.Router();

flashcardRouter.get('/flashcard/:flashcardId', async (req, res) => {
    const flashcardFactory = await new FlashcardFactory().getFlashcardFactory();
    res.json(await flashcardFactory.getFlashcard(req));

});

export default flashcardRouter;
