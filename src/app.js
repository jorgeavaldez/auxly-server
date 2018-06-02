const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const authRoutes = require('./auth');
const apiRoutes = require('./api');

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
  res.send(200);
});

module.exports = app;
