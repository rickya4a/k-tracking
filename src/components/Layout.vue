<template>
  <v-layout>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item to="/home">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
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

        <v-list-item to="/home/status">
          <v-list-item-action>
            <v-icon>mdi-chart-timeline-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Status</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="logout" v-if="isLoggedIn">
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
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
      <router-view/>
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
      this.$http.interceptors.response.use(undefined, function (err) {
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