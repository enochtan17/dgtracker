<template>
  <!-- course name -->
  <div class="course-bar">
    <h4>
      {{ course.name }}
    </h4>
    <div class="course-buttons">
      <button>Edit</button>
      <button>Delete</button>
    </div>
  </div>

  <hr />
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

      // const rawData = this.scoreStore.scores[this.course.name]

      // const theseScores = Object.values(rawData)
      // console.log('testing?', theseScores)
    }
  }
</script>

<style scoped>
  .course-bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .course-buttons {
    display: flex;
    flex-direction: column;
  }

  .course-buttons button {
    margin: 5px;
    cursor: pointer;
  }
</style>
