<template>
  <v-app id="app">
    <MainAppBar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<style>
  html, body, .v-application, .v-application--wrap {
    /* min-height: -webkit-fill-available !important; */
    background-color: #eceff1;
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
  }
}
</script>

