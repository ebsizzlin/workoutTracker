const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
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
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

//mdn reduce, array.map
WorkoutSchema.virtual("totalDuration").get(function () {
  const duration = this.exercises.reduce((acc, cur) => {
    return acc + cur.duration;
  }, 0);

  return duration;
});

//acc = accumulator, cur = current value
WorkoutSchema.virtual("totalDistance").get(function () {
  const distance = this.exercises.reduce((acc, cur) => {
    if(cur.age) {
      return acc + cur.distance;
    }

    return acc;

  }, 0);

  return distance;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;