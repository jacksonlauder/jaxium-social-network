<template>
  <v-container
    fluid
    class="mt-10"
  >
    <v-btn
      fab
      top
      left
      absolute
      color="white"
      class="top-fab-btn"
      elevation="3"
      @click.prevent="toHome"
    >
      <v-icon
        large
        color="blue-grey darken-2"
      >
        mdi-arrow-left-bold
      </v-icon>
    </v-btn>

    <v-card
      max-width="35rem"
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
        <v-card-title><h2>{{ $store.state.userFirstName | capitalize }} {{ $store.state.userLastName | capitalize }}</h2></v-card-title>
      </v-row>

      <v-row
        justify="space-around"
        class="mt-0"
      >
        <v-card-subtitle><h2>{{ $store.state.username }}</h2></v-card-subtitle>
      </v-row>

      <v-row
        justify="space-around"
      >
        <v-card-text
          v-if="$store.state.userDescription !== null || $store.state.userDescription !== ''"
          class="text-center px-10"
        >
          {{ $store.state.userDescription }}
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
        <v-card-text
          v-if="$store.state.userLocation !== null || $store.state.userLocation !== ''"
          class="text-center px-10 pt-0"
        >
          <v-icon
            color="blue-grey darken-3"
            class="mr-1"
          >
            mdi-map-marker-outline
          </v-icon>{{ $store.state.userLocation }}
        </v-card-text>

        <v-card-text
          v-if="$store.state.userEmail !== null || $store.state.userEmail !== ''"
          class="text-center px-10 pt-0"
        >
          <v-icon
            color="blue-grey darken-3"
            class="mr-1"
          >
            mdi-email
          </v-icon>{{ $store.state.userEmail }}
        </v-card-text>

        <v-card-text
          v-if="$store.state.userWebsite !== null || $store.state.userWebsite !== ''"
          class="text-center px-10 pt-0"
        >
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
          >{{ $store.state.userWebsite }}</a>
        </v-card-text>
      </v-row>
      
      <!-- TODO: v-if="$store.state.username === something.username" -->
      <v-card-actions class="d-flex flex-column">
        <v-btn
          dark
          outlined
          block
          rounded
          depressed
          large
          color="blue-grey darken-2"
          @click.prevent="toProfileEdit"
        >
          <v-icon
            class="mr-1"
          >
            mdi-pencil
          </v-icon>
          Edit Profile
        </v-btn>

        <v-btn
          depressed
          large
          block
          color="blue-grey darken-1"
          dark
          width="100%"
          class="mt-5 mx-0"
          @click.prevent="logout()"
        >
          <v-icon
            left
          >
            mdi-logout
          </v-icon>
          Logout
        </v-btn>
      </v-card-actions>
    </v-card>
    <Post :posts="posts" />
  </v-container>
</template>

<script>
// import _ from 'lodash'
import Post from '../../components/Post'
import * as PostService from '../../services/PostService'
import store from '../../store'
import * as auth from '../../services/AuthService'

export default {
  name: 'Profile',

  components: {
    Post
  },

  data: function () {
    return {
      userData: null,
      posts: null,
    }
  },

  beforeRouteEnter (to, from, next) {
    PostService.getAllPostsByUserId(store.state.userId).then(res => {
      next(vm => {
        vm.posts = res.data.posts
      })
    })
  },

  methods: {      
    logout: function () {
      auth.logout()
      this.$router.push({ name: 'SiteHome' })
    },

    toHome: function() {
      this.$router.push({ name: 'UserHome', params: { username: this.$store.state.username }})
    },

    toProfileEdit: function() {
      this.$router.push({ name: 'profile-edit', params: { username: this.$store.state.username }})
    },

    getPosts: async function() {
      await PostService.getAllPostsByUserId(this.$store.state.userId).then(res => {
        this.posts = res.data.posts
      })
    },
  }
}
</script>

<style scoped>
  .v-application a {
    color: #37474F !important;
    text-decoration: none !important;
    vertical-align: middle;
  }
</style>
