require('dotenv').config()
require('./db')

const morgan = require('morgan')
const cors = require('cors')
const favoritesController = require('./controllers/favoriteController')

const express = require('express');

const app = express();

app.use('*', cors())
app.use(express.json())
app.use(morgan('dev'))
app.use('/api', favoritesController)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});