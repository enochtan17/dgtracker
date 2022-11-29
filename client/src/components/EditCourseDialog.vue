<template>
  <div
    class="modal-div"
  >
    <form>
      <div class="form-contents">
        <label>Edit Course Name</label>
        <input v-model="name" placeholder="Edit Course Name" /><br/>
      </div>
      <div class="buttons">
        <p
          class="cancel"
          @click="cancelForm()"
        >
          Cancel
        </p>
        <button
          class="submit"
          @click="e => handleSubmit(e)"
          :disabled="disableFormSubmit()"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  import { useModalStore } from '../stores/ModalStore'
  import { useCourseStore } from '../stores/CourseStore'
  import { mapStores } from 'pinia'

  export default {
    name: 'ECForm',
    props: [
      'course'
    ],
    data() {
      return {
        disabled: true,
        name: this.course.name
      }
    },
    methods: {
      async handleSubmit(e) {
        e.preventDefault()

        const id = this.course.id
        const body = {
          name: this.name
        }

        await this.courseStore.editCourse(id, body)
        this.modalStore.toggleEditCourse()
      },
      cancelForm() {
        this.modalStore.toggleEditCourse()
      },
      disableFormSubmit() {
        return (this.name.length < 1)
      }
    },
    computed: {
      ...mapStores(useCourseStore, useModalStore)
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
