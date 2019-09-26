<template>
  <v-card>
    <v-container>
    <v-card-title>{{ user }}</v-card-title>
    <v-card-text>Ubah Password</v-card-text>
      <v-form ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="oldPassword"
          :rules="oldPasswordRules"
          type="password"
          label="Password Lama"
          required
        ></v-text-field>

        <v-text-field
          v-model="newPassword"
          :rules="newPasswordRules"
          type="password"
          label="Password Baru"
          required
        ></v-text-field>

        <v-text-field
          v-model="confirmPassword"
          type="password"
          :rules="rules"
          label="Konfirmasi Password"
          required
        ></v-text-field>

        <v-item-group>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            elevation="5"
            @click="validate"
          >Submit</v-btn>

          <v-btn
            color="warning"
            class="mr-4"
            elevation="5"
            @click="reset"
          >Reset</v-btn>
        </v-item-group>

        <!-- Alert -->
        <v-snackbar
          v-model="snackbar"
          :timeout="timeout"
        >{{ text }}
          <v-btn color="blue" text @click="snackbar = false">
            Close
          </v-btn>
        </v-snackbar>
      </v-form>
    </v-container>
  </v-card>
</template>

<style scoped>
.v-item-group {
  margin-top: .05em;
  margin-bottom: .85rem
}
</style>

<script>
  export default {
    data: () => ({
      user: localStorage.getItem('username'),
      snackbar: false,
      timeout: 3000,
      text: '',
      valid: true,
      confirmPassword: '',
      oldPassword: '',
      oldPasswordRules: [
        v => !!v || 'Password lama tidak boleh kosong',
      ],
      newPassword: '',
      newPasswordRules: [
        v => !!v || 'Password baru tidak boleh kosong',
      ]
    }),

    computed: {
      rules () {
        const rules = []
        if (this.newPassword) {
          const rule =
            v => (!!v && v) === this.newPassword || "Password doesn't match"
          rules.push(rule)
        }
        return rules
      },
    },

    watch: {
      confirmPassword: 'validateField',
      newPassword: 'validateField',
    },

    methods: {
      validateField () {
        this.$refs.form.validate()
      },
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
          this.formHasErrors = false
          this.submit()
          this.reset()
        }
      },
      reset () {
        this.$refs.form.reset()
      },
    }
  }
</script>