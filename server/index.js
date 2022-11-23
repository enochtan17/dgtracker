const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

// middleware
app.use(cors())
app.use(express.json())

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM dgtracker")  // dgtracker is the db name. should use table name, like courses
    console.log('all', allTodos)
  } catch (err) {
    console.error(err.message)
  }
})

// add columns holes 1-18 to courses table, and par total?

app.post('/courses', async (req, res) => {
  try {
    console.log('post body', req.body)
    const { name } = req.body
    // console.log(name)
    const newCourse = await pool.query(
      "INSERT INTO courses (name) VALUES($1)",
      [ name ]
    )
    console.log('after await')
    res.json(newCourse)
  } catch (err) {
    console.error(err.message)
  }
})

app.listen(5000, () => {
  console.log('server has started on port 5000...')
})
