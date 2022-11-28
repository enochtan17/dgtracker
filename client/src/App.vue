<template>
  <main>
    <div
      v-if="modalStore.addCourseModal"
    >
      <div
        class="blackout"
        @click="modalStore.addCourseModal = false"
      ></div>
      <AddCourseDialog />
    </div>
    <h1>Disc Golf Score Tracker</h1>

    <!-- Add Course Modal -->
    <button
      @click="toggleAC()"
    >
      Add Course
    </button>

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

<style>
  body {
    margin: 0;
  }
  .blackout {
    margin: 0;
    position: fixed;
    background-color: black;
    height: 100%;
    width: 100%;
    opacity: 0.5;
    z-index: 100;
  }
</style>
