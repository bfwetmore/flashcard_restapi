const express = require('express');
const FlashcardFactory = require('../factories/flashcardFactory');

const questionRouter = express.Router();

questionRouter.get('/randomQuestion', async (req, res) => {
    const questionFactory = await new FlashcardFactory().getQuestionFactory();
    res.json(await questionFactory.getRandomQuestion());
});

module.exports = questionRouter;
