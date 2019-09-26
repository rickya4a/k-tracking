<template>
  <v-layout>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item
          link
          to="/home/#"
        >
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Hi, {{ user }}!</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/home/tracking">
          <v-list-item-action>
            <v-icon>mdi-truck-fast</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Tracking</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- <v-list-item to="/home/status">
          <v-list-item-action>
            <v-icon>mdi-chart-timeline-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Status</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->

        <v-list-item to="/home/setting">
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Setting</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template
        v-slot:append
        v-if="isLoggedIn"
      >
        <div class="pa-2">
          <v-btn
            block
            @click="logout"
            color="green"
            :elevation="10"
          >Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="green"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-container>
    <!-- Block content -->
      <router-view />
    <!-- Block content -->
    </v-container>

    <v-footer
      color="green"
      app
    >
      <span class="white--text">K-Link Indonesia &copy; 2019</span>
    </v-footer>
  </v-layout>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'Layout',
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      user: localStorage.getItem('username')
    }),
    computed : {
      isLoggedIn () {
        return this.$store.getters.isLoggedIn
      }
    },
    methods: {
      logout () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
    },
    created () {
      this.$http.interceptors.response.use(undefined, err => {
        return new Promise((resolve, reject) => {
          if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            this.$store.dispatch(logout)
          }
          throw err;
        });
      });
    }
    /* created () {
      this.$vuetify.theme.dark = true
    }, */
  }
</script>