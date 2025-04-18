import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import routesTask from './routes/rTask.js';

const __dirname = path.resolve();

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(helmet());

app.use(routesTask);

app.listen(port, () => {
    console.log(`La aplicación está funcionando en http://localhost:${port}`);
});