<template>
  <v-container fluid>
    <!-- <h1 class="mb-10">
      Today
    </h1> -->

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
      
      <v-btn>
        <span class="hidden-sm-and-down">Search</span>
        <v-icon
          size="35px"
          color="white"
        >
          mdi-magnify
        </v-icon>
      </v-btn>

      <NewPostBtn />

      <v-btn to="/:username/messages">
        <span class="hidden-sm-and-down">Messages</span>
        <v-icon
          size="35px"
          color="white"
        >
          mdi-message
        </v-icon>
      </v-btn>

      <v-btn to="/:username/notifications">
        <span class="hidden-sm-and-down">Notifications</span>
        <v-icon
          size="35px"
          color="white"
        >
          mdi-bell
        </v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<script>
import NewPostBtn from '../../components/NewPostBtn'
import Post from '../../components/Post'
import PostSkeleton from '../../components/PostSkeletonLoader'

  export default {
    name: 'Home',
    components: {
      NewPostBtn,
      Post,
      PostSkeleton,
    }
  }
</script>

<style>

</style>
