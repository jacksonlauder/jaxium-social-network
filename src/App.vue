<template>
  <v-app id="app">
    <MainAppBar />
    <v-main>
      <v-container fluid>
      <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
  html, body, .v-application, .v-application--wrap {
    min-height: -webkit-fill-available;
  }
</style>

<script>
import MainAppBar from './components/MainAppBar'

export default {
  name: 'App',
  components: {
    MainAppBar,
  }
}
</script>

