import express, {Express} from 'express';
import "dotenv/config";
import { dbConnect } from './database/db.conn';
import bodyParser from 'body-parser';

import projectRouter from './routes/project.route';

// var declare
const app: Express = express();
const PORT: string = process.env.PORT || '3001';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', projectRouter);

// server listen
app.listen(PORT, (): void => {
    dbConnect();
    console.log(`Server listening on port ${PORT}`);
});