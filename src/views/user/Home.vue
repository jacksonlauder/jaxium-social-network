<template>
  <v-container
    fluid
    class="mt-6"
  >
    <SearchDialog v-model="showSearchDialog" />
    <NewPostDialog v-model="showNewPostDialog" />

    <Post />
    <PostSkeleton />
    <PostSkeleton />
    <PostSkeleton />

    <v-bottom-navigation
      fixed
      grow
      height="70px"
      background-color="blue-grey darken-1"
      dark
    >
      <v-btn to="/:username/profile">
        <span class="hidden-sm-and-down">Profile</span>
        <v-icon
          size="35px"
          color="white"
        >
          mdi-account
        </v-icon>
      </v-btn>
      
      <v-btn @click.stop="showSearchDialog=true">
        <span class="hidden-sm-and-down">Search</span>
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
        @click.stop="showNewPostDialog=true"
      >
        <v-icon
          size="35px"
          color="white"
        >
          mdi-plus
        </v-icon>
      </v-btn>

      <v-btn to="/:username/messages">
        <span class="hidden-sm-and-down">Messages</span>
        <v-badge
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

      <v-btn to="/:username/notifications">
        <span class="hidden-sm-and-down">Notifications</span>
        <v-badge
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
import PostSkeleton from '../../components/PostSkeletonLoader'
import SearchDialog from '../../components/Search-Dialog'
import NewPostDialog from '../../components/NewPost-Dialog'

  export default {
    name: 'UserHome',
    components: {
      Post,
      PostSkeleton,
      SearchDialog,
      NewPostDialog,
    },

    data () {
      return {
        showSearchDialog: false,
        showNewPostDialog: false
      }
    }
  }
</script>

<style scoped>
  .v-btn--is-elevated.v-btn--fab {
    /* box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%) !important; */
    box-shadow: 0px 0px 0px 7px #eceff1 !important;
  }
  .v-btn--fab.v-size--default.v-btn--absolute.v-btn--top {
    top: -20px !important;
  }
</style>
