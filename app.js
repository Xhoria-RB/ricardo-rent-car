require('./server/config/config');
require('./server/config/database');

const express = require('express');
const routes = require('./server/routes/router');
const apiRoutes = require('./server/routes/apiRoutes');

const app = express();

app.use(express.json());
app.use('/', routes);
app.use('/api', apiRoutes);

app.use('*', (_, res) => res.json({
  message: 'Hello world'
}));


app.listen(process.env.API_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port: ${process.env.API_PORT}`);
});
