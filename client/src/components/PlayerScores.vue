<template>
  <h4>{{ entry.player }}</h4>

  <div>Scores: {{ entry.scores }}</div>
  <div>Total: {{ entry.total }}</div>
  <button

  >Delete Entry</button>
  <hr/>
</template>

<script>
  import { useScoreStore } from '../stores/ScoreStore'
  import { mapStores, mapWritableState } from 'pinia'

  export default {
    name: 'Scores',
    props: [
      'course',
      'entry'
    ],
    methods: {
      async getAllScoresofOneCourse(courseID) {
        await this.scoreStore.getScores(courseID)
      }
    },
    computed: {
      ...mapStores(useScoreStore),
    },
    async created() {
    }
  }
</script>
