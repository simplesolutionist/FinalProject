<template>
    <div id="app">
        <div style="color: blue;">
           
        </div>
        <div class="row">
            <div>
                <ExerciseLog 
                  @app-addExercise="addExercise"
                  @app-changeExercise="changeExercise"
                  :exercises="exercises"
                  :activeExercise="index" />
            </div>
            <div>
                <Note
                  @app-removeExercise="removeExercise"
                  :exercise="exercises[index]" />
            </div>
        </div>
    </div>
</template>
 
<script>
import ExerciseLog from "@/components/ExerciseLog.vue";
import Note from "@/components/Note.vue";
 
export default {
  name: "app",
  components: {
    ExerciseLog,
    Note
  },
  data: () => ({
    exercises: [],
    index: 0
  }),
  methods: {
    addExercise() {
      this.exercises.push({
        title: "",
        content: ""
      });
      this.index = this.exercises.length - 1;
    },
    changeExercise(index) {
      this.index = index;
    },
    removeExercise() {
      this.exercises.splice(this.index, 1);
      this.index = this.index === 0 ? 0 : this.index - 1;
    }
  }
};
</script>
 
<style>
#app {
  text-align: center;
}
</style>
