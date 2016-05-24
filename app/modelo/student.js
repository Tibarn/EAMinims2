var mongoose = require('mongoose');

module.exports = mongoose.model('Student', {
	name: String,
	address: String,
	phone: {
        
        home : Number,
        work: Number
         }
});