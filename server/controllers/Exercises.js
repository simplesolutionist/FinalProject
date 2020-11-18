const express = require('express');
const exercises = require('../models/Exercises');
const comments = require('../models/comments');
const reactions = require('../models/reactions');

const router = express.Router();

router
    .get('/', (req, res, next) => {
        exercises.getAll().then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        exercises.get(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/:id/comments', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        comments.getForExercise(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/:id/reactions', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        reactions.getForExercise(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/types', (req, res, next) => {
        exercises.getTypes().then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/search', (req, res, next) => {
        exercises.search(req.query.q).then(x=> res.send( x ) )
        .catch(next);
    })
    .post('/', (req, res, next) => {
        exercises.add(exercises.Types.exercisetype,
            req.body.ExerciseDay,
            req.body.ExerciseHeartrate,
            req.body.ExerciseIntensity,
            req.body.ExerciseDuration,
            req.body.ExerciseLocation,
            req.body.Owner_id,).then(newExercise => {
                res.send( newExercise);
            }).catch(next)
    })
   
   .put('/:id', (req, res, next) => {
        exercises.update(exercises.Types.exercisetype,
            req.body.ExerciseDay,
            req.body.ExerciseHeartrate,
            req.body.ExerciseIntensity,
            req.body.ExerciseDuration,
            req.body.ExerciseLocation,
            req.body.Owner_id,).then(newExercise => {
                res.send( newExercise);
            }).catch(next)
    })
    .delete('/:id', (req, res, next) => {
        exercises.remove(req.params.id).then(msg => {
            res.send( msg );
        }).catch(next)
    })
module.exports = router;





