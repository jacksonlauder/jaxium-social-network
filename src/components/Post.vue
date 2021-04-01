<template>
  <v-col>
    <v-card
      v-for="post of posts"
      :key="post._id"
      class="mx-auto mb-5"
      max-width="500"
      elevation="4"
    >
      <v-container
        fluid
        fill-height
      >
        <v-row
          align="center"
        >
          <v-col
            cols="2"
            class="ml-5"
          >
            <v-avatar>
              <v-img
                class="elevation-6"
                alt=""
                src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
              />
            </v-avatar>
          </v-col>
        
          <v-col cols="8">
            <v-card-title>{{ post.author.username }}</v-card-title>
            <v-card-subtitle>{{ time(post.updatedAt) }}</v-card-subtitle>
          </v-col>

          <v-col>
            <v-menu
              right
              rounded
              offset-x
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  absolute
                  top
                  right
                  icon
                  color="blue-grey darken-1"
                  v-on="on"
                >
                  <v-icon>mdi-dots-horizontal</v-icon>
                </v-btn>
              </template>
              <v-list>
                <!-- TODO: Logic e.g. Rest API -->
                <v-list-item
                  v-if="$store.state.username === post.author.username"
                  link
                  disabled
                  @click.prevent="editPost(post._id)"
                >
                  Edit Post
                </v-list-item>

                <v-list-item
                  v-if="$store.state.username === post.author.username"
                  link
                  @click.prevent="deletePost(post._id)"
                >
                  Delete Post
                </v-list-item>

                <v-list-item
                  v-if="$store.state.username !== post.author.username"
                  link
                  disabled
                >
                  Report Post
                </v-list-item>

                <v-list-item
                  v-if="$store.state.username !== post.author.username"
                  link
                  disabled
                >
                  Share Post
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>

        <v-card-text>
          {{ post.postContent }}
        </v-card-text>
      </v-container>
      <v-card-actions>
        <v-spacer />

        <v-btn icon>
          <v-icon
            size="30px"
            color="blue-grey darken-2"
          >
            mdi-heart
          </v-icon>
        </v-btn>
        <span
          class="ml-2 blue-grey--text text--darken-2"
        >15</span>
        <v-btn
          icon
          class="ml-10"
        >
          <v-icon
            size="30px"
            color="blue-grey darken-2"
          >
            mdi-forum
          </v-icon>
        </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import * as PostService from '../services/PostService'
import moment from 'moment'

export default {
  name: "Post",
  props: {
    posts: {}
  },

  methods: {
    time: function (timeRaw) {
      var timeParsed = moment(timeRaw).fromNow()
      return timeParsed
    },
    editPost: async function (id) {
      return id
    },
    deletePost: async function (id) {
      await PostService.deletePost(id)
    }
  }
}
</script>

<style>

</style>
