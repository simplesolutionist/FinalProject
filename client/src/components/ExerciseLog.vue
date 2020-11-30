<template>
    <div class="list">
    <button @click="addExercise()" class="btn btn-info">+ Add Exercise to Log</button>
<br><br>
        <h3>Exercise Log</h3>
        <ul class="list-group">
            <li class="list-group-item"
                v-for="(exercise, index) in exercises"
                :key="exercise.index"
                :class="{ 'active': index === activeExercise}"
                @click="changeExercise(index)"
                >
                <div>{{ exercise.title }}</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "ExerciseLog",
  props: ["exercises", "activeExercise"],
  methods: {
    changeExercise(index) {
      this.$emit("app-changeExercise", index);
    },
    addExercise() {
      this.$emit("app-addExercise");
    },
  }
};
</script>
 
<style>
.list {
  margin: 20px;
}
</style>