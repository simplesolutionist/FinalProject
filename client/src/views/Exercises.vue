<template>
<form>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="300px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Exercise Selector
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Select Exercises for Today</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-radio-group
            v-model="dialogm1"
            column
          >
            <v-radio
              label="Lunges"
              value="lunges"
            ></v-radio>
            <v-radio
              label="Pushups"
              value="pushups"
            ></v-radio>
            <v-radio
              label="Squats"
              value="squats"
            ></v-radio>
            <v-radio
              label="Standing overhead dumbbell presses"
              value="standing-overhead-dumbbell-presses"
            ></v-radio>
            <v-radio
              label="Dumbbell rows"
              value="dumbell-rows"
            ></v-radio>
            <v-radio
              label="Single-leg deadlifts"
              value="single-leg-deadlifts"
            ></v-radio>
            <v-radio
              label="Burpees"
              value="burpees"
            ></v-radio>
            <v-radio
              label="Side planks"
              value="side-planks"
            ></v-radio>
            <v-radio
              label="Planks"
              value="planks"
            ></v-radio>
            <v-radio
              label="Glute bridge"
              value="glute-bridge"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</form>
</template>

<script>
  export default {
    data () {
      return {
        dialogm1: '',
        dialog: false,
      }
    },
  }
</script>

<style>
    form{
        margin-top: 30px;
    }
</style>