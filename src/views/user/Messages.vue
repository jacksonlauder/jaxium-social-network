<template>
  <v-container fluid>
    <v-btn
      absolute
      fab
      top
      left
      icon
      elevation="3"
      @click.prevent="toHome"
    >
      <v-icon large color="blue-grey darken-2">
        mdi-arrow-left-bold
      </v-icon>
    </v-btn>
    
    <v-btn
      absolute
      fab
      top
      right
      icon
      elevation="3"
      @click.prevent="toMessageEdit"
    >
      <v-icon large color="blue-grey darken-2">
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
    },
    methods: {
      toHome: function() {
        this.$router.push({ name: 'UserHome', params: { username: this.$store.state.username }})
      },
      toMessageEdit: function() {
        this.$router.push({ name: 'message-edit', params: { username: this.$store.state.username }})
      }
    }
  }
</script>

<style scoped>
  .v-btn--fab.v-size--default.v-btn--absolute.v-btn--top {
    top: 5px !important;
  }
</style>

