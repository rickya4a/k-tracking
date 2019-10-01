<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        transition="fade-transition"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-alert
              v-show="authErr"
              class="elevation-21"
              type="error"
              dark
              transition="scale-transition"
              dismissible
            >
              Username atau password salah
            </v-alert>
            <v-card class="elevation-21">
              <v-toolbar
                color="success"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>
                <div class="flex-grow-1"></div>
              </v-toolbar>
              <v-card-text>
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                >
                  <v-text-field
                    label="Login"
                    name="username"
                    type="text"
                    prepend-icon="person"
                    v-model="username"
                    :rules="usernameRules"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    prepend-icon="lock"
                    v-model="password"
                    :rules="passwordRules"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="success"
                  @click="validate"
                  :disabled="!valid"
                >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
/* eslint-disable no-console */
export default {
  props: {
    source: String,
  },
  computed: {
    authErr () {
      return this.$store.getters.authErr
    }
  },
  data: () => ({
    alert: true,
    valid: true,
    username: '',
    usernameRules: [
      v => !!v || 'Username tidak boleh kosong',
      v => /\w/.test(v) || 'Username harus menggunakan alpha-numeric'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password tidak boleh kosong'
    ],
  }),
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        this.formHasErrors = false
        this.login()
      }
    },
    login () {
      let username = this.username
      let password = this.password
      this.$store.dispatch('login', {
        username,
        password
      })
      .then(() => {
        this.$router.push('/home/tracking')
      })
      .catch(err => console.log(err))
    }
  }
}
</script>