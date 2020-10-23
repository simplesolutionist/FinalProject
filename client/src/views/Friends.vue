<template>
<form>
  <div class="page">

<div class="columns">
  <div class="column is-two-thirds">
  <div class="field is-grouped">
  <p class="control is-expanded">
    <input class="input" type="text" placeholder="Look up your friends">
  </p>
  <p class="control">
    <a class="button is-info">
      Search
    </a>
  </p>
</div>
</div>
  <div class="column is-one-third">
<Sidebar />
  </div>
  </div>
    </div>

  </form>

</template>

<script>
    import Sidebar from "@/components/Sidebar";

export default {
  components: {
    Sidebar
  }
}
</script>

<style>
    form{
        margin-top: 30px;
    }
</style>
