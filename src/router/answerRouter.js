import express from 'express';
import FlashcardFactory from '../factories/flashcardFactory.js';

const answerRouter = express.Router();

answerRouter.get('/answer/:questionId', async (req, res) => {
    const answerFactoryController = await new FlashcardFactory().getAnswerFactory();
    res.json(await answerFactoryController.getAnswer(req));

});

export default answerRouter;
