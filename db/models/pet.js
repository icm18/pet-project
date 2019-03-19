// email, name, password, photo
const mongoose = require('mongoose');
// Defining how a user is going to look like in our database
const PetSchema = mongoose.Schema({
 color: {
    type: String, 
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  lat:{
      type: Number,
      required: true
  },
lng:{
    type: Number,
    required: true

}
})


module.exports = mongoose.model('Pet', PetSchema);