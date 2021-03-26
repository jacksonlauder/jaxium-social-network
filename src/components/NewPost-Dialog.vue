<template>
  <v-container fluid>
    <v-row>
      <v-dialog
        v-model="show"
        transition="dialog-bottom-transition"
        scrollable
        fullscreen
      >
        <v-card height="800px">
          <v-toolbar
            flat
            color="blue-grey lighten-5"
            class="pt-3"
          >
              <v-text-field
                solo
                label="Search"
                rounded
                prepend-inner-icon="mdi-magnify"
                hide-details="auto"
              />
              <v-btn
                icon
                @click="show = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
          </v-toolbar>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    props: {
      value: Boolean
    },
    computed: {
      show: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('input', value)
        }
      }
    }
  }
</script>
