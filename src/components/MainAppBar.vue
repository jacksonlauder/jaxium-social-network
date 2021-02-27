<template>
  <v-card>
    <v-app-bar
      color="blue-grey lighten-3"
      app
      flat
      absolute
      tile
    >
      <v-app-bar-nav-icon @click="drawer = true" />
      <router-link to="/">
        <!-- <v-toolbar-title>Jaxium</v-toolbar-title> -->
        <v-img
          alt="Jaxium Logo"
          src="../assets/Jaxium_Logo_Title.png"
          contain
          height="40"
          width="100"
        />
      </router-link>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      app
    >
      <v-list nav>
        <v-list-item to="/">
          <v-list-item-content>
            <v-list-item-title>
              Site Home
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/register">
          <v-list-item-content>
            <v-list-item-title class="mt-1">
              Register
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/login">
          <v-list-item-content>
            <v-list-item-title class="mt-1">
              Login
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/:username/home">
          <v-list-item-content>
            <v-list-item-title class="mt-1">
              Home
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data: () => ({ drawer: false }),
};
</script>
