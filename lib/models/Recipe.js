const mongoose = require('mongoose');

const ingredientsSchema = new mongoose.Schema({
  ammount: {
    type: Number, 
    required: true
  }, 
  measurment: {
    type: String, 
    required: true
  }, 
  name: {
    type: String, 
    required: true
  }
});

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ingredients: [ingredientsSchema],
  directions: [String]
});

module.exports = mongoose.model('Recipe', schema);
