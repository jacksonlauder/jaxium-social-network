<template>
  <v-card>
    <v-app-bar app flat absolute tile>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- <v-spacer></v-spacer> -->
        <v-img
          alt="Jaxium Logo"
          class="shrink mr-2"
          contain
          src="../assets/jaxium-social-network_200.png"
          width="40"
        />
      <v-toolbar-title>Jaxium</v-toolbar-title>
      <!-- <v-spacer></v-spacer> -->
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>