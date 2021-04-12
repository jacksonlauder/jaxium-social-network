<template>
  <v-col>
    <v-card
      v-for="post of posts"
      :id="`posts-${post._id}`"
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
              :close-on-click="true"
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
                <!-- <v-list-item
                  v-if="$store.state.username === post.author.username"
                  link
                  @click.prevent="editPostContent(`posts-${post._id}-postContent`)"
                >
                  <v-list-item-icon>
                    <v-icon>
                      mdi-square-edit-outline
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>
                      Edit Post
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item> -->

                <v-dialog
                  v-model="editDialog"
                  width="500"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-list-item
                      v-if="$store.state.username === post.author.username"
                      link
                      v-bind="attrs"
                      v-on="on"
                      @click.prevent="editPostContent(post._id)"
                    >
                      <v-list-item-icon>
                        <v-icon>
                          mdi-square-edit-outline
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>
                          Edit Post
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>

                  <v-card>
                    <v-card-title class="headline">
                      Edit Post?
                    </v-card-title>

                    <v-divider />

                    <v-form 
                      ref="editContentForm"
                      @submit.prevent="onSubmit"
                    >
                      <v-card-text class="mt-4">
                        <v-textarea
                          v-model="editedPost.postContent"
                          outlined
                          auto-grow
                          counter
                          hide-details="auto"
                        />
                      </v-card-text>

                      <v-divider />

                      <v-card-actions>
                        <v-btn
                          rounded
                          outlined
                          depressed
                          large
                          color="blue-grey darken-2"
                          @click.prevent="cancel"
                        >
                          Cancel
                        </v-btn>

                        <v-spacer />

                        <v-btn
                          rounded
                          depressed
                          large
                          color="blue-grey darken-1"
                          dark
                          type="submit"
                        >
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-form>
                  </v-card>
                </v-dialog>

                <v-dialog
                  v-model="deleteDialog"
                  width="500"
                >
                  <template v-slot:activator="{ on, attrs}">
                    <v-list-item
                      v-if="$store.state.username === post.author.username"
                      link
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-list-item-icon><v-icon>mdi-delete</v-icon></v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>
                          Delete Post
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>

                  <v-card>
                    <v-card-title class="headline">
                      Delete Post?
                    </v-card-title>

                    <v-divider />

                    <v-card-text class="mt-4">
                      This action may not be undone.
                    </v-card-text>

                    <v-divider />

                    <v-card-actions>
                      <v-btn
                        rounded
                        outlined
                        depressed
                        large
                        color="blue-grey darken-2"
                        @click="deleteDialog = false"
                      >
                        Cancel
                      </v-btn>
                      <v-spacer />
                      <v-btn
                        rounded
                        depressed
                        large
                        color="blue-grey darken-1"
                        dark
                        @click.prevent="deletePost(post._id)"
                      >
                        Delete
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-list-item
                  v-if="$store.state.username !== post.author.username"
                  link
                  disabled
                >
                  <v-list-item-icon>
                    <v-icon disabled>
                      mdi-alert
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>
                      Report Post
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item
                  v-if="$store.state.username !== post.author.username"
                  link
                  disabled
                >
                  <v-list-item-icon>
                    <v-icon disabled>
                      mdi-share-variant
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>
                      Share Post
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>

        <v-card-text>
          <v-textarea
            auto-grow
            solo
            flat
            rows="2"
            :value="post.postContent"
            :readonly="readonly"
          />
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
  props: ['posts'],

  data: function () {
    return {
      editDialog: false,
      deleteDialog: false,
      readonly: true,
      editedPost: {
        postContent: ""
      },
    }
  },

  methods: {
    time: function (timeRaw) {
      var timeParsed = moment(timeRaw).fromNow()
      return timeParsed
    },

    editPostContent: async function (id) {
      await PostService.getPostById(id).then(res => {
        this.editedPost = res.data.post
      })
    },

    cancel () {
      this.editDialog = false
    },

    onSubmit: async function () {
      const post = {
        post: this.editedPost
      }
      console.log(post)
      await PostService.updatePost(post)
      this.editDialog = false
      this.$parent.getPosts()
    },

    deletePost: async function (id) {
      await PostService.deletePost(id)
      this.deleteDialog = false
      this.$parent.getPosts()
    }
  }
}
</script>

<style>

</style>
