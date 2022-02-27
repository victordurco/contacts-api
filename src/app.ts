import "reflect-metadata";
import express, {Request, Response} from "express";
import cors from "cors";

import connectDatabase from "./database";
import serverMiddlewareError from './middlewares/serverMiddlewareErro';
import contactRouter from './routers/contactRouter';

export async function init () {
  await connectDatabase();
}

const app = express();
app.use(cors());
app.use(express.json());

app.get("/status", (req: Request, res: Response) => {
    res.sendStatus(200);
});

app.use('/contacts', contactRouter);

app.use(serverMiddlewareError);

export default app;