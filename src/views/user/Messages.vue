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
        mdi-square-edit-outline
      </v-icon>
    </v-btn>
    <v-row class="mt-5">
      <h1 class="mx-auto mb-10">
        Messages
      </h1>
    </v-row>
    <Message />
  </v-container>
</template>

<script>
import Message from '../../components/Message'

  export default {
    name: 'Messages',
    components: {
      Message,
    }
  }
</script>

<style scoped>
  .v-btn--fab.v-size--default.v-btn--absolute.v-btn--top {
    top: 5px !important;
  }
</style>

