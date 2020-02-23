console.log('Daytracker is live');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const modules = require('./modules');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
modules(app);
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => {
    console.log(`Running on Port ${port}`);
});