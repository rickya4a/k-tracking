<template>
  <v-layout>
    <h1>StatusPage</h1>
    <ul>
      <li v-for="item in items" v-bind:key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </v-layout>
</template>
<script>
import axios from "axios";
export default {
    name: 'Status',
    data: () => ({
      items: []
    }),
    mounted () {
      axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(res => (this.items = res.data))
    }
};
</script>