const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const soups = ['gazpacho', 'borscht', 'primordial', 'avgolemono', 'laksa'];

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.post('/soups',(req, res, next) => {
  const newNameSoup = req.query.name;
  soups.push(newNameSoup);
  res.status(201).send(newNameSoup);
})