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
        label="Course Name"
        required
      ></v-text-field>
      <v-container class="text-center mt-0 pt-0">Enter Pars Below</v-container>
      <v-container
        class="d-flex pa-0"
      >
        <v-select
          v-model="holeOne"
          class="mr-4"
          :items="items"
          :rules="[v => !!v || 'Required']"
          label="Hole 1"
          required  
        ></v-select>
        <v-select
          v-model="holeTwo"
          class="mr-4"
          :items="items"
          :rules="[v => !!v || 'Required']"
          label="Hole 2"
          required  
        ></v-select>
        <v-select
          v-model="holeThree"
          :items="items"
          :rules="[v => !!v || 'Required']"
          label="Hole 3"
          required  
        ></v-select>
      </v-container>
      <v-container
        class="d-flex pa-0"
      >
        <v-select
          v-model="holeFour"
          class="mr-4"
          :items="items"
          :rules="[v => !!v || 'Required']"
          label="Hole 4"
          required  
        ></v-select>
        <v-select
          v-model="holeFive"
          class="mr-4"
          :items="items"
          :rules="[v => !!v || 'Required']"
          label="Hole 5"
          required  
        ></v-select>
        <v-select
          v-model="holeSix"
          :items="items"
          :rules="[v => !!v || 'Required']"
          label="Hole 6"
          required  
        ></v-select>
      </v-container>
      <v-container
        class="d-flex pa-0"
      >
        <v-select
          v-model="holeSeven"
          class="mr-4"
          :items="items"
          :rules="[v => !!v || 'Required']"
          label="Hole 7"
          required  
        ></v-select>
        <v-select
          v-model="holeEight"
          class="mr-4"
          :items="items"
          :rules="[v => !!v || 'Required']"
          label="Hole 8"
          required  
        ></v-select>
        <v-select
          v-model="holeNine"
          :items="items"
          :rules="[v => !!v || 'Required']"
          label="Hole 9"
          required  
        ></v-select>
      </v-container>
      <v-container
        class="d-flex pa-0"
      >
        <v-select
          v-model="holeTen"
          class="mr-4"
          :items="items"
          :rules="[v => !!v || 'Required']"
          label="Hole 10"
          required  
        ></v-select>
        <v-select
          v-model="holeEleven"
          class="mr-4"
          :items="items"
          :rules="[v => !!v || 'Required']"
          label="Hole 11"
          required  
        ></v-select>
        <v-select
          v-model="holeTwelve"
          :items="items"
          :rules="[v => !!v || 'Required']"
          label="Hole 12"
          required  
        ></v-select>
      </v-container>
      <v-container
        class="d-flex pa-0"
      >
        <v-select
          v-model="holeThirteen"
          class="mr-4"
          :items="items"
          :rules="[v => !!v || 'Required']"
          label="Hole 13"
          required  
        ></v-select>
        <v-select
          v-model="holeFourteen"
          class="mr-4"
          :items="items"
          :rules="[v => !!v || 'Required']"
          label="Hole 14"
          required  
        ></v-select>
        <v-select
          v-model="holeFifteen"
          :items="items"
          :rules="[v => !!v || 'Required']"
          label="Hole 15"
          required  
        ></v-select>
      </v-container>
      <v-container
        class="d-flex pa-0"
      >
        <v-select
          v-model="holeSixteen"
          class="mr-4"
          :items="items"
          :rules="[v => !!v || 'Required']"
          label="Hole 16"
          required  
        ></v-select>
        <v-select
          v-model="holeSeventeen"
          class="mr-4"
          :items="items"
          :rules="[v => !!v || 'Required']"
          label="Hole 17"
          required  
        ></v-select>
        <v-select
          v-model="holeEighteen"
          :items="items"
          :rules="[v => !!v || 'Required']"
          label="Hole 18"
          required  
        ></v-select>
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
  import { useCourseStore } from '../stores/CourseStore'
  import { mapStores } from 'pinia'

  export default {
    name: 'ACForm',
    data() {
      return {
        valid: false,
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
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
          const body = {
            name: this.name,
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
          
          await this.courseStore.addCourse(body)
          
          this.modalStore.toggleAddCourse()
        }
      },
      cancelForm() {
        this.modalStore.toggleAddCourse()
      },
      reset() {
        this.$refs.form.reset()
      }
    },
    computed: {
      ...mapStores(useModalStore, useCourseStore),
    }
  }
</script>
