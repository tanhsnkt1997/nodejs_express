const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const routes = require('./routes');
const db = require('./config/db');

//Connect_db
db.connect();

app.use(express.static(path.join(__dirname, 'public'))); //xu li file tinh
//
app.use(express.urlencoded({
  extend: true,
})); //xu ly dang form html

app.use(express.json());//dang code javascrip
//http logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

//route init
routes(app);
//Action---->Dispatcher------>Function handler
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})