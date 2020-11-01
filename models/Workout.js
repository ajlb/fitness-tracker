const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exersizes: {
        type: Schema.Types.ObjectId,
        ref: 'excercise'
    }
});
const Workout = mongoose.model('workout', workoutSchema);

module.exports =  Workout;

