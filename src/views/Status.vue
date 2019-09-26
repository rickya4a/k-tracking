<template>
  <v-app>
    <p class="display-1">
      Status
    </p>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item }}
      </li>
    </ul>
  </v-app>
</template>
<script>
/* eslint-disable no-console */
import axios from "axios";
export default {
  name: 'Status',
  data: () => ({
    items: null
  }),
  mounted () {
    axios
    .get('http://103.233.109.131:5500/tracking')
    .then((response) => (this.items = response.data))
    .catch((error) => console.log(error))
  }
};
</script>