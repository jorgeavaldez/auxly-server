import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import authRoutes from './auth';
import apiRoutes from './api';

import { errorHandler } from './errors';

const port = process.env.PORT || 6969;

const app = express();

app.set('port', port);

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', authRoutes);
app.use('/api', apiRoutes);

app.use('/health', (_, res) => {
  res.sendStatus(200);
});

app.use(errorHandler);

module.exports = app;
