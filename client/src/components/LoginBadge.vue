<template>
    <div id="LoginBadge">

        <div class="media" v-if="session.user">
        <div class="media-left">
        </div>
        <div class="media-content">
            <p class="has-text-weight-bold">{{session.user.name}}</p>
        </div>
        </div>


        <div class="buttons" v-else>
          <router-link to="/signup"  class="button is-light" >
                Sign Up
            </router-link>
            <router-link to="/login"  class="button is-light" >
                Log in
            </router-link>
        </div>
    </div>
</template>

<script>
import session from "@/models/session";
export default {
    data: ()=> ({
        session
    })
}
</script>

<style>
    .media .image img {
        width: auto;
    }
    .media-content {
        line-height: .95rem;
    }
</style>