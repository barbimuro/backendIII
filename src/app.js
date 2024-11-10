import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import {addLogger, logger} from "./utils/errors/logger.js";
import config from './config/config.js';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js'

const app = express();
const PORT = config.app.PORT;
const connection = mongoose.connect(config.mongo.URL)
const server = app.listen(PORT, ()=>logger.info(`Listening on port ${PORT}`))

app.use(express.json());
app.use(cookieParser());

app.use(addLogger)

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks', mocksRouter)



