import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import router from './routes/routes';

const app = express();
dotenv.config();

let PORT = process.env.PORT;

// Middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/v1', router);

app.listen(PORT, () => {
	console.log(`The server is listening on port ${PORT}`);
});
