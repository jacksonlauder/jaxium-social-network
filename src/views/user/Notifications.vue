<template>
  <v-container fluid>
    <v-btn
      fab
      top
      left
      icon
      to="/:username/home"
      color="blue-grey darken-3"
    >
      <v-icon large>
        mdi-arrow-left-bold
      </v-icon>
    </v-btn>
    <h1>Notifications Route</h1>
  </v-container>
</template>

<style scoped>
.v-btn--fab.v-size--default.v-btn--absolute.v-btn--top {
    top: 30px !important;
}
</style>
