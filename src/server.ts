import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

let PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req:Request,res:Response)=>{
	console.log(req.body)

	res.sendStatus(200)
})

app.listen(PORT, () => {
	console.log(`The server is listening on port ${PORT}`);
});
