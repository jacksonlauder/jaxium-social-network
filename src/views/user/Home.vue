<template>
  <v-container fluid>
    <SearchDialog v-model="showSearchDialog" />
    <NewPostDialog v-model="showNewPostDialog" />

    <Post :posts="posts" />

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
        @click.prevent="toProfile"
        active-class="no-active"
      >
        <span class="hidden-sm-and-down white--text">Profile</span>
        <v-icon
          size="35px"
          color="white"
        >
          mdi-account
        </v-icon>
      </v-btn>
      
      <v-btn @click.stop="showSearchDialog=true" active-class="no-active">
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

      <v-btn @click.prevent="toMessages" active-class="no-active">
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

      <v-btn @click.prevent="toNotifications" active-class="no-active">
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
      }
    }
  }
</script>

<style scoped>
  .v-btn--is-elevated.v-btn--fab {
    box-shadow: 0px 5px 5px 3px #afafaf, 0px 0px 0px 10px #eceff1 !important;
  }
  .v-btn--fab.v-size--default.v-btn--absolute.v-btn--top {
    top: -20px !important;
  }
  .btm-nav {
    border-top-left-radius: 15px !important;
    border-top-right-radius: 15px !important;
  }
</style>
