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
          <v-avatar
            color="grey darken-3"
            class=""
          >
            <v-img
              class="elevation-6"
              alt=""
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            />
          </v-avatar>
        </v-col>
        <v-col cols="8">
          <v-card-title>Account Name</v-card-title>
          <v-card-subtitle>Minutes ago</v-card-subtitle>
        </v-col>
        <v-col>
          <v-btn
            absolute
            top
            right
            icon
            color="blue-grey darken-1"
          >
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-card-text class="headline">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sint perspiciatis inventore repellat fugiat corrupti!
      </v-card-text>
    </v-container>
    <v-card-actions>
      <v-spacer />
      <v-btn icon>
        <v-icon
          size="30px"
          color="blue-grey darken-1"
        >
          mdi-heart
        </v-icon>
      </v-btn>
      <span
        class="ml-2 blue-grey--text text--darken-1"
      >15</span>
      <v-btn
        icon
        class="ml-10"
      >
        <v-icon
          size="30px"
          color="blue-grey darken-1"
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
