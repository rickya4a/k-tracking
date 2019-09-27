<template>
  <v-layout>
    <v-card>
      <v-card-title>Status</v-card-title>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item }}
        </li>
      </ul>
    </v-card>
  </v-layout>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>

<script>
import axios from 'axios'
export default {
  data: () => ({
    items: null
  }),
  mounted () {
    axios
    .get(process.env.VUE_APP_API_URL+'tracking')
    .then((response) => (this.items = response.data))
    .catch((error) => console.log(error))
  }
}
</script>
