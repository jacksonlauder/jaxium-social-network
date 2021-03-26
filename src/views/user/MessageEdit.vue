<template>
  <v-container fluid>
    <v-app-bar
      flat
      tile
      color="blue-grey lighten-4"
      height="100px"
    >
      <v-row>
        <div
          style="position: absolute;"
          class="mt-4"
        >
          <v-btn
            icon
            color="blue-grey lighten-4"
            to="/:username/messages"
          >
            <v-icon
              large
              color="blue-grey darken-3"
            >
              mdi-chevron-left
            </v-icon>
          </v-btn>
        </div>

        <div class="d-flex justify-center ma-auto">
          <v-menu
            bottom
            min-width="200px"
            rounded
            offset-y
            class="d-flex justify-center"
          >
            <template v-slot:activator="{ on }">
              <div
                class="d-flex flex-column justify-center align-center button"
                role="button"
                v-on="on"
              >
                <v-avatar
                  height="50"
                  width="50"
                  class=""
                >
                  <v-img
                    :src="user.picture"
                  />
                </v-avatar>
        
                <span class="pt-1">{{user.fullName}}         
                  <v-icon
                    color="blue-grey darken-3"
                  >
                    mdi-chevron-right
                  </v-icon>
                </span>
              </div>
            </template>
            <v-card>
              <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                  <v-avatar>
                    <v-img
                      :src="user.picture"
                    />
                  </v-avatar>
                  <h3>{{ user.fullName }}</h3>
                  <p class="caption mt-1">
                    {{ user.accountName }}
                  </p>
                  <v-divider class="my-3" />
                  <v-btn
                    depressed
                    rounded
                    text
                  >
                    View Account
                  </v-btn>
                </div>
              </v-list-item-content>
            </v-card>
          </v-menu>
        </div>
      </v-row>
    </v-app-bar>

    <v-footer absolute color="blue-grey lighten-4">
      <v-text-field
        solo
        label="Message..."
        rounded
        hide-details="auto"
        clearable
      />
    </v-footer>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      user: {
        fullName: 'John Doe',
        accountName: '@johndoe',
        picture: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
      },
    }),
  }
</script>
