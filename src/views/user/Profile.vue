<template>
  <v-container
    fluid
  >
    <v-btn
      elevation="2"
      fab
      top
      left
      icon
      to="/:username/home"
    >
      <v-icon>
        mdi-arrow-left
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
        <v-card-title><h2>Account Name</h2></v-card-title>
      </v-row>
      <v-card-text />
    </v-card>
  </v-container>
</template>
