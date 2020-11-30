<template>
  <div class="friends">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Friends/>
  </div>
</template>

<script>
// @ is an alias to /src

import Friends from '@/components/Friends.vue'
export default {
  name: 'friends',
  components: {
    Friends
  }
}
</script>
