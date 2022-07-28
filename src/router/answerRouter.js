const express = require('express');
const FlashcardFactory = require('../factories/flashcardFactory');

const answerRouter = express.Router();

answerRouter.get('/answer/:questionId', async (req, res) => {
    const answerFactoryController = await new FlashcardFactory().getAnswerFactory();
    res.json(await answerFactoryController.getAnswer(req));

});

module.exports = answerRouter;
