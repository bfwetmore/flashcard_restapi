const express = require('express');
const FlashcardFactory = require('../factories/flashcardFactory');

const flashcardRouter = express.Router();

flashcardRouter.get('/flashcard/:flashcardId', async (req, res) => {
    const flashcardFactory = await new FlashcardFactory().getFlashcardFactory();
    res.json(await flashcardFactory.getFlashcard(req));

});

module.exports = flashcardRouter;
