const Workout = require("../models/workout");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.post('/api/workouts', (req, res) => {
    Workout.create({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get('/api/workouts', (req, res) => {
    Workout.find({})
        .limit(5)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get

router.put

module.exports = router;