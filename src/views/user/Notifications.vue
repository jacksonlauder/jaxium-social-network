<template>
  <v-container fluid>
    <v-btn
      absolute
      fab
      top
      left
      icon
      color="blue-grey darken-2"
      elevation="3"
      @click.prevent="toHome"
    >
      <v-icon large>
        mdi-arrow-left-bold
      </v-icon>
    </v-btn>

    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          absolute
          fab
          top
          right
          icon
          color="blue-grey darken-2"
          elevation="3"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon large>
            mdi-close-circle-outline
          </v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline">
          Clear All Notifications?
        </v-card-title>

        <v-divider />

        <v-card-actions>
          <v-btn
            rounded
            outlined
            depressed
            large
            color="blue-grey darken-2"
            @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-spacer />
          <v-btn
            rounded
            depressed
            large
            color="blue-grey darken-1"
            dark
            @click="dialog = false"
          >
            Clear
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

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
  },
  data () {
    return {
      dialog: false,
    }
  },
  methods: {
    toHome: function() {
      this.$router.push({ name: 'UserHome', params: { username: this.$store.state.username }})
    }
  }
}
</script>

<style scoped>
  .v-btn--fab.v-size--default.v-btn--absolute.v-btn--top {
    top: 5px !important;
  }
</style>
