<template>
  <v-app id="app">
    <MainAppBar />
    <v-main>
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view />
      </transition>
    </v-main>
    <Footer />
  </v-app>
</template>

<style>
  html, body, .v-application, .v-application--wrap {
    /* min-height: -webkit-fill-available !important; */
    background-color: #eceff1;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

<script>
import MainAppBar from './components/MainAppBar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    MainAppBar,
    Footer,
  },

    beforeCreate: function () {
    // Ensure that on app boot, we check if the user is authenticated or not
      this.$store.dispatch('authenticate')
    }
}
</script>

