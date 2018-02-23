const mongoose = require('mongoose');

// define the schema for our user model
const cardSchema = mongoose.Schema({
  jobNumber: String,
  assignee: Array,  
  startDate: { type: Date, default: Date.now }
});


// create the model and expose it to our app
module.exports = mongoose.model('SomeModel', someModelSchema);
