<template>
  <v-container
    fluid
    class="mt-10"
  >
    <v-btn
      fab
      top
      left
      icon
      to="/:username/home"
      color="blue-grey darken-3"
      absolute
      elevation="3"
    >
      <v-icon large>
        mdi-arrow-left-bold
      </v-icon>
    </v-btn>
    <v-card
      max-width="800"
      class="mx-auto mt-5 pa-2"
    >
      <v-row
        justify="space-around"
        class="pt-10"
      >
        <v-avatar
          class="profile"
          size="164"
        >
          <v-icon
            color="blue-grey darken-1"
            size="210"
          >
            mdi-account-circle
          </v-icon>
        </v-avatar>
      </v-row>
      <v-row
        justify="space-around"
        class="pt-5"
      >
        <v-card-title><h2>Full Name</h2></v-card-title>
      </v-row>

      <v-row
        justify="space-around"
        class="mt-0"
      >
        <v-card-subtitle><h2>accountname</h2></v-card-subtitle>
      </v-row>

      <v-row
        justify="space-around"
      >
        <v-card-text class="text-center px-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae excepturi expedita asperiores maxime similique aut!
        </v-card-text>
      </v-row>

      <v-row
        align="center"
        justify="center"
        class="my-7"
      >
        <v-icon
          color="blue-grey darken-3"
        >
          mdi-account-group
        </v-icon>
        <span class="mx-3"><strong>8</strong> Followers</span>
        <span><strong>8</strong> Following</span>
      </v-row>

      <v-row
        justify="space-around"
        class="px-10 pb-5"
      >
        <v-card-text class="text-center px-10 pt-0">
          <v-icon
            color="blue-grey darken-3"
            class="mr-1"
          >
            mdi-map-marker-outline
          </v-icon>location
        </v-card-text>
        <v-card-text class="text-center px-10 pt-0">
          <v-icon
            color="blue-grey darken-3"
            class="mr-1"
          >
            mdi-link-variant
          </v-icon>
          <a
            href="https://jaxium.com"
            target="_blank"
            class="vertical-align-middle"
          >https://jaxium.com</a>
        </v-card-text>
      </v-row>
      <v-card-actions class="mb-5">
        <v-spacer />
        <v-btn
          depressed
          large
          color="blue-grey lighten-3"
        >
          <v-icon
            class="mr-1"
          >
            mdi-pencil
          </v-icon>
          Edit Profile
        </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped>
  .v-btn--fab.v-size--default.v-btn--absolute.v-btn--top {
    top: 5px !important;
  }
  .v-application a {
    color: #37474F !important;
    text-decoration: none !important;
    vertical-align: middle;
  }
</style>
