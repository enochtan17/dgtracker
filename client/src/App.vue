<template>
  <main>
    <h1>Disc Golf Score Tracker</h1>

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
  import { useCourseStore } from './stores/CourseStore'
  import { mapStores, mapWritableState } from 'pinia'

  export default {
    name: 'App',
    components: {
      CourseList
    },
    methods: {
    },
    computed: {
      ...mapStores(useCourseStore),
    },
    async created() {
      await this.courseStore.getCourses()
    }
  }
</script>
