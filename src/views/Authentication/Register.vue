<template>
  <v-container fluid>
    <v-card
      max-width="800"
      class="mx-auto mt-5 pa-2"
    >
      <v-card-title class="justify-center pb-3">
        <h2>Register</h2>
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
        <v-card-actions>
          <v-btn
            rounded
            depressed
            large
            color="error"
            @click.prevent="reset"
          >
            <v-icon
              left
              dark
            >
              mdi-account-cancel
            </v-icon>
            Cancel
          </v-btn>
          <v-spacer />
          <v-btn
            rounded
            depressed
            large
            color="success"
            type="submit"
          >
            <v-icon
              left
              dark
            >
              mdi-account-plus
            </v-icon>
            Register
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>

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
      is_admin: ''
    }
  },  
  methods: {
    reset () {
      this.$refs.regForm.reset()
      this.$router.push({ name: 'SiteHome' })
    },
  }
}
</script>
