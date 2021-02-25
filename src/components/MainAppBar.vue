<template>
  <v-card>
    <v-app-bar color="blue-grey lighten-3" app flat absolute tile>   
      <router-link style="text-decoration: none; color: black;" to="/">
        <v-toolbar-title>Jaxium</v-toolbar-title>
      </router-link>
      <v-img
        alt="Jaxium Logo"
        class="shrink mr-2"
        src="../assets/Jaxium_Logo_Title.png" 
        contain
        height="40"
        ></v-img>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
};
</script>