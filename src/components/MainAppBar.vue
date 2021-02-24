<template>
  <v-app-bar color="blue-grey lighten-3" app flat absolute tile>
    <v-img
      class="mx-2"
      src="../assets/jaxium-social-network_200.png"
      max-height="40"
      max-width="40"
      contain
    ></v-img>
    <v-toolbar-title>Jaxium</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
};
</script>