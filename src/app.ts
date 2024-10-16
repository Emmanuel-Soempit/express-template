import express from 'express';
import fs from 'fs'
import path from 'path';
import cors from 'cors'
import helmet from 'helmet'
import v1Router from './routes/router';
import morgan from 'morgan'


const app = express();

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

app.use(express.json());

app.use(morgan('combined', { stream: accessLogStream }));
app.use(morgan('dev'));

app.use(cors());
app.use(helmet());

app.use('/v1', v1Router);

export default app