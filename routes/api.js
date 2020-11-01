const router = require("express").Router();
const db = require("../models");
const path = require("path");

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

router.get("/api/workouts", (request, response) => {
    db.Workout.find({})
        .populate("exercises")
        .then(dbWorkout => {
            response.json(dbWorkout);
        })
        .catch(error => {
            response.json(error);
        });
});

router.post("/api/workouts", (request, response) => {
    db.Workout.create({ day: new Date() })
        .then(dbWorkout => {
            response.json(dbWorkout);
        })
        .catch(err => {
            response.status(400).json(err);
        });
});

//html routes
router.get("/", (request, response) => {
    response.send(200);
});

router.get("/exercise", (request, response) => {
    response.sendFile(path.join(__dirname, "../public/exercise.html"));
});
router.get("/stats", (request, response) => {
    response.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
