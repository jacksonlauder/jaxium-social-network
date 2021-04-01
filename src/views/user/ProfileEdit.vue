<template>
  <v-container
    fluid
    class="mt-10"
  >
    <v-card>
      <v-card-actions>
        <v-btn
          block
          outlined
          rounded
          depressed
          large
          color="blue-grey darken-2"
          class="mt-5 mx-0"
          @click.prevent="getUserData"
        >
          Get User Data
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'ProfileEdit',
    data: function () {
    return {
      userData: null
    }
  },

  methods: {
    getUserData: function () {
      console.log(this.$store.state.userData)
    }
  }
}
</script>

