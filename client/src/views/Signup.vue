<template>
<form>
<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input">
  </div>
</div>

<div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" value="">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email input" value="">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
</div>

<div class="field">
    <label class="label">Password</label>
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
<button class="button is-success" @click.prevent="signup">
            Signup
            </button>  </div>
   <div class="control">
    <router-link to="/login"  class="button is-link ">Already have an account?</router-link>
  </div>
</div>
</form>
</template>

<script>
import session from "@/models/session";
import { signup } from "@/models/users";

export default {
   data: ()=>({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    error: ""
  }),
    methods: {
        signup(){
            session.user = {
                name: 'User 5',
            }
            session.addNotification('Yay! You signed in', 'success')
            this.$router.push('Home')
        }
    }
}
</script>

<style>
    form{
        margin-top: 30px;
    }
</style>