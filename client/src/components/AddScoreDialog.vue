<template>
  <div
    class="modal-div"
  >
    <form>
      <div class="form-contents">
        <h4>Add Your Scores</h4>
        <label>Name</label>
        <input v-model="name" placeholder="Your Name" /><br/>
        <label>Hole 1</label>
        <input v-model.number="holeOne" placeholder="integers only" /><br/>
        <label>Hole 2</label>
        <input v-model.number="holeTwo" placeholder="integers only" /><br/>
        <label>Hole 3</label>
        <input v-model.number="holeThree" placeholder="integers only" /><br/>
        <label>Hole 4</label>
        <input v-model.number="holeFour" placeholder="integers only" /><br/>
        <label>Hole 5</label>
        <input v-model.number="holeFive" placeholder="integers only" /><br/>
        <label>Hole 6</label>
        <input v-model.number="holeSix" placeholder="integers only" /><br/>
        <label>Hole 7</label>
        <input v-model.number="holeSeven" placeholder="integers only" /><br/>
        <label>Hole 8</label>
        <input v-model.number="holeEight" placeholder="integers only" /><br/>
        <label>Hole 9</label>
        <input v-model.number="holeNine" placeholder="integers only" /><br/>
        <label>Hole 10</label>
        <input v-model.number="holeTen" placeholder="integers only" /><br/>
        <label>Hole 11</label>
        <input v-model.number="holeEleven" placeholder="integers only" /><br/>
        <label>Hole 12</label>
        <input v-model.number="holeTwelve" placeholder="integers only" /><br/>
        <label>Hole 13</label>
        <input v-model.number="holeThirteen" placeholder="integers only" /><br/>
        <label>Hole 14</label>
        <input v-model.number="holeFourteen" placeholder="integers only" /><br/>
        <label>Hole 15</label>
        <input v-model.number="holeFifteen" placeholder="integers only" /><br/>
        <label>Hole 16</label>
        <input v-model.number="holeSixteen" placeholder="integers only" /><br/>
        <label>Hole 17</label>
        <input v-model.number="holeSeventeen" placeholder="integers only" /><br/>
        <label>Hole 18</label>
        <input v-model.number="holeEighteen" placeholder="integers only" /><br/>
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
  <hr/>
</template>

<script>
  import { useModalStore } from '../stores/ModalStore'
  import { useScoreStore } from '../stores/ScoreStore'
  import { mapStores } from 'pinia'

  export default {
    name: 'ASForm',
    props: [
      'course'
    ],
    data() {
      return {
        disabled: true,
        name: '',
        holeOne: null,
        holeTwo: null,
        holeThree: null,
        holeFour: null,
        holeFive: null,
        holeSix: null,
        holeSeven: null,
        holeEight: null,
        holeNine: null,
        holeTen: null,
        holeEleven: null,
        holeTwelve: null,
        holeThirteen: null,
        holeFourteen: null,
        holeFifteen: null,
        holeSixteen: null,
        holeSeventeen: null,
        holeEighteen: null,
      }
    },
    methods: {
      async handleSubmit(e) {
        e.preventDefault()

        const courseID = this.course.id

        const body = {
          course_id: courseID,
          player: this.name
        }

        const scores = [
          this.holeOne, this.holeTwo, this.holeThree, this.holeFour, this.holeFive,
          this.holeSix, this.holeSeven, this.holeEight, this.holeNine, this.holeTen,
          this.holeEleven, this.holeTwelve, this.holeThirteen, this.holeFourteen,
          this.holeFifteen, this.holeSixteen, this.holeSeventeen, this.holeEighteen
        ]

        const total = scores.reduce((sum, score) => {
          return sum + score
        }, 0)

        body['scores'] = scores
        body['total'] = total

        await this.scoreStore.addScore(body)

        this.modalStore.toggleAddScore()
      },
      cancelForm() {
        this.modalStore.toggleAddScore()
      },
      disableFormSubmit() {
        return (this.name.length < 1
          || this.holeOne < 1 || this.holeTwo < 1
          || this.holeThree < 1 || this.holeFour < 1
          || this.holeFive < 1 || this.holeSix < 1
          || this.holeSeven < 1 || this.holeEight < 1
          || this.holeNine < 1 || this.holeTen < 1
          || this.holeEleven < 1 || this.holeTwelve < 1
          || this.holeThirteen < 1 || this.holeFourteen < 1
          || this.holeFifteen < 1 || this.holeSixteen < 1
          || this.holeSeventeen < 1 || this.holeEighteen < 1)
      }
    },
    computed: {
      ...mapStores(useScoreStore, useModalStore),
    }
  }
</script>

<style scoped>
  .modal-div {
    display: flex;
    flex-direction: column;
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

  .form-contents h4{
    text-align: center;
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
