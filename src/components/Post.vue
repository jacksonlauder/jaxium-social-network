<template>
  <v-col class="px-0">
    <v-card
      v-for="post of posts"
      :id="`${post._id}`"
      :key="`${post._id}`"
      :post="post"
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
              <!-- <v-img
                class="elevation-6"
                alt=""
                src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
              /> -->
              <v-icon
                color="blue-grey darken-1"
                size="3.75em"
              >
                mdi-account-circle
              </v-icon>
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
                      color="blue-grey darken-3"
                      v-on="on"
                      @click.prevent="editPostContent(post._id)"
                    >
                      <v-list-item-icon>
                        <v-icon color="blue-grey darken-2">
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
                          :rules="rules"
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
                      color="blue-grey darken-3"
                      v-on="on"
                    >
                      <v-list-item-icon>
                        <v-icon color="blue-grey darken-2">
                          mdi-delete
                        </v-icon>
                      </v-list-item-icon>
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
                  color="blue-grey darken-3"
                >
                  <v-list-item-icon>
                    <v-icon color="blue-grey darken-2">
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
                  color="blue-grey darken-3"
                >
                  <v-list-item-icon>
                    <v-icon color="blue-grey darken-2">
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
          @click.prevent="toggleLike(post._id, post.likes)"
        >
          <v-icon
            size="35px"
            color="blue-grey darken-2"
          >
            mdi-heart
          </v-icon>
        </v-btn>

        <v-menu
          open-on-hover
          bottom
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <span
              class="ml-2 pr-10 pl-3 blue-grey--text text--darken-3 text-h5"
              v-bind="attrs"
              v-on="on"
            >{{ post.likes.length }}</span>
          </template>

          <v-list v-if="post.likes.length > 0">
            <v-list-item
              v-for="(item, index) of post.likes"
              :key="index"
            >
              <v-list-item-title class="blue-grey--text text--darken-3">
                <h4>{{ item.by.username }}</h4>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn
          text
          :disabled="post.comments.length === 0"
          @click.prevent="isVisible = !isVisible"
        >
          <v-icon
            size="35px"
            color="blue-grey darken-2"
          >
            mdi-comment-multiple
          </v-icon>
          <span
            class="ml-2 pl-3 blue-grey--text text--darken-3 text-h5"
          >{{ post.comments.length }}</span>
          <v-icon
            color="blue-grey darken-2"
            class="pl-1"
          >
            {{ isVisible ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
          </v-icon>
        </v-btn>
        <v-spacer />
      </v-card-actions>

      <v-expand-transition>
        <v-card
          v-show="isVisible"
          flat
          tile
        >
          <v-divider />

          <v-container fluid>
            <v-list
              two-line
              height="210"
              class="overflow-y-auto transition-fast-in-fast-out"
              rounded
            >
              <!-- <template> -->
              <v-list-item
                v-for="(item, index) in post.comments"
                :id="item._id"
                :key="index"
                class="blue-grey lighten-5"
              >
                <v-list-item-avatar>
                  <!-- <v-img
                      class="elevation-6"
                      alt=""
                      src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
                    /> -->
                  <v-icon
                    color="blue-grey darken-1"
                    size="3em"
                  >
                    mdi-account-circle
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title class="comment-title">
                    {{ item.by.username }}
                  </v-list-item-title>
                  <v-list-item-subtitle
                    class="black--text"
                  >
                    {{ item.commentContent }}
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-menu
                  right
                  rounded
                  offset-x
                >
                  <template v-slot:activator="{ on }">
                    <v-btn
                      absolute
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
                    <v-list-item
                      v-if="$store.state.username !== item.by.username"
                      link
                      disabled
                      color="blue-grey darken-3"
                    >
                      <v-list-item-icon>
                        <v-icon color="blue-grey darken-3">
                          mdi-alert
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>
                          Report Comment
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    
                    <!-- TODO: -->
                    <v-dialog
                      v-model="editCommentDialog"
                      width="500"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-list-item
                          v-if="$store.state.username === item.by.username"
                          link
                          v-bind="attrs"
                          disabled
                          color="blue-grey darken-3"
                          v-on="on"
                          @click.prevent="editCommentContent(item._id)"
                        >
                          <v-list-item-icon>
                            <v-icon color="blue-grey darken-2">
                              mdi-comment-edit
                            </v-icon>
                          </v-list-item-icon>
                          <v-list-item-content>
                            <v-list-item-title>
                              Edit Comment
                            </v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </template>

                      <v-card>
                        <v-card-title class="headline">
                          Edit Comment?
                        </v-card-title>

                        <v-divider />

                        <v-form 
                          ref="editContentForm"
                          @submit.prevent="onSubmit"
                        >
                          <v-card-text class="mt-4">
                            <v-textarea
                              v-model="editedPost.postContent"
                              :rules="rules"
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
                      v-model="deleteCommentDialog"
                      width="500"
                    >
                      <template v-slot:activator="{ on, attrs}">
                        <v-list-item
                          v-if="$store.state.username === item.by.username"
                          link
                          v-bind="attrs"
                          color="blue-grey darken-3"
                          v-on="on"
                        >
                          <v-list-item-icon>
                            <v-icon color="blue-grey darken-2">
                              mdi-comment-remove
                            </v-icon>
                          </v-list-item-icon>
                          <v-list-item-content>
                            <v-list-item-title>
                              Delete Comment
                            </v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </template>

                      <v-card>
                        <v-card-title class="headline">
                          Delete Comment?
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
                            @click="deleteCommentDialog = false"
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
                            @click.prevent="deleteComment(post._id, item._id)"
                          >
                            Delete
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-list>
                </v-menu>
              </v-list-item>
              <!-- </template> -->
            </v-list>
          </v-container>
        </v-card>
      </v-expand-transition>

      <v-divider />

      <v-container fluid>
        <v-form
          ref="commentForm"
          @submit.prevent="sendComment(post._id, post.comment)"
        >
          <v-text-field
            :id="`${post._id}-TextField`"
            :key="`${post._id}-TextField`"
            v-model="post.comment"
            color="blue-grey darken-2"
            type="text"
            solo
            outlined
            flat
            label="Add Comment..."
            rounded
            hide-details="auto"
            clear-icon="mdi-close"
            clearable
            @click:clear="clearComment"
          >
            <template v-slot:append-outer>
              <v-btn
                icon
                type="submit"
              >
                <v-icon
                  large
                  color="blue-grey darken-2"
                >
                  mdi-comment-plus
                </v-icon>
              </v-btn>
            </template>
          </v-text-field>
        </v-form>
      </v-container>
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
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
      editDialog: false,
      deleteDialog: false,
      editCommentDialog: false,
      deleteCommentDialog: false,
      readonly: true,
      editedPost: {
        postContent: "",
      },
      comment: '',
      isVisible: false,
      likeIcon: 'mdi-heart',
      liked: false,
    }
  },

  methods: {
    time: function(timeRaw) {
      var timeParsed = moment(timeRaw).fromNow()
      return timeParsed
    },

    editPostContent: async function(id) {
      await PostService.getPostById(id).then(res => {
        this.editedPost = res.data.post
      })
    },

    cancel () {
      this.editDialog = false
    },

    onSubmit: async function() {
      const post = {
        post: this.editedPost
      }
      await PostService.updatePost(post)
      this.editDialog = false
      this.$parent.getPosts()
    },

    deletePost: async function(id) {
      await PostService.deletePost(id)
      this.deleteDialog = false
      this.$parent.getPosts()
    },

    sendComment: async function(id, comment) {
      await PostService.postComment(id, comment)
      this.clearComment()
      this.$parent.getPosts()
    },

    editCommentContent: async function(id) {
      console.log(id)
    },

    deleteComment: async function(postID, commentID) {
      await PostService.removeComment(postID, commentID)
      this.deleteCommentDialog = false
      this.$parent.getPosts()
    },
    
    clearComment() {
      this.comment = ''
    },

    toggleLike: function(id, likes) {
      var username = this.$store.state.username
      var obj = likes.find(o => o.by.username === username)

      if(obj) {
        this.unlikePost(id)
      } else {
        this.likePost(id)
      }
    },

    likePost: async function(id) {
      await PostService.likePost(id)
      this.$parent.getPosts()
    },
    
    unlikePost: async function(id) {
      await PostService.unlikePost(id)
      this.$parent.getPosts()
    },
  }
}
</script>

<style>
  .v-input__append-outer .v-icon {
    color: #37474f;
  }
  .comment-time {
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.375rem;
    letter-spacing: 0.0071428571em;
  }
  .comment-title {
    font-weight: 500;
  }
</style>
