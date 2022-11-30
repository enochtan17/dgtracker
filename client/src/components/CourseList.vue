<template>
  <!-- course name -->
  <v-alert
    v-if="this.deleteWarning"
    type="warning"
    title="Warning!"
    icon="mdi-alert-octagram"
    color="error"
  >
    <div>You are about to delete {{ this.course.name }}. Are you sure you want to proceed?</div>
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
  <v-container class="d-flex justify-space-between align-center">
    <h2>
      {{ course.name }}
    </h2>
    <div
      class="d-flex flex-column"
    >
      <v-btn
        class="mb-2"
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
  </v-container>

  <v-divider></v-divider>
  <!-- scores -->
  <v-container>
    <v-row>
      <v-col
        v-for="(hole, idx) in course.scores"
        :key="idx"
        class="text-center"
      >
        <div>
          Hole {{ idx + 1 }}
        </div>
        <v-divider></v-divider>
        {{ hole }}
        <!-- <v-divider vertical class="mx-4"></v-divider> -->
      </v-col>
    </v-row>
  </v-container>

  <!-- total -->
  <div style="margin-left: 10px;">
    Par: {{ course.total }}
  </div>

  <v-divider></v-divider>

  <!-- player scores of course -->
  <v-btn
    class="mt-1"
    color="info"
    @click="e => openAddScore(e, this.course.id)"
  >
    Add your score to {{ course.name }} 
    <v-icon icon="mdi:mdi-plus-box-multiple" />
  </v-btn>

  <v-dialog
    v-model="modalStore.addScoreModal"
  >
    <AddScoreDialog :course="course" />
  </v-dialog>

  <v-container
    v-for="entry in this.scoreStore.scores[this.course.name]"
  >
    <PlayerScores :course="course" :entry="entry" />
  </v-container>
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
    data () {
      return {
        deleteWarning: false,
      }
    },
    components: {
      PlayerScores,
      AddScoreDialog
    },
    methods: {
      async handleEdit(e, courseID) {
        e.preventDefault()

        this.modalStore.$patch({
          courseIDToEdit: courseID
        })
        this.modalStore.toggleEditCourse()
      },
      handleDelete(e) {
        e.preventDefault()
        this.deleteWarning = true
      },
      openAddScore(e, courseID) {
        e.preventDefault()
        this.modalStore.$patch({
          courseIDToEdit: courseID
        })
        this.modalStore.toggleAddScore()
      },
      alertCancel(e) {
        e.preventDefault()
        this.deleteWarning = false
      },
      async alertDelete(e) {
        e.preventDefault()

        const hasScores = this.scoreStore.scores[this.course.name].length

        if (hasScores) alert('Cannot delete course with existing scores!')
        else await this.courseStore.deleteCourse(this.course.id)
        this.deleteWarning = false
      }
    },
    computed: {
      ...mapStores(useCourseStore, useScoreStore, useModalStore),
    },
    async created() {
      await this.scoreStore.getScores(this.course.id)
    }
  }
</script>
