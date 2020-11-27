<template>
    <div id="app">
        <div style="color: blue;">
           
        </div>
        <div class="row">
            <div>
                <ExerciseLog 
                  @app-addNote="addNote"
                  @app-changeNote="changeNote"
                  :notes="notes"
                  :activeNote="index" />
            </div>
            <div>
                <Note
                  @app-removeNote="removeNote"
                  :note="notes[index]" />
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
    notes: [],
    index: 0
  }),
  methods: {
    addNote() {
      this.notes.push({
        title: "",
        content: ""
      });
      this.index = this.notes.length - 1;
    },
    changeNote(index) {
      this.index = index;
    },
    removeNote() {
      this.notes.splice(this.index, 1);
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
