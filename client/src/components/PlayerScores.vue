<template>
  <h4>Player Score {{ course.id }}</h4>

  <div>{{ entry }}</div>

  <div>
    <!-- <div
      v-for="(score, idx) in entry.scores"
      :key="idx"
    >
      <div>Hole {{ idx + 1 }}</div>
      {{ score }}
    </div> -->
  </div>

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
