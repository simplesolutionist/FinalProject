<template>
  <div id="app">

  <section class="section">
    <div class="container">
      <Nav />

      <router-view/>

    </div>
     
  </section>
</div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  components: {
   Nav,
  }
}
</script>

<style lang="scss">
  @import "./styles/style.scss";

</style>


