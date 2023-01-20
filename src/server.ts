import express, { NextFunction, Request, Response } from 'express';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
	console.log(`The server is listening on port ${PORT}`);
});
