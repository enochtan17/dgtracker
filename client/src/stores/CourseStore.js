import axios from 'axios'
import { defineStore } from 'pinia'
import { api } from '../constants'

export const useCourseStore = defineStore('course', {
  state: () => ({
    courses: [],
    testProp: 'course store'
  }),
  actions: {
    async getCourses() {
      this.courses = []
      const { data } = await axios.get(`${api}/courses`)

      for (const key in data) {
        const course = data[key]

        this.courses.push(course)
      }
    },
    async addCourse(body) {
      await axios.post(`${api}/courses`, body)

      await this.getCourses()
    },
    async deleteCourse(id) {
      await axios.delete(`${api}/courses/${id}`)

      await this.getCourses()
    },
    async editCourse(id) {
      await axios.put(`${api}/courses/${id}`)
    }
  }
})

// import { ref } from 'vue'
// import { defineStore } from 'pinia'
// import axios from 'axios'
// import { api } from '../constants'

// export const useCourseStore = defineStore('course', () => {
//   const courses = ref([])

//   async function getCourses() {
//     const rawData = await axios.get(`${api}/courses`)
//     console.log('in store', rawData.data)
//     console.log('course state', courses)
//   }

//   return { courses, getCourses }
//   // state: () => ({
//   //   courses: [],
//   //   testProp: 'testprop'
//   // }),
//   // actions: {
//   //   async getCourses() {
//   //     console.log('in store', this.courses)
//   //     // const x = Object.entries(this.courses)
//   //     // console.log('x', x, typeof x)
//   //     const { rawData } = await axios.get(`${api}/courses`)
//   //     console.log('after await', rawData)

//   //     // for (const key in rawData) {
//   //     //   const course = rawData[key]

//   //     //   this.courses.push(course)
//   //     // }
//   //   }
//   // }
// })
