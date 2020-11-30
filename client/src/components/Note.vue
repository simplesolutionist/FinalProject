<template>
   <div class="note">
        <div v-if="note">
         <button class="btn btn-danger" @click="removeNote()">Delete Log</button>
            <br><br>
            <h3>Exercise Title</h3>
            <div class="form-group">
                <input class="form-control" type="text" v-model="note.title" placeholder="Title" />
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
    </v-dialog>
  </v-row>
  <div class="field has-addons">
  <div class="control is-expanded">
    <div class="select is-fullwidth">
      <select name="exercise_types">
        <option value="empty"></option>
        <option value="Pushups">Pushups</option>
        <option value="Running">Running</option>
        <option value="Squats">Squats</option>
        <option value="Bicycle_Manoeuvre">Bicycle Manoeuvre</option>
        <option value="Pullups">Pullups</option>
        <option value="Swiss_Ball_Hamstring_Curl">Swiss Ball Hamstring Curl</option>
        <option value="Tricep_Dips">Tricep Dips</option>
        <option value="Lunges">Lunges</option>
        <option value="Side_Bridges">Side Bridges</option>
        <option value="Single_Leg_Squats">Single-Leg Squats</option>
        <option value="Lateral_Shoulder_Raises">Lateral Shoulder Raises</option>
      </select>
    </div>
  </div>
  
</div>
<br>
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
          Exercise Day
        </v-btn>
      </template>
    </v-dialog>
  </v-row>
  <div class="field has-addons">
  <div class="control is-expanded">
    <div class="select is-fullwidth">
      <select name="exercise_types">
        <option value="empty"></option>
        <option value="Sunday">Sunday</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
      </select>
    </div>
  </div>
 
</div>
<br>
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
          Exercise Date
        </v-btn>
      </template>
    </v-dialog>
  </v-row>
<v-row>
    <v-col>
      <v-sheet height="400">
        <v-calendar
          ref="calendar"
          :now="today"
          :value="today"
          :events="events"
          color="primary"
          type="week"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
  <br>
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
          Exercise Location
        </v-btn>
      </template>
    </v-dialog>
  </v-row>
  <div class="field has-addons">
  <div class="control is-expanded">
    <div class="select is-fullwidth">
      <select name="exercise_types">
        <option value="empty"></option>
        <option value="Gym">Gym</option>
        <option value="Park">Park</option>
        <option value="Home">Home</option>
        <option value="Other">Other</option>
      </select>
    </div>
  </div>
  
</div>
  <br>
  <div class="field">
  <label class="label">Exercise Intensity</label>
  <div class="control">
    <input class="input" type="text" placeholder="e.g Moderate Intensity">
  </div>
</div>
<br>
<div class="field">
  <label class="label">Exercise Heartrate</label>
  <div class="control">
    <input class="input" type="email" placeholder="e.g. 190bpm">
  </div>
</div>
<br>
<div class="field">
  <label class="label">Exercise Duration</label>
  <div class="control">
    <input class="input" type="email" placeholder="e.g. 20 minutes">
  </div>
</div>
<br>
<h1><strong>Rate Your Exercise Experience</strong></h1>
<div class="field has-addons ">
  <p class="control">
    <span class="select">
      <select>
        <option></option>
        <option>👍</option>
        <option>❤️</option>
      </select>
    </span>
  </p>
  <p class="control">
    <input class="input" type="text" placeholder="Add a comment">
  </p>
 
</div>
<br>
<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I completed the exercises and gave it my all
    </label>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="radio">
      <input type="radio" name="question">
      Ahead of Schedule
    </label>
    <label class="radio">
      <input type="radio" name="question">
      On Track
    </label>
    <label class="radio">
      <input type="radio" name="question">
      Feeling Behind
    </label>
  </div>
</div>
<br>
<div class="control">
<button class="button is-primary" @click.prevent="signup">
            Submit
            </button>  </div>
</form>
            </div>
              </div>
        
      
        <div v-else>
            <h5>Please create new Exercise Log...</h5>
        </div>
        
    </div> 
</template>
 
<script>
export default {
  name: "Note",
  props: ["note"],
  methods: {
    removeNote() {
      this.$emit("app-removeNote");
    }
  }
};
</script>
 
<style>
.note {
  margin: 20px;
}
</style>