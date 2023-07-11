const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const mountains = ['denali', 'olympus', 'kilimanjaro', 'matterhorn'];
const mountainRanges = ['alps', 'andes', 'himalayas', 'rockies'];


const mountainsRouter = express.Router();
app.use('/mountains', mountainsRouter);

const mountainRangesRouter = express.Router();
app.use('/mountain-ranges', mountainRangesRouter);


mountainsRouter.get('/', (req, res, next) => {
  res.send(mountains);
});

mountainRangesRouter.get('/', (req, res, next) => {
  res.send(mountainRanges);
});