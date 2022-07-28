const express = require('express');
const UserFactory = require('../factories/userFactory');

const userRouter = express.Router();

userRouter.post('/createUser', async (req, res) => {
    res.json(await new UserFactory().createNewUser(req));
});

userRouter.post('/login', async (req, res) => {
    res.json(await new UserFactory().userLogin(req));
});

module.exports = userRouter;
