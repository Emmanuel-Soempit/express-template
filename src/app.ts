import express from 'express';
import cors from 'cors'
import helmet from 'helmet'
import router from './routes/router';
import v1Router from './routes/router';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/v1',v1Router);

export default app