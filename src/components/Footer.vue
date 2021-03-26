<template>
  <v-footer
    padless
    v-show="displayFooter"
  >
    <v-card
      flat
      tile
      width="100%"
      class="text-center custom"
      color="blue-grey lighten-5"
    >
      <v-card-text
        class="black--text"
      >
        Jackson Lauder - {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style>

</style>

<script>
export default {
  data () {
    return {
      displayFooter:false
    }
  }
}
</script>
