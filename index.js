console.log('Daytracker is live');
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const modules = require('./modules');

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
modules(app);
app.get('/', (req, res) => res.send('Hello World!'))

module.exports = app