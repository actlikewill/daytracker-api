const app = require('./index.js');
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Running on Port ${port}`);
});