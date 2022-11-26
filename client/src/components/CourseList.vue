<template>
  <!-- course name -->
  <h4>
    {{ course.name }}
  </h4>

  <!-- scores -->
  <div class="dflex">
    <div
      v-for="(hole, idx) in course.scores"
      :key="idx"
    >
      <div>Hole {{ idx + 1 }}</div>
      {{ hole }}
    </div>
  </div>

  <hr/>
  <!-- total -->
  <div>{{ course.total }}</div>

  <hr/>

  <!-- player scores of course -->
  <div
    v-for="entry in this.scoreStore.scores[this.course.name]"
  >
    <PlayerScores :course="course" :entry="entry" />
  </div>
</template>

<script>
  import PlayerScores from './PlayerScores.vue'
  import { useCourseStore } from '../stores/CourseStore'
  import { useScoreStore } from '../stores/ScoreStore'
  import { mapStores, mapWritableState } from 'pinia'

  export default {
    name: 'C-List',
    props: [
      'course',
    ],
    components: {
      PlayerScores
    },
    methods: {
    },
    computed: {
      ...mapStores(useCourseStore, useScoreStore),
    },
    async created() {
      await this.scoreStore.getScores(this.course.id)
      console.log('c-list', this.scoreStore.scores)

      console.log('name?', this.course.name)
      const rawData = this.scoreStore.scores[this.course.name]

      const theseScores = Object.values(rawData)
      console.log('testing?', theseScores)
    }
  }
</script>
