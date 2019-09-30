require('./server/config/config');

const express = require('express');
const cors = require('cors');
const routes = require('./server/routes/router');
const apiRoutes = require('./server/routes/apiRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', routes);
app.use('/api', apiRoutes);

app.use('*', (_, res) => res.json({
  message: 'Hello world'
}));


module.exports = app;
