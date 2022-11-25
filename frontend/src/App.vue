<!-- eslint-disable -->
<template>
  <h1>
    hello world
  </h1>

  <div>
    <!-- {{ courses }} -->
  </div>

</template>

<script>
import axios from 'axios'
import { api } from './constants'

export default {
  data: () => ({
    courses: []
  }),
  async created() {
    const { data: coursesArray } = await axios.get(`${api}/courses`)
    console.log('course array', coursesArray)
  }
}
</script>

<style scoped>
</style>
