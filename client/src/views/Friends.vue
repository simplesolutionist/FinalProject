<template>
  <div class="friends">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Main/>
  </div>
</template>

<script>
// @ is an alias to /src

import Main from '@/components/Main.vue'
export default {
  name: 'friends',
  components: {
    Main
  }
}
</script>
