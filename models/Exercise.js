const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Enter exercise type"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter exercise name"
    },
    duration: {
        type: Number,
        required: "Enter number of minutes"
    },
    distance: {
        type: Number
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    }
});
const Exercise = mongoose.model('exercise', exerciseSchema);

module.exports = Exercise;

