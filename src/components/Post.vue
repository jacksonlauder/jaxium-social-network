<template>
  <v-card
    class="mx-auto mb-5"
    max-width="500"
    elevation="4"
  >
    <v-container
      fluid
      fill-height
    >
      <v-row
        align="center"
      >
        <v-col
          cols="2"
          class="ml-5"
        >
          <v-avatar>
            <v-img
              class="elevation-6"
              alt=""
              src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
            />
          </v-avatar>
        </v-col>
        
        <v-col cols="8">
          <v-card-title>Account Name</v-card-title>
          <v-card-subtitle>Minutes ago</v-card-subtitle>
        </v-col>

        <v-col>
          <v-menu
            left
            rounded
            offset-x
            class="d-flex justify-center"
          >
            <template v-slot:activator="{ on }">
              <v-btn
                absolute
                top
                right
                icon
                color="blue-grey darken-1"
                v-on="on"
              >
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-list-item-content>
                <v-btn
                  depressed
                  rounded
                  text
                  class="pa-0"
                >
                  Edit Post
                </v-btn>
                <v-btn
                  depressed
                  rounded
                  text
                  class="pa-0"
                >
                  Report Post
                </v-btn>
                <v-btn
                  depressed
                  rounded
                  text
                  class="pa-0"
                >
                  Share Post
                </v-btn>
              </v-list-item-content>
            </v-card>
          </v-menu>
        </v-col>
      </v-row>

      <v-card-text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sint perspiciatis inventore repellat fugiat corrupti!
      </v-card-text>
    </v-container>
    <v-card-actions>
      <v-spacer />

      <v-btn icon>
        <v-icon
          size="30px"
          color="blue-grey darken-2"
        >
          mdi-heart
        </v-icon>
      </v-btn>
      <span
        class="ml-2 blue-grey--text text--darken-2"
      >15</span>
      <v-btn
        icon
        class="ml-10"
      >
        <v-icon
          size="30px"
          color="blue-grey darken-2"
        >
          mdi-forum
        </v-icon>
      </v-btn>
      <v-spacer />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>
