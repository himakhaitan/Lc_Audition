const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },

    email: {
        type: String,
        required: true,

    },
    branch: 
        {
            type: String,
            required: true,
    },
    roll: {
        type: String,
            required: true,
    },
    phone: {
        type: Number,
            required: true,
    },
    what_is_between_you_and_LC_that_you_want_to_join_us: {
        type: String,
        required: true,
    },
    list_the_tech_stack_you_are_comfortable_with: {
        type: String,
        required: true,
    },
    who_are_the_people_you_most_admire: {
        type: String,
        required: true,
    },
    how_do_you_evaluate_success: {
        type: String,
        required: true,
    },
    in_your_opinion_what_is_right_and_what_is_worng: {
        type: String,
        required: true,
    },

})


const User = new mongoose.model("Register", userSchema)
module.exports = User