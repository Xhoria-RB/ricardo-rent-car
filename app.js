require('./server/config/config');

const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./server/routes/router');
const apiRoutes = require('./server/routes/apiRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', routes);
app.use('/api', apiRoutes);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (_, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});
// app.use('*', (_, res) => res.json({
//   message: 'Hello world'
// }));


module.exports = app;
