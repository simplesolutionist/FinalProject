const express = require("express")
const router = express.Router();
exports.Home = (req, res) =>{
    res.send('Welcome to Gravity Gym');
}