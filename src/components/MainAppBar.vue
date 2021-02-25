<template>
<v-card>
  <v-app-bar color="blue-grey lighten-3" app flat absolute tile>
    <router-link style="text-decoration: none; color: black;" to="/">
      <v-toolbar-title>Jaxium</v-toolbar-title>
    </router-link>
  </v-app-bar>
</v-card>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
};
</script>