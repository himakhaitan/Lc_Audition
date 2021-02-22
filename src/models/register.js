const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },

    email: {
        type: String,
        required: true,

    },
    password: 
        {
            type: String,
            required: true,
            unique: true
        
    }
})

// Collection

const Register = new mongoose.model("Register", schema)

module.exports = Register