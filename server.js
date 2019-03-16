require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();
const port=process.env.PORT || 80
const mongoose = require('mongoose');
const User = require('./db/models/user');

// Connect the server to our mlab database using mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://heroku_fv24xr9l:mjh8oijr80tpn13d1qsalnl5ph@ds257314.mlab.com:57314/heroku_fv24xr9l', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongo Connection error') );
db.once('open', () => {
  User.create({
    name: 'Joey',
    email: 'joey@joey.com',
    password: '12345'
  })
  .then(user => console.log('Joey has been created in the database'));
  console.log('Hey we connected to the database!');
});




app.use(express.static(path.join(__dirname, 'build')));



app.get('/signup', (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
});


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port, () => {
  console.log("APP listening on Port: ", port);
})