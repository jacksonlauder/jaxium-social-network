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

          <v-divider class="ma-4"></v-divider>

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
}
</script>
