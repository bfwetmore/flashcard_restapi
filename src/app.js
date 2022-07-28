const express = require('express');

const flashcardRouter = require('./router/flashcardRouter');
const questionRouter = require('./router/questionRouter');
const answerRouter = require('./router/answerRouter');
const userRouter = require('./router/userRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', flashcardRouter);
app.use('/api', questionRouter);
app.use('/api', answerRouter);
app.use('/api', userRouter);

app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(
    /**
     * Express Error Handler
     * @param {Object} err error
     * @param {Object} req request
     * @param {Object} res response
     * @param {Object} next next
     */
    (err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            error: {
                message: err.message
            }
        });
    });

app.listen(PORT, () => console.log(`Flashcard API listening on port ${PORT}.`));
