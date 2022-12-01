<template>
  <v-card>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="ma-5"
    >
      <v-text-field
        v-model="name"
        :rules="[v => !!v || 'Name is Required']"
        label="Edit Course Name"
        required
      ></v-text-field>
      <v-container class="d-flex justify-center align-center">
        <v-btn
          class="mr-10"
          color="black"
          @click="cancelForm()"
        >
          Cancel
        </v-btn>
        <v-btn
          color="primary"
          @click="e => handleSubmit(e)"
        >
          Submit
        </v-btn>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
  import { useModalStore } from '../stores/ModalStore'
  import { useCourseStore } from '../stores/CourseStore'
  import { mapStores } from 'pinia'

  export default {
    name: 'ECForm',
    data() {
      return {
        valid: false,
        name: '',
        course: {}
      }
    },
    methods: {
      async handleSubmit(e) {
        e.preventDefault()

        if (!this.valid) this.$refs.form.validate()
        else {
          const id = this.course.id
          const body = {
            name: this.name
          }

          await this.courseStore.editCourse(id, body)

          this.modalStore.toggleEditCourse()
        }
      },
      cancelForm() {
        this.modalStore.toggleEditCourse()
      },
    },
    computed: {
      ...mapStores(useCourseStore, useModalStore)
    },
    async created() {
      const courseID = this.modalStore.courseIDToEdit

      await this.courseStore.getOneCourse(courseID)

      this.course = this.courseStore.courseToEdit.data[0]
      this.name = this.course.name
    }
  }
</script>
