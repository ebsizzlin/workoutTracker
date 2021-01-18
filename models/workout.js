const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: { type: Date, default: () => new Date() },
        exercises: [
            {
                type: {
                    type: String,
                },
                name: {
                    type: String,
                },
                duration: {
                    type: Number,
                },
                weight: Number,
                reps: Number,
                sets: Number,
                distance: Number,
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    },
);

workoutSchema.virtual('totalDuration').get( () => {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;