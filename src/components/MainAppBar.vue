<template>
  <v-card>
    <v-app-bar
      color="blue-grey lighten-5"
      app
      flat
      tile
    >
      <v-app-bar-nav-icon
        color="blue-grey darken-2"
        @click="drawer = true"
      />
      <router-link to="/">
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
      temporary
      app
    >
      <v-list nav>
        <v-list-item-group v-model="group">
          <v-list-item
            v-if="!$store.state.isLoggedIn"
            to="/"
          >
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                Site Home
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            v-if="!$store.state.isLoggedIn"
            to="/register"
          >
            <v-list-item-icon>
              <v-icon>mdi-account-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="mt-1">
                Register
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            v-if="!$store.state.isLoggedIn"
            to="/login"
          >
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="mt-1">
                Login
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            v-if="$store.state.isLoggedIn"
            @click.prevent="toHome"
          >
            <v-list-item-icon>
              <v-icon>mdi-newspaper-variant-multiple-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="mt-1">
                Home
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            v-if="$store.state.isLoggedIn"
            @click.prevent="toProfile"
          >
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="mt-1">
                Profile
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            v-if="$store.state.isLoggedIn"
            @click.prevent="toMessages"
          >
            <v-list-item-icon>
              <v-icon>mdi-message</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="mt-1">
                Messages
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            v-if="$store.state.isLoggedIn"
            @click.prevent="toNotifications"
          >
            <v-list-item-icon>
              <v-icon>mdi-bell</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="mt-1">
                Notifications
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            v-if="$store.state.isLoggedIn"
            @click.prevent="logout()"
          >
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="mt-1">
                Logout
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import * as auth from '../services/AuthService'

export default {
  data: () => ({ drawer: false, group: null }),
    methods: {
      logout: function () {
        auth.logout()
        this.$router.push({ name: 'SiteHome' })
      },
      toHome: function () {
        this.$router.push({ name: 'UserHome', params: { username: this.$store.state.username }})
      },
      toProfile: function () {
        this.$router.push({ name: 'profile', params: { username: this.$store.state.username }})
      },
      toMessages: function () {
        this.$router.push({ name: 'messages', params: { username: this.$store.state.username }})
      },
      toNotifications: function () {
        this.$router.push({ name: 'notifications', params: { username: this.$store.state.username }})
      }
    }
  };
</script>
