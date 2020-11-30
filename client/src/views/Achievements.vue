<template>
<form> 
  <br>
  <table class="table is-narrow is-hoverable is-fullwidth">
            <thead><tr>
                <th><strong>User#</strong></th>
                <th><strong>Name</strong></th>
                <th><strong>Email</strong></th>
                <th><strong>Exercise</strong></th>
                <th><strong>Date</strong></th>
                <th><strong>Duration</strong></th>
                <th><strong>Calories Burned</strong></th>
                <th><strong>Member</strong></th>
                <th><strong>Points</strong></th>
                <th><strong>Diet</strong></th>
                <th><strong>Notes</strong></th>

            </tr></thead>
            <tbody>
                <tr v-for=" (x, i) in list " 
                      :key="i"
                      :i="i"
                      :post="x">
                    <th>{{x.id}}</th>
                    <td>{{x.name}}</td>
                    <td>{{x.email}}</td>
                    <td>{{x.exercise}}</td>
                    <td>{{x.date}}</td>
                    <td>{{x.exercise_duration}}</td>
                    <td>{{x.calories_burned}}</td>
                    <td>{{x.member}}</td>
                    <td>{{x.points}}</td>
                    <td>{{x.diet}}</td>
                    <td>{{x.notes}}</td>


                </tr>
            </tbody>
        </table>

<br>
 <div class="achievements">
    <h1><br>BADGES UNLOCKED</h1><br>
  </div>
    <figure>
  <img src=https://pbs.twimg.com/media/DOXMytiVwAAU7AW.jpg width="300" height ="300" class="center">
 
  <img src="https://cdn.dribbble.com/users/2815687/screenshots/5579636/action1.gif" width="300" height="300">
  </figure>
  
</form>
</template>
<script>
import axios from "axios";
export default {
   data() {
    return {
      users: [],
    };
  },
  methods: {
    getUsers() {
      axios
        .get("localhost:3001/users/")
        .then(response => (this.users = response.data))
        .catch(error => console.log(error.message));
  },
  }
}
</script>
<style>
    form{
        margin-top: 30px;
    }
</style>
