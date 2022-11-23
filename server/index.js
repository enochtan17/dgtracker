const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

// middleware
app.use(cors())
app.use(express.json())

/*****  ROUTES *****/

// GET all courses
app.get("/courses", async (req, res) => {
  try {
    const allCourses = await pool.query("SELECT * FROM courses")  // response OBJECT
    res.json(allCourses.rows)
  } catch (err) {
    console.error('ERROR IN POST COURSE: ', err.message)
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


// DELETE a course


// GET all scores of one course
app.get("/scores/:courseID", async (req, res) => {
  try {
    const { courseID } = req.params
    
    const allScores = await pool.query("SELECT * FROM scores WHERE course_id = $1",
      [ courseID ]
    )
    res.json(allScores.rows)
  } catch (err) {
    console.error('ERROR IN POST COURSE: ', err.message)
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

// UPDATE a score


// DELETE a score



app.listen(5000, () => {
  console.log('server has started on port 5000...')
})
