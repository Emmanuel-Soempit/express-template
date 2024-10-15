import express, { Router } from 'express';
import UserController from '../controllers/UserController';

const authRouter = express.Router();
const userController = new UserController();

authRouter.post('/auth/login', userController.Login)
authRouter.post('/auth/register', userController.Register)


export default authRouter