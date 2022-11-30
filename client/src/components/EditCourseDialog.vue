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
        :rules="[v = !!v || 'Name is Required']"
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
    </v-form
    
    >
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

<style scoped>
  .modal-div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .course-form {
    color: whitesmoke;
    height: 350px;
    margin: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    width: 400px;
    background-color: rgb(69, 69, 69);
    z-index: 100;
    align-self: center;
    overflow: scroll;
  }

  .form-contents input {
    padding: 5px;
    margin-bottom: 5px;
    background-color: whitesmoke;
    border-radius: 10px;
    border: 1px solid black;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .form-contents label {
    margin: 5px;
  }

  .cancel {
    border: 1px solid black;
    border-radius: 5px;
    width: 100px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
  }

  .submit {
    cursor: pointer;
    margin-bottom: 10px;
    width: 100px;
  }
</style>
