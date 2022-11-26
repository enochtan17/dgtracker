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
    }
  },
  // getters: {
  //   getScoreFromCourse(title) {
  //     console.log('getter arg', typeof title)
  //     const courseName = title.course.courses
  //     console.log('in getter', courseName)
  //     // return this.scores[courseName]
  //   }
  // }
})
