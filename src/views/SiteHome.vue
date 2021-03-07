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
      <!-- <v-card-text>Lorem ipsum dolor sit amet.</v-card-text> -->
      <v-card-actions class="pt-4">
        <v-btn
          depressed
          large
          color="primary"
          to="/register"
        >
          <v-icon
            left
            dark
          >
            mdi-account-plus
          </v-icon>
          Register
        </v-btn>
        <v-spacer />
        <v-btn
          depressed
          large
          color="success"
          to="/login"
        >
          <v-icon
            left
            dark
          >
            mdi-login
          </v-icon>
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

<style>
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

// background: rgba( 255, 255, 255, 0.25 );
// box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
// backdrop-filter: blur( 4px );
// -webkit-backdrop-filter: blur( 4px );
// border-radius: 10px;
// border: 1px solid rgba( 255, 255, 255, 0.18 );
