const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts/range", (request, response) => {
    db.Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            response.json(dbWorkout);
        })
        .catch(err => {
            response.status(400).json(err);
        });
});

router.post("/api/workouts", ({ body }, response) => {
    db.Workout.create(body)
        .then(dbWorkout => {
            response.json(dbWorkout);
        })
        .catch(err => {
            response.status(400).json(err);
        });
});

module.exports = router;
