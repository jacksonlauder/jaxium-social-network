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
        mdi-arrow-left-circle
      </v-icon>
    </v-btn>
    <v-row>
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

