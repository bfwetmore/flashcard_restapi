import express from 'express';
import UserFactory from '../factories/userFactory.js';

const userRouter = express.Router();

userRouter.post('/createUser', async (req, res) => {
    res.json(await new UserFactory().createNewUser(req));
});

userRouter.post('/login', async (req, res) => {
    res.json(await new UserFactory().userLogin(req));
});

export default userRouter;
