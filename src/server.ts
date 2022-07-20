import express, { request, response } from 'express';
import { modelsRoutes } from './routes/Models.routes';


const app = express();

app.use(express.json());

app.use("/modelo",modelsRoutes); 

app.listen(3333, () => console.log("Server is running ")); 