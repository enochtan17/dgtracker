<template>
  <div>{{ name }}</div>
  <div
    class="modal-div"
  >
    <form class="course-form">
      <div class="form-contents">
        <h2>Add Course</h2>

        <label>Course Name</label>
        <input v-model="name" placeholder="Add Name" /><br/>
        <label>Hole 1</label>
        <input v-model="holeOne" placeholder="" /><br/>
        <label>Hole 2</label>
        <input v-model="holeTwo" placeholder="" /><br/>
        <label>Hole 3</label>
        <input v-model="holeThree" placeholder="" /><br/>
        <label>Hole 4</label>
        <input v-model="holeFour" placeholder="" /><br/>
        <label>Hole 5</label>
        <input v-model="holeFive" placeholder="" /><br/>
        <label>Hole 6</label>
        <input v-model="holeSix" placeholder="" /><br/>
        <label>Hole 7</label>
        <input v-model="holeSeven" placeholder="" /><br/>
        <label>Hole 8</label>
        <input v-model="holeEight" placeholder="" /><br/>
        <label>Hole 9</label>
        <input v-model="holeNine" placeholder="" /><br/>
        <label>Hole 10</label>
        <input v-model="holeTen" placeholder="" /><br/>
        <label>Hole 11</label>
        <input v-model="holeEleven" placeholder="" /><br/>
        <label>Hole 12</label>
        <input v-model="holeTwelve" placeholder="" /><br/>
        <label>Hole 13</label>
        <input v-model="holeThirteen" placeholder="" /><br/>
        <label>Hole 14</label>
        <input v-model="holeFourteen" placeholder="" /><br/>
        <label>Hole 15</label>
        <input v-model="holeFifteen" placeholder="" /><br/>
        <label>Hole 16</label>
        <input v-model="holeSixteen" placeholder="" /><br/>
        <label>Hole 17</label>
        <input v-model="holeSeventeen" placeholder="" /><br/>
        <label>Hole 18</label>
        <input v-model="holeEighteen" placeholder="" /><br/>
      </div>
    </form>
  </div>
</template>

<script>
  import { useModalStore } from '../stores/ModalStore'
  import { mapStores } from 'pinia'

  export default {
    name: 'ACForm',
    data() {
      return {
        name: '',
      }
    },
    methods: {

    },
    computed: {
      ...mapStores(useModalStore),
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
    position: relative;
    width: 400px;
    background-color: rgb(69, 69, 69);
    z-index: 100;
    align-self: center;
    overflow: scroll;
  }

  .form-contents {
    margin: 5px;
    padding: 15px;
  }

  .form-contents input {
    padding: 5px;
    margin-bottom: 5px;
    background-color: whitesmoke;
    border-radius: 10px;
    border: 1px solid black;
  }

  .form-contents label {
    margin: 5px;
  }
</style>
