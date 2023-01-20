import express, { Request, Response } from 'express';

let router = express.Router();

router.get('/', (req: Request, res: Response) => {
	res.status(200).json({ status: 'success', message: 'Route is working' });
});

export default router