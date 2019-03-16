// email, name, password, photo
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Defining how a user is going to look like in our database
const UserSchema = mongoose.Schema({
  email: {
    type: String, 
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  photo: {type: String}
})


/* 
When a user signs up for my site, before I store their information in my database, I'm going to first take their password
and convert it into a long piece of unreadable text. This will help our users keep safe just in case any hackers 
get access to our database.
*/

// Bcrypt is going to help us transform our password into something unreadable. This process is called hashing. 

UserSchema.pre('save', function(next) {
  const user = this;
  const saltRounds = 10;
  if (!user.isModified('password')) return next();

  bcrypt.hash(user.password, saltRounds, (err, hash) => {     // User types in "1234", this function spits back "3219jfafainivanviamo230czlaaininaofafoam"
    user.password = hash;  
    next();
  })


})

module.exports = mongoose.model('User', UserSchema);


