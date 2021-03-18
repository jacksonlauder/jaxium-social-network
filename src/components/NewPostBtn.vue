<template>
  <v-btn
    style="border-radius: 50%"
    fab
    min-width="56px"
    width="56px"
    min-height="56px"
    height="56px"
    color="amber darken-3"
    dark
    absolute
    top
  >
    <v-icon
      size="35px"
      color="white"
    >
      mdi-plus
    </v-icon>
  </v-btn>
</template>

<style scoped>
  .v-btn--is-elevated.v-btn--fab {
    /* box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%) !important; */
    box-shadow: 0px 0px 0px 7px #eceff1 !important;
  }
  .v-btn--fab.v-size--default.v-btn--absolute.v-btn--top {
    top: -20px !important;
  }
</style>
