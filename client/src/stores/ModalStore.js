import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    addCourseModal: false,
    editCourseModal: false,
    addScoreModal: false,
    courseIDToEdit: null
  }),
  actions: {
    toggleAddCourse() {
      this.addCourseModal = !this.addCourseModal
    },
    toggleEditCourse() {
      this.editCourseModal = !this.editCourseModal
    },
    toggleAddScore() {
      this.addScoreModal = !this.addScoreModal
    },
  }
})
