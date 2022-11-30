<template>
  <v-alert
    v-if="this.deleteWarning"
    type="warning"
    title="Warning!"
    icon="mdi-alert-octagram"
    color="error"
  >
    <div>You are about to delete {{ this.entry.player }}'s scores. Are you sure you want to proceed?</div>
    <div class="d-flex justify-end">
      <v-btn
        style="color: black;"
        class="mr-5"
        @click="e => alertCancel(e)"
        >
        Cancel
      </v-btn>
      <v-btn
        style="color: black;"
        @click="e => alertDelete(e)"
      >
        Confirm Delete
      </v-btn>
    </div>
  </v-alert>
  <v-container class="pa-0">
    <v-card
      class="pa-2 d-flex justify-space-between align-center"
      style="background-color: rgb(230, 230, 230);"
    >
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
  <v-divider></v-divider>
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
    data () {
      return {
        deleteWarning: false,
      }
    },
    methods: {
      async getAllScoresofOneCourse(courseID) {
        await this.scoreStore.getScores(courseID)
      },
      handleDelete(e) {
        e.preventDefault()

        this.deleteWarning = true
      },
      alertCancel(e) {
        e.preventDefault()
        this.deleteWarning = false
      },
      async alertDelete(e) {
        e.preventDefault()

        const playerID = this.entry.id
        const courseID = this.course.id

        await this.scoreStore.deleteScore(playerID, courseID)
      }
    },
    computed: {
      ...mapStores(useScoreStore),
    },
  }
</script>
