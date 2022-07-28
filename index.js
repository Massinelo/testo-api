const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.json('ca marche !!!!');
});

app.listen(PORT, () => {
  console.log(`Testo Back as started on port ${PORT}`);
});
