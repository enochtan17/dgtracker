<template>
  <v-app>
    <v-dialog
      v-model="modalStore.addCourseModal"
      max-width="500px"
    >
      <AddCourseDialog />
    </v-dialog>

    <!-- Add Course Modal -->
    <v-container class="d-flex justify-space-between align-center">
      <h1 style="margin-left: 10px;">
        Disc Golf Score Tracker
      </h1>
      <v-btn
        style="cursor: pointer; margin-left: 10px;"
        @click="toggleAC()"
        color="green"
      >
        Add Course
        <v-icon icon="mdi:mdi-plus" />
      </v-btn>
    </v-container>

    <v-container
      class="ma-0"
      v-for="course in courseStore.courses"
      :key="course.id"
    >
      <hr/>
      <v-dialog
        v-model="modalStore.editCourseModal"
        max-width="500px"
      >
        <EditCourseDialog :course="course" />
      </v-dialog>
      <CourseList :course="course" />
    </v-container>
  </v-app>
</template>

<script>
  import CourseList from './components/CourseList.vue'
  import AddCourseDialog from './components/AddCourseDialog.vue'
  import EditCourseDialog from './components/EditCourseDialog.vue'
  import { useCourseStore } from './stores/CourseStore'
  import { useModalStore } from './stores/ModalStore'
  import { mapStores, mapWritableState } from 'pinia'

  export default {
    name: 'App',
    components: {
      CourseList,
      AddCourseDialog,
      EditCourseDialog
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
