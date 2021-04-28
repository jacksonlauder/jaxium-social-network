<template>
  <v-container fluid>
    <SearchDialog v-model="showSearchDialog" />
    <NewPostDialog v-model="showNewPostDialog" />

    <v-btn
      fab
      top
      right
      absolute
      class="top-fab-btn"
      color="white"
      elevation="3"
      @click.prevent="getPosts"
    >
      <v-icon
        large
        color="blue-grey darken-2"
      >
        mdi-refresh
      </v-icon>
    </v-btn>

    <Post :posts="posts" />

    <v-btn
      v-show="scrollToTop"
      v-scroll="onScroll"
      fab
      fixed
      bottom
      right
      elevation="3"
      color="blue-grey darken-1"
      @click="toTop"
    >
      <v-icon
        large
        color="white"
      >
        mdi-chevron-up
      </v-icon>
    </v-btn>

    <v-bottom-navigation
      fixed
      grow
      height="70px"
      background-color="blue-grey darken-1"
      dark
      class="btm-nav"
    >
      <v-btn
        transition="fade-transition"
        active-class="no-active"
        @click.prevent="toProfile"
      >
        <span class="hidden-sm-and-down white--text">Profile</span>
        <v-icon
          size="35px"
          color="white"
        >
          mdi-account
        </v-icon>
      </v-btn>
      
      <v-btn
        active-class="no-active"
        @click.stop="showSearchDialog=true"
      >
        <span class="hidden-sm-and-down white--text">Search</span>
        <v-icon
          size="35px"
          color="white"
        >
          mdi-magnify
        </v-icon>
      </v-btn>

      <v-btn
        style="border-radius: 50%"
        class="new-post-btn"
        fab
        min-width="56px"
        width="56px"
        min-height="56px"
        height="56px"
        color="amber darken-3"
        dark
        absolute
        top
        active-class="no-active"
        @click.stop="showNewPostDialog=true"
      >
        <v-icon
          size="40px"
          color="white"
        >
          mdi-plus
        </v-icon>
      </v-btn>

      <v-btn
        active-class="no-active"
        @click.prevent="toMessages"
      >
        <span class="hidden-sm-and-down white--text">Messages</span>
        <v-badge
          v-model="showMessagesBadge"
          color="red"
          dot
          overlap
        >
          <v-icon
            size="35px"
            color="white"
          >
            mdi-message
          </v-icon>
        </v-badge>
      </v-btn>

      <v-btn
        active-class="no-active"
        @click.prevent="toNotifications"
      >
        <span class="hidden-sm-and-down white--text">Notifications</span>
        <v-badge
          v-model="showNotificationsBadge"
          color="red"
          dot
          overlap
        >
          <v-icon
            size="35px"
            color="white"
          >
            mdi-bell
          </v-icon>
        </v-badge>
      </v-btn>
    </v-bottom-navigation>
    <v-footer
      height="70px"
      color="blue-grey lighten-5"
    />
  </v-container>
</template>

<script>
import Post from '../../components/Post'
import SearchDialog from '../../components/Search-Dialog'
import NewPostDialog from '../../components/NewPost-Dialog'
import * as PostService from '../../services/PostService'

  export default {
    name: 'UserHome',
    components: {
      Post,
      SearchDialog,
      NewPostDialog,
    },

    data: function () {
      return {
        showSearchDialog: false,
        showNewPostDialog: false,
        showMessagesBadge: false,
        showNotificationsBadge: false,
        posts: null,
        scrollToTop: false,
      }
    },

    beforeRouteEnter (to, from, next) {
      PostService.getAllPosts().then(res => {
        next(vm => {
          vm.posts = res.data.posts
        })
      })
    },

    methods: {
      toProfile: function() {
        this.$router.push({ name: 'profile', params: { username: this.$store.state.username }})
      },

      toMessages: function() {
        this.$router.push({ name: 'messages', params: { username: this.$store.state.username }})
      },

      toNotifications: function() {
        this.$router.push({ name: 'notifications', params: { username: this.$store.state.username }})
      },

      getPosts: async function() {
        await PostService.getAllPosts().then(res => {
          this.posts = res.data.posts
        })
      },

      onScroll (e) {
        if (typeof window === 'undefined') return
        const top = window.pageYOffset ||   e.target.scrollTop || 0
        this.scrollToTop = top > 20
      },

      toTop () {
        this.$vuetify.goTo(0)
      }
    }
  }
</script>

<style scoped>
  .v-btn--absolute.v-btn--bottom, .v-btn--fixed.v-btn--bottom {
    bottom: 6rem !important;
  }
</style>
