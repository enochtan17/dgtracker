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
        label="Your Name"
        required
      ></v-text-field>
      <v-container class="text-center mt-0 pt-0">Enter Scores Below</v-container>
      <v-container
        class="d-flex pa-0"
      >
        <v-text-field
          v-model="holeOne"
          class="mr-4"
          :rules="[v => !!v || 'Required']"
          label="Hole 1"
          required  
        ></v-text-field>
        <v-text-field
          v-model="holeTwo"
          class="mr-4"
          :rules="[v => !!v || 'Required']"
          label="Hole 2"
          required  
        ></v-text-field>
        <v-text-field
          v-model="holeThree"
          :rules="[v => !!v || 'Required']"
          label="Hole 3"
          required  
        ></v-text-field>
      </v-container>
      <v-container
        class="d-flex pa-0"
      >
        <v-text-field
          v-model="holeFour"
          class="mr-4"
          :rules="[v => !!v || 'Required']"
          label="Hole 4"
          required  
        ></v-text-field>
        <v-text-field
          v-model="holeFive"
          class="mr-4"
          :rules="[v => !!v || 'Required']"
          label="Hole 5"
          required  
        ></v-text-field>
        <v-text-field
          v-model="holeSix"
          :rules="[v => !!v || 'Required']"
          label="Hole 6"
          required  
        ></v-text-field>
      </v-container>
      <v-container
        class="d-flex pa-0"
      >
        <v-text-field
          v-model="holeSeven"
          class="mr-4"
          :rules="[v => !!v || 'Required']"
          label="Hole 7"
          required  
        ></v-text-field>
        <v-text-field
          v-model="holeEight"
          class="mr-4"
          :rules="[v => !!v || 'Required']"
          label="Hole 8"
          required  
        ></v-text-field>
        <v-text-field
          v-model="holeNine"
          :rules="[v => !!v || 'Required']"
          label="Hole 9"
          required  
        ></v-text-field>
      </v-container>
      <v-container
        class="d-flex pa-0"
      >
        <v-text-field
          v-model="holeTen"
          class="mr-4"
          :rules="[v => !!v || 'Required']"
          label="Hole 10"
          required  
        ></v-text-field>
        <v-text-field
          v-model="holeEleven"
          class="mr-4"
          :rules="[v => !!v || 'Required']"
          label="Hole 11"
          required  
        ></v-text-field>
        <v-text-field
          v-model="holeTwelve"
          :rules="[v => !!v || 'Required']"
          label="Hole 12"
          required  
        ></v-text-field>
      </v-container>
      <v-container
        class="d-flex pa-0"
      >
        <v-text-field
          v-model="holeThirteen"
          class="mr-4"
          :rules="[v => !!v || 'Required']"
          label="Hole 13"
          required  
        ></v-text-field>
        <v-text-field
          v-model="holeFourteen"
          class="mr-4"
          :rules="[v => !!v || 'Required']"
          label="Hole 14"
          required  
        ></v-text-field>
        <v-text-field
          v-model="holeFifteen"
          :rules="[v => !!v || 'Required']"
          label="Hole 15"
          required  
        ></v-text-field>
      </v-container>
      <v-container
        class="d-flex pa-0"
      >
        <v-text-field
          v-model="holeSixteen"
          class="mr-4"
          :rules="[v => !!v || 'Required']"
          label="Hole 16"
          required  
        ></v-text-field>
        <v-text-field
          v-model="holeSeventeen"
          class="mr-4"
          :rules="[v => !!v || 'Required']"
          label="Hole 17"
          required  
        ></v-text-field>
        <v-text-field
          v-model="holeEighteen"
          :rules="[v => !!v || 'Required']"
          label="Hole 18"
          required  
        ></v-text-field>
      </v-container>
      <v-container
        class="d-flex pa-0 justify-space-around"
      >
        <v-btn
          class="mr-4"
          color="black"
          @click="cancelForm"
        >
          Cancel
        </v-btn>

        <v-btn
          color="error"
          class="mr-4"
          @click="reset"
        >
          Reset Form
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
  import { useScoreStore } from '../stores/ScoreStore'
  import { mapStores } from 'pinia'

  export default {
    name: 'ASForm',
    props: [
      'course'
    ],
    data() {
      return {
        valid: false,
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

        if (!this.valid) this.$refs.form.validate()
        else {
          const courseID = this.modalStore.courseIDToEdit

          const body = {
            course_id: courseID,
            player: this.name
          }

          const scores = [
            parseInt(this.holeOne), parseInt(this.holeTwo), parseInt(this.holeThree), parseInt(this.holeFour), parseInt(this.holeFive),
            parseInt(this.holeSix), parseInt(this.holeSeven), parseInt(this.holeEight), parseInt(this.holeNine), parseInt(this.holeTen),
            parseInt(this.holeEleven), parseInt(this.holeTwelve), parseInt(this.holeThirteen), parseInt(this.holeFourteen),
            parseInt(this.holeFifteen), parseInt(this.holeSixteen), parseInt(this.holeSeventeen), parseInt(this.holeEighteen)
          ]

          const total = scores.reduce((sum, score) => {
            return sum + score
          }, 0)

          body['scores'] = scores
          body['total'] = total

          await this.scoreStore.addScore(body)

          this.modalStore.toggleAddScore()
        }

      },
      cancelForm() {
        this.modalStore.toggleAddScore()
      },
      reset() {
        this.$refs.form.reset()
      },
    },
    computed: {
      ...mapStores(useScoreStore, useModalStore),
    },
  }
</script>
