<template>
  <div>
  <h1 class="is-size-1">
    Member Login
  </h1>

  <div class="columns">
    <div class="column is-one-third is-offset-one-third">
      
      <ul class="panel">
        <p class="panel-heading">
          Login
        </p>
        <div class="panel-block">

          <div class="field" :class="{ 'is-danger': error }">
            <div class="field has-addons">
              <div class="control has-icons-left has-icons-right">
                <input v-model="email" class="input" type="text" placeholder="Email">
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                  </span>
                  </div>
                  <div class="control">
                    <button class="button is-info" @click.prevent="login">
                    Login
                    </button>
                    <button class="button is-warning" @click.prevent="googleLogin">
            Google Login
            </button>
                </div>
              </div>
              <p class="help is-danger">{{error}} </p>
              <p>Don't have an account? 
                <router-link to="/signup"> Sign up here </router-link>
              </p>
          </div>
        </div>
      </ul>
    </div>
  </div>
  <center><img src="https://cdn.dribbble.com/users/1326405/screenshots/3718427/8-2.gif" height="450" width="450"></center>
  </div>
</template>

<script>
import users from "../models/users";
import { login } from "@/models/users";
let auth2 = null;

export default {
  data: ()=>({
    email: "",
    error: ""
  }),
  methods: {
    login(){
      users.login(this.email)
          .catch(err => {
            console.error(err)
            this.error = err.message;
          });
    },
    async googleLogin(){
            const googleUser = await auth2.signIn();
            console.log(googleUser);
            const profile = googleUser.getBasicProfile();
            console.log(profile);
                    session.user = {
                        name: profile.getName(),
                        handle: profile.getEmail(),
                        profile: profile.getImageUrl()
                    }
                    session.addNotification('Yay! You logged in', 'success')
                    this.$router.push('Home')
        }
  }
}
//////////////////////////////////
//  Load Google Scripts
        const googleScriptTag = document.createElement('script')
        googleScriptTag.setAttribute('src', 'https://apis.google.com/js/api:client.js')
        document.head.appendChild(googleScriptTag)
        googleScriptTag.onload = () => {
            // the global gapi variable is created by loading that script
            gapi.load('auth2', () => {
                auth2 = gapi.auth2.init({
                    client_id: "875221985757-bddnup196819eav2oj4jnuapi4c0jaq8.apps.googleusercontent.com",
                    cookiepolicy: 'single_host_origin',
                    scope: 'profile email'
                })
            })
        }

</script>

<style  lang="scss">
.fas.fa-exclamation-triangle {
    display: none;
  }
  .is-danger {
    .fa-exclamation-triangle {
      display: inline;
      color: rgb(255, 230, 0);
    }
    .input {
      border-color: rgb(255, 230, 0);
    }
  }
</style>