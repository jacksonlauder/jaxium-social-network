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
        <v-list-item
          v-if="$store.state.isLoggedIn"
          class="justify-center"
        >
          <v-list-item-avatar size="50" color="mx-0">
            <v-icon
              color="blue-grey darken-1"
              size="60"
            >
              mdi-account-circle
            </v-icon>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item-group
          v-model="group"
          active-class="blue-grey--text text--accent-3"
        >
          <v-list-item
            v-if="$store.state.isLoggedIn"
            link
            @click.prevent="toProfile"
          >
            <v-list-item-content>
              <v-list-item-title class="d-flex justify-center title blue-grey--text text--darken-3">
                {{ $store.state.username }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider
            v-if="$store.state.isLoggedIn"
            class="mb-2"
          />

          <v-list-item
            v-if="!$store.state.isLoggedIn"
            to="/"
          >
            <v-list-item-icon>
              <v-icon color="blue-grey darken-2">
                mdi-home
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="blue-grey--text text--darken-3">
                Welcome
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            v-if="!$store.state.isLoggedIn"
            to="/register"
          >
            <v-list-item-icon>
              <v-icon color="blue-grey darken-2">
                mdi-account-plus
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="mt-1 blue-grey--text text--darken-3">
                Create New Account
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            v-if="!$store.state.isLoggedIn"
            to="/login"
          >
            <v-list-item-icon>
              <v-icon color="blue-grey darken-2">
                mdi-login
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="mt-1 blue-grey--text text--darken-3">
                Login
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            v-if="$store.state.isLoggedIn"
            @click.prevent="toHome"
          >
            <v-list-item-icon>
              <v-icon color="blue-grey darken-2">
                mdi-newspaper-variant-multiple-outline
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="mt-1 blue-grey--text text--darken-3">
                Home
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            v-if="$store.state.isLoggedIn"
            @click.prevent="toMessages"
          >
            <v-list-item-icon>
              <v-icon color="blue-grey darken-2">
                mdi-message
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="mt-1 blue-grey--text text--darken-3">
                Messages
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            v-if="$store.state.isLoggedIn"
            @click.prevent="toNotifications"
          >
            <v-list-item-icon>
              <v-icon color="blue-grey darken-2">
                mdi-bell
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="mt-1 blue-grey--text text--darken-3">
                Notifications
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-btn
          v-if="$store.state.isLoggedIn"
          depressed
          large
          color="blue-grey darken-1"
          dark
          width="100%"
          class="mt-10"
          @click.prevent="logout()"
        >
          <v-icon
            left
          >
            mdi-logout
          </v-icon>
          Logout
        </v-btn>
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
