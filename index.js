console.log('Daytracker is live');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const { User, sequelize }  = require('./models');
console.log(User === sequelize.models.User)
const jane =  User.create({ name: "Jane Doe", email: "jane@email.com", password: 'password' });
console.log({jane});


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => {
    console.log(`Running on Port ${port}`);
});