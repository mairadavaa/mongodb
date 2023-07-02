const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestScema = new Schema({
    name:{
        type: String,
        required: [true, 'Name field is required']
    },
    job: {
        type: String
    },
    available:{
        type: Boolean,
        default: false
    }
});

const Ninja = mongoose.model("ninja", TestScema);
module.exports = Ninja;