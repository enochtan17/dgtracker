<template>
  <!-- course name -->
  <div class="course-bar">
    <h4>
      {{ course.name }}
    </h4>
    <div class="course-buttons">
      <v-btn
        color="warning"
        @click="e => handleEdit(e, this.course.id)"
      >
        Edit
        <v-icon icon="mdi:mdi-pencil" />
      </v-btn>
      <v-btn
        color="error"
        @click="e => handleDelete(e)"
      >
        Delete
        <v-icon icon="mdi:mdi-delete" />
      </v-btn>
    </div>
  </div>

  <hr />
  <!-- scores -->
  <div style="margin-left: 10px;">
    <div
      v-for="(hole, idx) in course.scores"
      :key="idx"
    >
      <div>Hole {{ idx + 1 }}</div>
      {{ hole }}
    </div>
  </div>

  <!-- total -->
  <div style="margin-left: 10px;">
    Total: {{ course.total }}
  </div>

  <hr/>

  <!-- player scores of course -->
  <v-btn
    style="cursor: pointer;"
    @click="e => openAddScore(e)"
  >
    Add your score to {{ course.name }}
  </v-btn>

  <div
    v-if="modalStore.addScoreModal"
  >
    <AddScoreDialog :course="course" />
  </div>

  <div
    style="margin-left: 10px;"
    v-for="entry in this.scoreStore.scores[this.course.name]"
  >
    <PlayerScores :course="course" :entry="entry" />
  </div>
</template>

<script>
  import PlayerScores from './PlayerScores.vue'
  import AddScoreDialog from './AddScoreDialog.vue'
  import { useCourseStore } from '../stores/CourseStore'
  import { useScoreStore } from '../stores/ScoreStore'
  import { useModalStore } from '../stores/ModalStore'
  import { mapStores, mapWritableState } from 'pinia'

  export default {
    name: 'C-List',
    props: [
      'course',
    ],
    components: {
      PlayerScores,
      AddScoreDialog
    },
    methods: {
      async handleEdit(e, courseID) {
        e.preventDefault()

        this.modalStore.setCourseToEdit(courseID)
        this.modalStore.toggleEditCourse()
      },
      async handleDelete(e) {
        e.preventDefault()
        if (confirm('Are you sure you want to delete this course?')) {
          await this.courseStore.deleteCourse(this.course.id)
        }
      },
      openAddScore(e) {
        e.preventDefault()
        this.modalStore.toggleAddScore()
      }
    },
    computed: {
      ...mapStores(useCourseStore, useScoreStore, useModalStore),
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
