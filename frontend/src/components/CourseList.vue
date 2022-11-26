<!-- eslint-disable -->

<template>
  <div
    v-for="course in this.courseStore.courses"
    :key="`${course.id}`"
  >
    <!-- {{ course.name }} -->
  </div>

</template>

<script>
import { useCourseStore } from './stores/courseStore'
import { mapStores } from 'pinia'

export default {
  computed: {
    ...mapStores(useCourseStore)
  },
}
</script>
