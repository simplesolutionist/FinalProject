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
 <figure>
   <img src="https://i.pinimg.com/originals/fb/03/e7/fb03e78deea259c7e1ab712493e269c6.gif" width="870" height="870">
   </figure>
</div>
<br>
 
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
