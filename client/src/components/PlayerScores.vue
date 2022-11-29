<template>
  <h4>{{ entry.player }}</h4>

  <div>Scores: {{ entry.scores }}</div>
  <div>Total: {{ entry.total }}</div>
  <button
    style="cursor: pointer;"
    @click="e => handleDelete(e)"
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
      },
      async handleDelete(e) {
        e.preventDefault()

        const playerID = this.entry.id
        const courseID = this.course.id

        if (confirm('Are you sure you want to delete your round?')) {
          await this.scoreStore.deleteScore(playerID, courseID)
        }
      }
    },
    computed: {
      ...mapStores(useScoreStore),
    },
    async created() {
    }
  }
</script>
