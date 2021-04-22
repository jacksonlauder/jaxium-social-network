<template>
  <v-container fluid>
    <v-card
      max-width="800"
      class="mx-auto mt-5 pa-2"
    >
      <v-card-title class="justify-center pb-3">
        <h2>Create a New Account</h2>
      </v-card-title>
      <v-divider />
      <v-form
        ref="regForm"
        @submit.prevent="onSubmit"
      >
        <v-container fluid>
          <v-text-field
            v-model="first"
            label="First Name"
            prepend-icon="mdi-account"
            spellcheck="false"
            :rules="rules"
            required
          />

          <v-text-field
            v-model="last"
            label="Last Name"
            prepend-icon="mdi-account"
            spellcheck="false"
            required
          />

          <v-text-field
            v-model="username"
            label="Username"
            prepend-icon="mdi-account-circle"
            autocapitalize="off"
            spellcheck="false"
            :rules="rules"
            required
          />

          <v-text-field
            v-model="email"
            label="Email"
            prepend-icon="mdi-email"
            autocapitalize="off"
            spellcheck="false"
            :rules="rules"
            required
          />

          <v-text-field
            v-model="password"
            autocapitalize="off"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            spellcheck="false"
            :rules="rules"
            required
            @click:append="showPassword = !showPassword"
          />
        </v-container>

        <v-card-actions class="d-flex flex-column">
          <v-btn
            block
            rounded
            depressed
            large
            color="blue-grey darken-1"
            type="submit"
            dark
          >
            <v-icon
              left
            >
              mdi-account-plus
            </v-icon>
            Create Account
          </v-btn>

          <v-btn
            rounded
            outlined
            depressed
            large
            color="blue-grey darken-2"
            class="mt-10"
            @click.prevent="reset"
          >
            <v-icon
              left
            >
              mdi-account-cancel
            </v-icon>
            Cancel
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import * as auth from '../../services/AuthService'
export default {
  name: 'Register',
  data: function () {
    return {
      rules: [
        v => !!v || 'Required'
      ],
      showPassword: false,
      username: '',
      password: '',
      first: '',
      last: '',
      email: ''
    }
  },  
  methods: {
    reset () {
      this.$refs.regForm.reset()
      this.$router.push({ name: 'SiteHome' })
    },
    onSubmit: async function () {
      const user = {
        username: this.username,
        password: this.password,
        first: this.first,
        last: this.last,
        email: this.email
      }
        const registerPromise = auth.registerUser(user)
        const loginPromise = auth.login(user)
        await Promise.all([registerPromise, loginPromise])
        this.$router.push({ name: 'UserHome', params: { username: this.$store.state.username }})
    }
  }
}
</script>

<style scoped>
  .theme--light.v-card {
    background: rgba( 255, 255, 255, 0.25 );
  }
  .v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: 0 8px 32px 0 #546e7a8f;
  }
  .v-sheet.v-card {
    border-radius: 10px;
  }
  .v-card > *:first-child:not(.v-btn):not(.v-chip), .v-card > .v-card__progress + *:not(.v-btn):not(.v-chip) {
    border-radius: 10px;
  }
</style>
