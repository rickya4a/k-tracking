<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item to="/">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/tracking">
          <v-list-item-action>
            <v-icon>mdi-truck-fast</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Tracking</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/status">
          <v-list-item-action>
            <v-icon>mdi-chart-timeline-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Status</v-list-item-title>
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
      <router-view></router-view>
    <!-- Block content -->
    </v-container>

    <v-footer
      color="green"
      app
    >
      <span class="white--text">K-Link Indonesia &copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'Home',
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    /* created () {
      this.$vuetify.theme.dark = true
    }, */
  }
</script>