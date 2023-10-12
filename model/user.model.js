const mongoose = require('mongoose');
const user = mongoose.Schema({
    name: {
        type: String,
        default: 'John Doe'
    },
});

module.exports = mongoose.model('User', user);
