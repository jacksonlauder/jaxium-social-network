<template>
  <v-container fluid>
    <v-dialog
      v-model="show"
      transition="fade-transition"
      scrollable
    >
      <v-card height="25rem">
        <v-container fluid>
          <v-row
            dense
          >
            <v-btn
              absolute
              large
              icon
              color="blue-grey darken-2"
              @click.prevent="cancel"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-card-title
              class="pa-0 mx-auto mt-1"
              color="blue-grey darken-2"
            >
              <h3>New Post</h3>
            </v-card-title>
          </v-row>

          <v-divider class="my-8" />

          <v-form
            ref="newPostForm"
            @submit.prevent="onSubmit"
          >
            <v-container fluid>
              <v-textarea
                v-model="postContent"
                outlined
                auto-grow
                label="Write something..."
                counter
                hide-details="auto"
              />

              <v-card-actions class="d-flex flex-column mb-5">
                <v-btn
                  dark
                  block
                  rounded
                  depressed
                  large
                  color="blue-grey darken-1"
                  type="submit"
                  @click="show = false"
                >
                  Post
                </v-btn>
              </v-card-actions>
            </v-container>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as PostService from '../services/PostService'

  export default {
    name: 'NewPost',

    props: {
      value: Boolean,
    },

    data: function () {
      return {
        postContent: '',
      }
    },

    computed: {
      show: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('input', value)
        }
      }
    },

    methods: {
      onSubmit: async function () {
        const post = {
          postContent: this.postContent
        }
        await PostService.createPost(post)
        this.postContent = ''
        this.$parent.getPosts()
      },

      cancel: function () {
        this.postContent = ''
        this.show = false
      }
    }
  }
</script>
