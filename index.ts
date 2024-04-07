import express, {Express} from 'express';
import "dotenv/config";

// var declare
const app: Express = express();
const PORT: string = process.env.PORT || '3001';

// server listen
app.listen(PORT, (): void => {
    console.log(`Server listening on port ${PORT}`);
});