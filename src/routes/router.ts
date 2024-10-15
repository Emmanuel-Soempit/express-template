import express from 'express';
import authRouter from './authRoutes';

const v1Router = express.Router();

v1Router.use('/', authRouter)

export default v1Router