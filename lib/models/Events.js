const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    recipieId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Recipe',
        required: true
    }, 
    dateOfEvent: {
        type: String, 
        required: true
    },
    notes: {
        type: String, 
        required: true
    }, 
    rating: {
        type: Number, 
        required: true, 
        min: 0, 
        max: 5
    }, 
    
},     { versionKey: false},
); 

module.exports = mongoose.model('Event', schema); 





