import axios from 'axios'
import { defineStore } from 'pinia'
import { api } from '../constants'
import { useCourseStore } from './CourseStore'

export const useScoreStore = defineStore('score', {
  state: () => ({
    course: useCourseStore(),
    scores: {},
    testProp: 'score store'
  }),
  actions: {
    async getScores(courseID) {
      const thisCourse = this.course.courses.filter(course => course.id === courseID)

      const courseName = thisCourse[0].name

      this.scores[courseName] = []

      const { data } = await axios.get(`${api}/scores/${courseID}`)

      for (const key in data) {
        const score = data[key]

        this.scores[courseName].push(score)
      }
    },
    async deleteScore(id, courseID) {
      await axios.delete(`${api}/scores/${id}`)

      await this.getScores(courseID)
    },
    async addScore(body) {
      await axios.post(`${api}/scores`, body)

      await this.getScores(body.course_id)
    }
  },
})
