const express = require('express');
const  users  = require('../models/Users');
const exercises  = require('../models/Exercises');

const router = express.Router();
router
// add an exercise to a user
.post('/add', (req, res) => {
   users.Add_Exercise(req.body.user, req.body.exercises)
   res.send({success: true});     
})

// delete an exercise from a user
.post('/delete', (req, res) => {
    users.Delete_Exercise(req.body.user, req.body.exercises)
    res.send({success: true});  
})


module.exports = router;
