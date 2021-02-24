<template>
  <v-card width="700" class="mx-auto mt-5 pa-2" flat>
    <v-card-title class="justify-center pb-3">
      <h1>Welcome to Pub Quiz!</h1>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>With the Coronavirus going on, meeting up at the pub might be a little difficult.
      Continue the fun with this virtual pub quiz! Invite your friends and family for trivia fun.
      <br>Playing is really simple. One person hosts the game and judges questions,
        the rest join the game by entering a code and answering questions.
      <br>To play, a user must have registered for an account. You can click Register or Login to get started.</v-card-text>
    <v-card-actions class="pt-4">
      <v-btn rounded depressed large color="primary" to="/register">Register</v-btn>
      <v-spacer></v-spacer>
      <v-btn rounded depressed large color="success" to="/login">Login</v-btn>
      <!-- <v-spacer></v-spacer>
      <v-btn rounded depressed large color="success" to="/hostoruser">Play</v-btn> -->
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: 'Home'
}
</script>
