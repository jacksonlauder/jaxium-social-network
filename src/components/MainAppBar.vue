<template>
<div>
  <v-navigation-drawer
    v-model="drawer"
    app
  >
    <!--  -->
  </v-navigation-drawer>

  <v-app-bar app flat absolute>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Jaxium</v-toolbar-title>
  </v-app-bar>
</div>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>