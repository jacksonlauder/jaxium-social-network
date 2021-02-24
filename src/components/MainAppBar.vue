<template>
    <v-app-bar color="blue-grey lighten-3" app flat absolute tile>
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
      <!-- <v-spacer></v-spacer> -->
        <v-avatar tile>
          <v-img
            alt="Jaxium Logo"
            class="shrink mr-2"
            contain
            src="../assets/jaxium-social-network_200.png"
            max-height="40"
            max-width="40"
          ></v-img>
        </v-avatar>
      <v-toolbar-title>Jaxium</v-toolbar-title>
      <!-- <v-spacer></v-spacer> -->
    </v-app-bar>
    <!-- <v-navigation-drawer v-model="drawer" app></v-navigation-drawer> -->
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>