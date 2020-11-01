const router = require("express").Router();
const db = require("../models");
const path = require("path");

//api routes
router.get("/api/workouts", (request, response) => {
    db.Workout.find({})
        .then(dbWorkout => {
            response.status(200).json(dbWorkout);
        })
        .catch(error => {
            response.status(400).json(error);
        });
});

router.post("/api/workouts", (request, response) => {
   db.Workout.create({})
        .then(dbWorkout => {
            response.json(dbWorkout);
        })
        .catch(error => {
            response.json(error);
        });
});

router.put("/api/workouts/:id", ({ body, params }, response) => {
    db.Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },

        { new: true, runValidators: true }
    )
        .then(dbWorkout => {
            response.json(dbWorkout);
        })
        .catch(err => {
            response.json(err);
        });
});

router.get("/api/workouts/range", (request, response) => {
    db.Workout.find({})
        .then(dbWorkout => {
            response.json(dbWorkout);
        })
        .catch(error => {
            response.status(400).json(error);
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
