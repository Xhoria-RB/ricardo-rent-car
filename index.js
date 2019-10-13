require('./server/config/database');
const app = require('./app');

app.listen(process.env.API_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port: ${process.env.API_PORT}`);
});
