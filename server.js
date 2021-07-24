const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('Mongodb connected'))
  .catch(() => console.log('Error - Mongodb not connected'));

const weights = require('./routes/api/weights');

app.use(bodyParser.json());
app.use(cors());

app.use('/api/weights', weights);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
