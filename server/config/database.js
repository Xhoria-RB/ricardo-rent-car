const mongoose = require('mongoose');

module.exports = mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, (err, _) => {
  if (err) throw err;
  // eslint-disable-next-line no-console
  console.log('DB connected');
});
