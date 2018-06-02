require('dotenv').config();

const app = require('./src/app');

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`);
});
