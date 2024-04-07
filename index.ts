import express, {Express} from 'express';
import hbs from 'hbs';
import path from 'path';
import "dotenv/config";

//Router import
import homeRouter from './routes/home.route';

// var declare
const app: Express = express();
const PORT: string = process.env.PORT || '3001';
const __rootPath = path.join(__dirname, '..');

// settings
app.set('view engine', 'hbs');
app.set('views', path.join(__rootPath, 'views'));

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// static folder
app.use(express.static(path.join(__rootPath, 'public')));
hbs.registerPartials(path.join(__rootPath, 'views', 'partials'));

// routes
app.use(homeRouter);

// server listen
app.listen(PORT, (): void => {
    console.log(`Server listening on port ${PORT}`);
});