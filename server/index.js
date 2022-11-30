const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

// middleware
app.use(cors())
app.use(express.json())

/*****  ROUTES  *****/

// GET all courses
app.get('/courses', async (req, res) => {
  try {
    const allCourses = await pool.query("SELECT * FROM courses")  // response OBJECT
    res.json(allCourses.rows)
  } catch (err) {
    console.error('ERROR IN GET COURSES: ', err.message)
  }
})

// GET a course
app.get('/courses/:id', async (req, res) => {
  try {
    const { id } = req.params

    const course = await pool.query("SELECT * FROM courses WHERE id = $1",
      [ id ]
    )

    res.json(course.rows)
  } catch (err) {
    console.error('ERROR IN GET COURSE: ', err.message)
  }
})

// ADD a course
app.post('/courses', async (req, res) => {
  try {
    // console.log('post body', req.body)
    // {
    //   name: 'Lakeshore',
    //   scores: [
    //     2, 2, 2, 2, 3, 4, 5,
    //     2, 9, 2, 2, 2, 2, 3,
    //     4, 5, 2, 9
    //   ],
    //   total: 62
    // }

    const { name, scores, total } = req.body
    // console.log('name', name, '\n', 'scores', scores, '\n', 'total', total)

    const newCourse = await pool.query(
      "INSERT INTO courses (name, scores, total) VALUES($1, $2, $3) RETURNING *",
      [ name, scores, total ]
    )
    res.json(newCourse.rows[0])
  } catch (err) {
    console.error('ERROR IN POST COURSE: ', err.message)
  }
})

// UPDATE a course
app.put('/courses/:id', async (req, res) => {
  try {
    const { name } = req.body
    const { id } = req.params

    const updateCourse = await pool.query("UPDATE courses SET name = $1 WHERE id = $2",
      [ name, id ]
    )
    res.json("Course updated!")
  } catch (err) {
    console.error('ERROR IN PUT COURSE: ', err.message)
  }
})

// DELETE a course
app.delete('/courses/:id', async (req, res) => {
  try {
    const { id } = req.params

    const deleteCourse = await pool.query("DELETE FROM courses WHERE id = $1",
      [ id ]
    )
    res.json("Course deleted.")
  } catch (err) {
    console.error('ERROR IN DELETE COURSE: ', err.message)
  }
})

// GET all scores of one course
app.get('/scores/:courseID', async (req, res) => {
  try {
    const { courseID } = req.params
    
    const allScores = await pool.query("SELECT * FROM scores WHERE course_id = $1",
      [ courseID ]
    )
    res.json(allScores.rows)
  } catch (err) {
    console.error('ERROR IN GET SCORES: ', err.message)
  }
})


// ADD a score
app.post('/scores', async (req, res) => {
  try {
    const { course_id, player, scores, total } = req.body

    const newScore = await pool.query(
      "INSERT INTO scores (course_id, player, scores, total) VALUES($1, $2, $3, $4) RETURNING *",
      [ course_id, player, scores, total ]
    )
    res.json(newScore.rows[0])
  } catch (err) {
    console.error('ERROR IN POST SCORE: ', err.message)
  }
})

// DELETE a score
app.delete('/scores/:id', async (req, res) => {
  try {
    const { id } = req.params

    const deleteCourse = await pool.query("DELETE FROM scores WHERE id = $1",
      [ id ]
    )
    res.json("Score deleted.")
  } catch (err) {
    console.error('ERROR IN DELETE COURSE: ', err.message)
  }
})


app.listen(5000, () => {
  console.log('server has started on port 5000...')
})
