const
  app = require('express').Router(),
  mysql = require('../models/mysql')

// GET Exercises
app.post('/get-notes', (req, res) => {
  mysql.query('SELECT * FROM notes ORDER BY id DESC')
    .then(s => res.json(s))
    .catch(e => console.log(e))
})

// CREATE AN Exercise
app.post('/create-note', (req, res) => {
  let { title, content } = req.body
  let insert = {
    title,
    content,
    time: new Date().getTime()
  }
  mysql.query('INSERT INTO notes SET ?', insert)
    .then(s => res.json(Object.assign({}, insert, { id: s.insertId })) )
    .catch(e => console.log(e) )
})

// GET Exercise DETAILS
app.post('/note-details', (req, res) => {
  let { id } = req.body
  mysql.query('SELECT * FROM notes WHERE id=?', [ id ])
    .then(s => res.json(s[0]) )
    .catch(e => console.log(e) )
})

// DELETE Exercise
app.post('/delete-note', (req, res) => {
  let { id } = req.body
  mysql.query('DELETE FROM notes WHERE id=?', [ id ])
    .then(() => res.json({ mssg: 'Note deleted!!' }) )
    .catch(e => console.log(e) )
})

// EDIT Exercise
app.post('/edit-note', (req, res) => {
  let { id, title, content } = req.body
  mysqlquery('UPDATE notes SET title=?, content=? WHERE id=?', [ title, content, id ])
    .then(s => res.json(s) )
    .catch(e => console.log(e) )
})

// INVALID Exercise CHECKING
app.post('/valid-note', (req, res) => {
  mysql.query('SELECT COUNT(id) AS count FROM notes WHERE id=? LIMIT 1', [ req.body.id ])
    .then(is => res.json(is[0].count == 1 ? true : false) )
    .catch(err => console.log(err) )
})

module.exports = app