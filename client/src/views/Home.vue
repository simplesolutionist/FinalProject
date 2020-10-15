<template>
<form>
  <div id="app">
  <v-app id="inspire">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card height="100%">
          <v-card-media
            class="white--text"
            height="400px"
            src="https://vuetifyjs.com/static/doc-images/cards/docks.jpg"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">Exercise Tracker</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-title>
            <div>
              <span class="grey--text">Gravity Gym</span><br>
              <span>Highest-rated app for improved fitness results</span><br>
              <span>Workout with friends and family making this a fun experience</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Get Started</v-btn>
            <v-btn flat color="orange">Learn More</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</div>
</form>
</template>
   
<style>
    form{
        margin-top: 30px;
    }
</style>