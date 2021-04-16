<template>
  <v-col class="px-0">
    <v-card
      v-for="post of posts"
      :id="`${post._id}`"
      :key="post._id"
      class="mx-auto mb-5"
      max-width="35rem"
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
                  color="blue-grey darken-2"
                  v-on="on"
                >
                  <v-icon large>
                    mdi-dots-horizontal
                  </v-icon>
                </v-btn>
              </template>

              <v-list>
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

        <v-card-text class="pb-0">
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
        <v-btn
          icon
          @click.prevent="likePost(post._id)"
        >
          <v-icon
            size="35px"
            color="blue-grey darken-2"
          >
            mdi-heart
          </v-icon>
        </v-btn>

        <v-btn
          icon
          @click.prevent="unlikePost(post._id)"
        >
          <v-icon
            size="35px"
            color="blue-grey darken-2"
          >
            mdi-heart-off
          </v-icon>
        </v-btn>

        <v-menu
          open-on-hover
          bottom
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <span
              class="ml-2 pr-10 pl-3 blue-grey--text text--darken-2 text-h5"
              v-bind="attrs"
              v-on="on"
            >{{ post.likes.length }}</span>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, index) of post.likes"
              :key="index"
            >
              <v-list-item-title>{{ item.by.username }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn
          icon
          class="ml-5"
          @click.prevent="showComments(post.comments)"
        >
          <v-icon
            size="35px"
            color="blue-grey darken-2"
          >
            mdi-forum
          </v-icon>
        </v-btn>
        <v-spacer />
      </v-card-actions>

      <v-expand-transition>
        <div v-show="post.comments.isVisible">
          <v-divider />

          <v-list two-line>
            <template v-for="(commenter, index) in commenters">
              <v-divider
                v-if="commenter.divider"
                :key="index"
                :inset="commenter.inset"
              />
              <v-list-item
                v-else
                :key="commenter.title"
              >
                <v-list-item-content>
                  <v-list-item-title v-html="commenter.title" />
                  <v-list-item-subtitle v-html="commenter.subtitle" />
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>

          <v-divider />

          <v-container fluid>
            <v-text-field
              v-model="comment"
              type="text"
              solo
              label="Add Comment..."
              rounded
              hide-details="auto"
              clear-icon="mdi-close-circle"
              clearable
              @click:clear="clearComment"
            >
              <template v-slot:append-outer>
                <v-btn
                  icon
                  @click.prevent="sendComment"
                >
                  <v-icon
                    large
                    color="blue-grey darken-2"
                  >
                    mdi-message-reply
                  </v-icon>
                </v-btn>
              </template>
            </v-text-field>
          </v-container>
        </div>
      </v-expand-transition>
    </v-card>
  </v-col>
</template>

<script>
import Vue from 'vue'
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
        postContent: "",
      },
      items: [
        { title: 'bouquetcoral' },
        { title: 'wanderingbiscuits' },
        { title: 'giletcomposter' },
        { title: 'inborngroovy' },
      ],
      commenters: [
        {
          title: 'wanderingbiscuits',
          subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, incidunt!'
        },
        { divider: true, inset: false },
        {
          title: 'giletcomposter',
          subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, incidunt!'
        },
        { divider: true, inset: false },
        {
          title: 'bouquetcoral',
          subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, incidunt!'
        },
        { divider: true, inset: false },
        {
          title: 'inborngroovy',
          subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, incidunt!'
        },
        { divider: true, inset: false },
        {
          title: 'attentionchapter',
          subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, incidunt!'
        },
      ],
      comment: '',
      isLiked: false
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
      await PostService.updatePost(post)
      this.editDialog = false
      this.$parent.getPosts()
    },

    deletePost: async function (id) {
      await PostService.deletePost(id)
      this.deleteDialog = false
      this.$parent.getPosts()
    },
    sendComment () {
      this.message = ''
    },
    
    clearComment () {
      this.message = ''
    },

    likePost: async function (id) {
      await PostService.likePost(id)
      this.$parent.getPosts()
    },
    
    unlikePost: async function (id) {
      await PostService.unlikePost(id)
      this.$parent.getPosts()
    },

    showComments: function (comments) {
      console.log(comments)
      Vue.set(comments, 'isVisible', !comments.isVisible)
    },
  }
}
</script>

<style>
  .v-input__append-outer .v-icon {
    color: #37474f;
  }
</style>
