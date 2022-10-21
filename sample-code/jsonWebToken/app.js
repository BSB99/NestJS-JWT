const express = require('express');
const app = express();
const test = require('./controller');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', test);

app.listen(3000, () => {
  console.log(3000 + '포트에서 가동');
});
