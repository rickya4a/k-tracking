<template>
  <v-layout>
    <v-card>
      <v-card-title>Status</v-card-title>
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="5"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td v-for="header in headers" :key="header.id_do">{{ props.item[header.value] }}</td>
        </template>
      </v-data-table>
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
    items: [

    ],
    headers: [
      {
        text: 'No. DO',
        sortable: false,
        value: 'no_do'
      },
      { text: 'Status', value: 'status' },
      { text: 'Tanggal', value: 'tanggal' },
      { text: 'Dibuat', value: 'created' }
    ]
  }),
  mounted () {
    axios
    .get(process.env.VUE_APP_API_URL+'tracking')
    .then((response) => (this.items = response.data.values))
    .catch((error) => console.log(error))
  }
}
</script>
