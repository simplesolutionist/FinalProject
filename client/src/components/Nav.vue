<template>
<nav class="navbar container is-fixed-top is-info" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
      <img src="../assets/logo.png" height="28">
    </a>

    <a role="button" class="navbar-burger burger" :class="{ 'is-Active': isActive}" @click="isActive= !isActive" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-Active': isActive}">
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
            Contact
          </a>
          <a class="navbar-item">
            Newsletter
          </a>
          <a class="navbar-item">
            Settings
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
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