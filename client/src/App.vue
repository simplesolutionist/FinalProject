<template>
  <section class="section">
    <div class="container">
      <Nav />
      <router-view/>
      <div :style="{'background-image': 'url(https://cdn.dribbble.com/users/230290/screenshots/4035613/exe.jpg)'}"></div>

    </div>
  </section>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  components: {
    Nav
  }
}
</script>

<style lang="scss">

</style>
