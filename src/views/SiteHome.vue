<template>
  <v-container fluid>
    <v-card
      max-width="800"
      class="mx-auto mt-5 pa-2"
    >
      <v-img
        src="../assets/AdobeStock_340937686.jpeg"
      />
      <v-card-title class="text-center justify-center pb-3">
        <h2>Welcome to the<br><strong>Jaxium</strong><br>Social Network!</h2>
      </v-card-title>

      <v-card-actions class="d-flex flex-column mt-5">
        <v-btn
          block
          rounded
          depressed
          large
          dark
          color="blue-grey darken-1"
          to="/login"
        >
          <v-icon
            left
          >
            mdi-login
          </v-icon>
          Login
        </v-btn>

        <v-btn
          block
          outlined
          rounded
          depressed
          large
          color="blue-grey darken-2"
          to="/register"
          class="mt-5 mx-0"
        >
          <v-icon
            left
            dark
          >
            mdi-account-plus
          </v-icon>
          Create New Account
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: 'SiteHome'
}
</script>

<style scoped>
  .theme--light.v-card {
    background: rgba( 255, 255, 255, 0.25 );
  }
  .v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: 0 8px 32px 0 #546e7a8f;
  }
  .v-sheet.v-card {
    border-radius: 10px;
  }
  .v-card > *:first-child:not(.v-btn):not(.v-chip), .v-card > .v-card__progress + *:not(.v-btn):not(.v-chip) {
    border-radius: 10px;
  }
</style>
