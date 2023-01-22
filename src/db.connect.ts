import mongoose from 'mongoose';
import Logger from './library/Logger';
import { config } from './config/config';

mongoose.set('strictQuery', true);

/**
 * Connect to mongoDB
 * Then start the server
 */
const connectDb = (StartServer: () => void) => {
    mongoose
        .connect(config.mongo.url)
        .then(() => {
            Logger.info(`Connected to Mongodb on port ${config.server.port}`);

            StartServer();
        })
        .catch((err) => {
            Logger.error(err.message);
        });
};

export default connectDb;
