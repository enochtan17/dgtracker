<!-- eslint-disable -->
<template>
  <h1>
    hello world
  </h1>

  <div
    v-for="course in this.courseStore.courses.length"
    :key="`${course.id}`"
  >
    <!-- <course-list></course-list> -->
  </div>

</template>

<script>
import { useCourseStore } from './stores/courseStore'
import { mapStores } from 'pinia'
// import CourseList from './components/CourseList.vue'


export default {
  components: {
    // CourseList
  },
  computed: {
    ...mapStores(useCourseStore)
  },
  async created() {
    await this.courseStore.getCourses()
  }
}
</script>

<style scoped>
</style>
