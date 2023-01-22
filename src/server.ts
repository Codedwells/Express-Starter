import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import compression from 'compression';

import router from './routes/user.routes';
import Logger from './library/Logger';
import connectDb from './db.connect';
import { config } from './config/config';

dotenv.config();
const app = express();
const PORT = config.server.port;

/** Middleware */
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(Logger.Borgen);

/** Routes */
app.use('/api/v1', router);

/** Heathcheck */
app.get('/ping', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message: 'pong' });
});

/** Error Handling */
app.use((req, res, next) => {
    Logger.error('Route not found!!!');

    next();
});

/**
 * Only start server if mongo connection success
 */
const StartServer = () => {
    app.listen(PORT, () => {
        Logger.info(`The server is listening on port ${PORT}`);
    });
};
connectDb(StartServer);
