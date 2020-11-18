const express = require('express');
const users = require('../models/users');

const router = express.Router();
router
// add friend
.post('/add', (req, res) => {
    users.Add_Friend(req.body.user);
    res.send({success: true});       
})

// delete friend
.post('/delete', (req, res) => {
    users.Delete_Friend(req.body.user);
    res.send({success: true}); 
});

module.exports = router;
