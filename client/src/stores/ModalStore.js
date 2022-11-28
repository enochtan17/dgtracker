import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    addCourseModal: false,
    addScoreModal: false,
  }),
  actions: {
    toggleAddCourse() {
      this.addCourseModal = !this.addCourseModal
      console.log('after', this.addCourseModal)
    },
    toggleAddScore() {
      this.addScoreModal = !this.addScoreModal
    },
  }
})
