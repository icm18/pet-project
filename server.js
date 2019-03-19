require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();
const port=process.env.PORT || port;
const mongoose = require('mongoose');
const User = require('./db/models/user');
const Pet = require('./db/models/pet');
const bodyParser = require('body-parser');
app.use(bodyParser.json())
// Connect the server to our mlab database using mongoose
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongo Connection error') );
// db.once('open', () => {
//   User.create({
//     name: 'Joey',
//     email: 'joey@joey.com',
//     password: '12345'
//   })
//   .then(user => console.log('Joey has been created in the database'));
//   console.log('Hey we connected to the database!');
// });




app.use(express.static(path.join(__dirname, 'build')));



app.post('/signup', (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
});
app.get('/pet', function(req, res) {
  console.log('here');
  Pet.find()
  .then(pets => res.json(pets))
  .catch(err => console.log('error', err))
})
app.post('/pet', (req, res) => {
  Pet.create(req.body)
    .then(pet => res.json(pet))
});


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port, () => {
  console.log("APP listening on Port: ", port);
})