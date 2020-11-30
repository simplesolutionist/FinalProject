<template>
    <div class="list">
    <button @click="addNote()" class="btn btn-info">+ Add Exercise to Log</button>
<br><br>
        <h3>Exercise Log</h3>
        <ul class="list-group">
            <li class="list-group-item"
                v-for="(note, index) in notes"
                :key="note.index"
                :class="{ 'active': index === activeNote}"
                @click="changeNote(index)"
                >
                <div>{{ note.title }}</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "ExerciseLog",
  props: ["notes", "activeNote"],
  methods: {
    changeNote(index) {
      this.$emit("app-changeNote", index);
    },
    addNote() {
      this.$emit("app-addNote");
    },
  }
};
</script>
 
<style>
.list {
  margin: 20px;
}
</style>