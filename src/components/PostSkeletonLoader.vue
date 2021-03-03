<template>
  <v-sheet
    class="mx-auto mb-5"
    max-width="500"
  >
    <v-skeleton-loader
      class="mx-auto mb-5"
      elevation="4"
      max-width="500"
      type="list-item-avatar-two-line, list-item-three-line, actions"
    />
  </v-sheet>
</template>

<style>
  .v-skeleton-loader__actions {
    text-align: center !important;
  }
</style>
