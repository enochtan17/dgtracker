<template>
  <main>
    <h1>Disc Golf Score Tracker</h1>

    <!-- Add Course Modal -->
    <button
      @click="toggleAC()"
    >
      Add Course
    </button>
    <v-dialog
      v-if="modalStore.addCourseModal"
      dark
    >
      {{ modalStore.addCourseModal }}
      <AddCourseDialog />
    </v-dialog>

    <div
      v-for="course in courseStore.courses"
      :key="course.id"
    >
      <hr/>
      {{ course }}
      <CourseList :course="course" />
    </div>
  </main>
</template>

<script>
  import CourseList from './components/CourseList.vue'
  import AddCourseDialog from './components/AddCourseDialog.vue'
  import { useCourseStore } from './stores/CourseStore'
  import { useModalStore } from './stores/ModalStore'
  import { mapStores, mapWritableState } from 'pinia'

  export default {
    name: 'App',
    components: {
      CourseList,
      AddCourseDialog
    },
    methods: {
      toggleAC() {
        this.modalStore.toggleAddCourse()
      },
    },
    computed: {
      ...mapStores(useCourseStore, useModalStore),
    },
    async created() {
      await this.courseStore.getCourses()
    }
  }
</script>
