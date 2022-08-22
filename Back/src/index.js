const express = require('express');
const cors = require('cors');
const { invalidUrl, errorHandler } = require('./middlewares/handleErrors');

const app = express();
const routes = require('./routes');

app.use(cors());
app.use('/v1', routes);
app.get('*', invalidUrl);
app.use(errorHandler);

app.listen(4000, () => {
  console.log(`servidor conectado en http://localhost:4000`);
});
