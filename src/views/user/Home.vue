<template>
  <v-container fluid>
    <h1 class="mb-10">
      Today
    </h1>

    <Post />

    <v-bottom-navigation
      fixed
      height="70px"
    >
      <v-btn to="/:username/profile">
        <span class="hidden-sm-and-down">Profile</span>
        <v-icon size="35px">
          mdi-account
        </v-icon>
      </v-btn>
      
      <v-btn>
        <span class="hidden-sm-and-down">Search</span>
        <v-icon size="35px">
          mdi-magnify
        </v-icon>
      </v-btn>

      <NewPostBtn />

      <v-btn to="/:username/messages">
        <span class="hidden-sm-and-down">Messages</span>
        <v-icon size="35px">
          mdi-message
        </v-icon>
      </v-btn>

      <v-btn to="/:username/notifications">
        <span class="hidden-sm-and-down">Notifications</span>
        <v-icon size="35px">
          mdi-bell
        </v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<script>
import NewPostBtn from '../../components/NewPostBtn'
import Post from '../../components/Post'

  export default {
    name: 'Home',
    components: {
      NewPostBtn,
      Post,
    }
  }
</script>

<style>

</style>
