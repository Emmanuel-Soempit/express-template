import express from 'express';
import UserController from '../controllers/UserController';
import { loginValidation, registrationValidation } from '../middlewares/Validators';

const authRouter = express.Router();
const userController = new UserController();

authRouter.post('/auth/login', loginValidation(), userController.Login)
authRouter.post('/auth/register',  registrationValidation(), userController.Register)


export default authRouter