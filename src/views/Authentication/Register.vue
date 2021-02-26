<template>
  <v-container fluid>
    <v-card max-width="800" class="mx-auto mt-5 pa-2">
      <v-card-title class="justify-center pb-3">
        <h2>Register</h2>
      </v-card-title>
      <v-divider></v-divider>
      <v-form ref="regForm" v-on:submit.prevent="onSubmit">
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
            @click:append="showPassword = !showPassword"
            spellcheck="false"
            :rules="rules"
            required
          />
        </v-container>
        <v-card-actions>
          <v-btn rounded depressed large color="error" @click.prevent="reset">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn rounded depressed large color="success" type="submit">Register</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: 'register',
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
    },
  }
}
</script>