import { defineStore } from 'pinia'
import axios from 'axios'
import { api } from '../constants'

export const useCourseStore = defineStore('course', {
  state: () => ({
    courses: [],
    testProp: 'testprop'
  }),
  actions: {
    async getCourses() {
      // const x = Object.entries(this.courses)
      // console.log('x', x, typeof x)
      const { data: rawData } = await axios.get(`${api}/courses`)

      for (const key in rawData) {
        const course = rawData[key]

        this.courses.push(course)
      }
    }
  }
})
