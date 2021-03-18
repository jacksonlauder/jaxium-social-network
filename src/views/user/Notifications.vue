<template>
  <v-container fluid>
    <v-btn
      absolute
      fab
      top
      left
      icon
      to="/:username/home"
      color="blue-grey darken-3"
      elevation="3"
    >
      <v-icon large>
        mdi-arrow-left-bold
      </v-icon>
    </v-btn>
    <v-btn
      absolute
      fab
      top
      right
      icon
      to=""
      color="blue-grey darken-3"
      elevation="3"
    >
      <v-icon large>
        mdi-close-circle-outline
      </v-icon>
    </v-btn>
    <v-row class="mt-5">
      <h1 class="mx-auto mb-10">
        Notifications
      </h1>
    </v-row>
    <Notification />
  </v-container>
</template>

<script>
import Notification from '../../components/Notification'

export default {
  name: 'Notifications',
  components: {
    Notification

  }
}
</script>

<style scoped>
  .v-btn--fab.v-size--default.v-btn--absolute.v-btn--top {
    top: 5px !important;
  }
</style>
