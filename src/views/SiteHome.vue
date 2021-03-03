<template>
  <v-container fluid class="background-blue-grey">
    <v-card
      max-width="800"
      class="mx-auto mt-5 pa-2"
    >
      <v-card-title class="justify-center pb-3">
        <h2>Welcome to Jaxium!</h2>
      </v-card-title>
      <v-divider />
      <v-card-text>Lorem ipsum dolor sit amet.</v-card-text>
      <v-card-actions class="pt-4">
        <v-btn
          rounded
          depressed
          large
          color="primary"
          to="/register"
        >
          Register
        </v-btn>
        <v-spacer />
        <v-btn
          rounded
          depressed
          large
          color="success"
          to="/login"
        >
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: 'SiteHome',
}
</script>
