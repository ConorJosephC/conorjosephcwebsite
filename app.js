////////////////////////////////////////////////////////////////////////////////
// DEPENDENCIES
////////////////////////////////////////////////////////////////////////////////

const express = require('express');
const ejs = require('ejs');
const session = require('express-session');
const app = express();

const bodyParser = require('body-parser');

const { Client } = require('pg')
// const client = new Client({
// 	database: 'bulletinboard',
//   host: 'localhost',
//   user: process.env.POSTGRES_USER,
// 	password: process.env.POSTGRES_PASSWORD,
// 	port: process.env.PORT || 5000,
// })

const PORT = process.env.PORT || 5000;

require('dotenv').config();

// client.connect();

////////////////////////////////////////////////////////////////////////////////
// CONNECT WITH TEMPLATE ENGINE FOLDER
////////////////////////////////////////////////////////////////////////////////

app.set('views', './public/views');
app.set('view engine', 'ejs');

////////////////////////////////////////////////////////////////////////////////
// CONNECT WITH PUBLIC FOLDER
////////////////////////////////////////////////////////////////////////////////

app.use(express.static('./public'));

////////////////////////////////////////////////////////////////////////////////
// SET UP BODY PARSER
////////////////////////////////////////////////////////////////////////////////

app.use(bodyParser.urlencoded({
  extended: true
}));

////////////////////////////////////////////////////////////////////////////////
// ROUTES
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// HOME PAGE

app.get('/', (req, res) => {
	res.render('home');
})

app.get('/aboutme', (req, res) => {
	res.render('aboutme');
})

app.get('/animation', (req, res) => {
	res.render('animation');
})

app.get('/jquery', (req, res) => {
	res.render('jquery');
})

const server = app.listen(PORT, () => {
  console.log('App is running on port '+ PORT);
})
