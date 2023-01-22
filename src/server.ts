import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import router from './routes/routes';
import Logger from './library/Logger';
import chalk from 'chalk';

const app = express();
dotenv.config();

let PORT = process.env.PORT;

// Middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/v1', router);

//Logger.error("This is a test warning")
const log= ()=>{
	let log = console.log
	  log(chalk.blue('Hello') + ' World' + chalk.red('!'))
}
log()

app.listen(PORT, () => {
	console.log(`The server is listening on port ${PORT}`);
});
