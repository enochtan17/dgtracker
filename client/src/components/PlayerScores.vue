<template>
  <v-container class="pa-0">
    <v-card class="pa-2 d-flex justify-space-between align-center">
      <div>
        <h4>{{ entry.player }}</h4>

        <div>Scores: {{ entry.scores }}</div>
        <div>Total: {{ entry.total }}</div>
      </div>
      <v-btn
        color="error"
        @click="e => handleDelete(e)"
      >
        Delete Entry
        <v-icon icon="mdi:mdi-delete" />
      </v-btn>
    </v-card>
  </v-container>
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
