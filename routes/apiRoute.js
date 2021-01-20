const Workout = require("../models/workout");
const mongoose = require("mongoose");
const express = require("express");
const { db } = require("../models/workout");
const router = express.Router();

// /api/workouts get and post
router.get('/api/workouts', (req, res) => {
    Workout.find({})
        .then((dbWorkout) => {
            res.json([...dbWorkout]);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.post('/api/workouts', (req, res) => {
    Workout.create({})
    .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

// /api/workouts/range get and post
router.get('/api/workouts/range', (req, res) => {
    Workout.find({})
        .limit(7)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get('/api/workouts/range', (req, res) => {
    Workout.find({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

// /api/workouts/:id put
router.put('/api/workouts/:id', ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        // { new: true, runValidators: true }
        )
            .then((dbWorkout) => {
                res.json(dbWorkout);
            })
            .catch((err) => {
                res.json(err);
            });
});

module.exports = router;