<template>
  <v-container fluid>
    <v-card
      max-width="800"
      class="mx-auto mt-5 pa-2"
    >
      <v-card-title class="justify-center pb-3">
        <h2>Login</h2>
      </v-card-title>
      <v-divider />
      <v-form
        ref="loginForm"
        @submit.prevent="onSubmit"
      >
        <v-container fluid>
          <v-text-field
            v-model="username"
            autocapitalize="off"
            label="Username"
            prepend-icon="mdi-account-circle"
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
              mdi-login
            </v-icon>
            Login
          </v-btn>
          
          <v-btn
            text
            block
            rounded
            depressed
            large
            color="blue-grey darken-2"
            class="mt-5 mx-0"
          >
            Forgot Password?
          </v-btn>

          <v-divider class="ma-4" />

          <v-btn
            rounded
            depressed
            large
            color="blue-grey darken-2"
            to="/register"
            block
            outlined
          >
            <v-icon
              left
            >
              mdi-account-plus
            </v-icon>
            Create New Account
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import * as auth from '../../services/AuthService'

export default {
  name: 'Login',
  data: function () {
    return {
      rules: [
        v => !!v || 'Required'
      ],
      showPassword: false,
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit: function() {
      auth.login()
      this.$router.push({ name: 'UserHome', params: { username: this.$store.state.username }})
      // this.$router.push({ name: 'SiteHome' })
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
