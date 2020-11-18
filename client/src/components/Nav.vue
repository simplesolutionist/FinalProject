<template>
<nav class="navbar container is-fixed-top is-info" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
      <img src="../assets/logo.png" height="28">
    </a>

    <a role="button" class="navbar-burger burger" :class="{ 'is-active': isActive}" @click='isActive= !isActive' aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isActive}">
    <div class="navbar-start">
      
        <router-link to="/" class="navbar-item">Home</router-link>
      <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/exercises" class="navbar-item">Exercises</router-link>
        <router-link to="/progress" class="navbar-item">Progress</router-link>
      <router-link to="/achievements" class="navbar-item">Achievements</router-link>
            <router-link to="/friends" class="navbar-item">Friends</router-link>




      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          
          <a class="navbar-item">
                 <v-icon
      small
      color="teal darken-2"
    >
      mdi-email
    </v-icon>
            Contact
            
          </a>
       
        <a class="navbar-item">
              <v-icon small>fas fa-edit</v-icon>
  Newsletter
          </a>
          <a class="navbar-item">
              <v-icon small>fas fa-lock</v-icon>
  Settings
          </a>
          <hr class="navbar-divider">
           <a class="navbar-item">
                 <v-icon
      small
      color="teal darken-2"
    >
      mdi-account
    </v-icon>
          Report An Issue
            
          </a>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link">Admin</a>
    
      <div class="navbar-dropdown">
        <router-link to="/users" class="navbar-item">Users</router-link>
      </div>
    </div>
  </div>

    <div class="navbar-end">
      <div class="navbar-item">
          
        <LoginBadge />
      </div>
    </div>
  </div>
</nav>



</template>


<script>
import LoginBadge from "@/components/LoginBadge";
export default {
  data: ()=> ({
    isActive: false
  }),
  methods:{

  },
  components: {
    LoginBadge
  }
}
</script>

<style>

</style>


