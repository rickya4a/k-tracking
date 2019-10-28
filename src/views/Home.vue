<template>
  <v-layout>
    <v-card>
      <v-card-title>Status
        <div class="flex-grow-1"></div>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="5"
        :search="search"
        class="elevation-1"
        :loading="isLoading"
        loading-text="Memuat... Mohon tunggu"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.NO_DO }}</td>
          <td class="text-xs-right">{{ props.item.STATUS }}</td>
          <td class="text-xs-right">{{ props.item.TANGGAL }}</td>
          <td class="text-xs-right">{{ props.item.CREATED_BY }}</td>
        </template>
        <template v-slot:no-results>
          <v-container>
            <v-alert
              :value="true"
              type="error"
              text
              dense
              outlined
            >
              Pencarian untuk {{ search }} tidak ditemukan.
            </v-alert>
          </v-container>
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
/* eslint-disable no-console */
import axios from 'axios'

export default {
  data: () => ({
    search: "",
    isLoading: true,
    items: [],
    headers: [
      { text: 'No. DO', value: 'NO_DO' },
      { text: 'Status', value: 'STATUS' },
      { text: 'Tanggal', value: 'TANGGAL' },
      { text: 'Dibuat', value: 'CREATED_BY' }
    ]
  }),
  mounted () {
    axios
    .get(`${process.env.VUE_APP_API_URL}tracking`)
    .then((response) => this.items = response.data)
    .then(() => this.isLoading = !this.isLoading)
    .catch((error) => console.log(error))
  }
}
</script>
