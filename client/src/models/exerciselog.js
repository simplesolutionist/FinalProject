const
  app = require('express').Router(),
  mysql = require('../models/mysql')

// GET Exercises
app.post('/get-exercises', (req, res) => {
  mysql.query('SELECT * FROM Exercises ORDER BY id DESC')
    .then(s => res.json(s))
    .catch(e => console.log(e))
})

// CREATE AN Exercise
app.post('/create-exercise', (req, res) => {
  let { title, content } = req.body
  let insert = {
    title,
    content,
    time: new Date().getTime()
  }
  mysql.query('INSERT INTO Exercises SET ?', insert)
    .then(s => res.json(Object.assign({}, insert, { id: s.insertId })) )
    .catch(e => console.log(e) )
})

// DELETE Exercise
app.post('/delete-exercise', (req, res) => {
  let { id } = req.body
  mysql.query('DELETE FROM Exercises WHERE id=?', [ id ])
    .then(() => res.json({ mssg: 'Exercise deleted!!' }) )
    .catch(e => console.log(e) )
})

// EDIT Exercise
app.post('/edit-exercise', (req, res) => {
  let { id, title, content } = req.body
  mysqlquery('UPDATE Exercises SET title=?, content=? WHERE id=?', [ title, content, id ])
    .then(s => res.json(s) )
    .catch(e => console.log(e) )
})

module.exports = app