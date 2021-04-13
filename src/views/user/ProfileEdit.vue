<template>
  <v-container
    fluid
    class="mt-10"
  >
    <v-card
      max-width="800"
      class="mx-auto mt-5 pa-2"
    >
      <v-form
        ref="editProfileForm"
        @submit.prevent="onSubmit"
      >
        <v-row
          justify="space-around"
          class="pt-10"
        >
          <!-- TODO: Add edit profile pic fab button -->
          <v-avatar
            class="profile"
            size="164"
          >
            <v-icon
              color="blue-grey darken-1"
              size="210"
            >
              mdi-account-circle
            </v-icon>
          </v-avatar>
        </v-row>
       
        <v-container fluid>
          <v-text-field
            v-model="$store.state.userFirstName"
            label="First Name"
            prepend-icon="mdi-account"
            spellcheck="false"
            :rules="rules"
            required
          />

          <v-text-field
            v-model="$store.state.userLastName"
            label="Last Name"
            prepend-icon="mdi-account"
            spellcheck="false"
            required
          />

          <v-text-field
            v-model="$store.state.username"
            label="Username"
            prepend-icon="mdi-account-circle"
            autocapitalize="off"
            spellcheck="false"
            :rules="rules"
            required
          />

          <v-text-field
            v-model="$store.state.userEmail"
            label="Email"
            prepend-icon="mdi-email"
            autocapitalize="off"
            spellcheck="false"
            :rules="rules"
            required
          />

          <v-text-field
            v-model="$store.state.userLocation"
            label="Location"
            prepend-icon="mdi-map-marker-outline"
            autocapitalize="off"
            spellcheck="false"
          />

          <v-text-field
            v-model="$store.state.userWebsite"
            label="Website"
            prepend-icon="mdi-link-variant"
            autocapitalize="off"
            spellcheck="false"
          />

          <v-textarea
            v-model="$store.state.userDescription"
            prepend-icon="mdi-text-account"
            auto-grow
            label="Bio"
            rows="3"
          />
        </v-container>
      
        <!-- TODO: v-if="$store.state.username === something.username" -->
        <v-card-actions>
          <v-btn
            dark
            outlined
            rounded
            depressed
            large
            color="blue-grey darken-2"
            @click.prevent="cancel"
          >
            Cancel
          </v-btn>

          <v-spacer />

          <v-btn
            dark
            rounded
            depressed
            large
            color="blue-grey darken-1"
            type="submit"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
// import * as UserService from '../../services/UserService';

export default {
  name: 'ProfileEdit',
  data: function () {
    return {
      rules: [
        v => !!v || 'Required'
      ],
      userData: null
    }
  },
  methods: {
    cancel: function() {
      this.$router.push({ name: 'profile', params: { username: this.$store.state.username }})
    },
    onSubmit: async function () {
      this.$router.push({ name: 'profile', params: { username: this.$store.state.username }})
    }
  }
}
</script>

