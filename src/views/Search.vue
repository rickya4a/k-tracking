<template>
  <v-container>
    <v-card>
      <v-container>
        <v-card-title>Search Deliver Order</v-card-title>
        <v-form ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-row>
            <v-col>
              <v-overflow-btn
                v-model="stockist"
                :rules="[v => !!v || 'Stokist tidak boleh kosong']"
                :items="items"
                item-text="ID_STOCKIES"
                item-value="ID_STOCKIES"
                label="Stockist"
                required
                editable
                :loading="isLoading"
                cache-items
              >
                <template
                  slot="selection"
                  slot-scope="data"
                >{{ data.item.ID_STOCKIES }} - {{ data.item.NAMA_STOCKIES }}</template>
                <template
                  slot="item"
                  slot-scope="data"
                >{{ data.item.ID_STOCKIES }} - {{ data.item.NAMA_STOCKIES }}</template>
              </v-overflow-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col sm="6" md="6">
              <v-menu
                ref="from"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date_from"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date_from"
                    label="Tanggal dari"
                    prepend-icon="event"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date_from"
                  no-title
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">Batal</v-btn>
                  <v-btn text color="primary" @click="$refs.from.save(date_from)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>

            <v-col sm="6" md="6">
              <v-menu
                ref="to"
                v-model="menu2"
                :close-on-content-click="false"
                :return-value.sync="date_to"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date_to"
                    label="Tanggal sampai"
                    prepend-icon="event"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date_to"
                  no-title
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu2 = false">Batal</v-btn>
                  <v-btn text color="primary" @click="$refs.to.save(date_to)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
          </v-row>

          <v-item-group>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              elevation="5"
              @click="validate"
            >Submit</v-btn>
          </v-item-group>
        </v-form>
      </v-container>
    </v-card>

    <div class="my-5"></div>

    <v-expand-transition> <!-- table detail -->
      <v-card class="mx-auto" v-show="showList">
        <v-data-table
          :headers="headers"
          :items="items"
          :items-per-page="5"
        >
          <template v-slot:top>
            <v-dialog v-model="dialog"> <!-- modal form -->
              <v-card>
                <v-card-title>
                  <span class="headline">Edit DO</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.NO_DO"
                          label="No. Delivery Order"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.NO_RESI"
                          label="No. Resi"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.TANGGAL_DO"
                          label="Tanggal DO"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="12">
                        <v-text-field
                          v-model="editedItem.ALAMAT"
                          label="Alamat"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="editedItem.BERAT"
                          label="Berat"
                          @keypress="numFilter"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="editedItem.KOLI"
                          label="Koli"
                          @keypress="numFilter"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="12">
                        <v-text-field
                          v-model="editedItem.STATUS"
                          label="Status"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="close"
                  >Cancel</v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="save"
                  >Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog> <!-- end modal form -->
          </template>
          <template v-slot:item.action="{ item }">
            <v-icon
              small
              class="ml-3"
              @click="editItem(item)"
            >edit</v-icon>
          </template>
        </v-data-table>
      </v-card>
    </v-expand-transition> <!-- end table detail -->

  </v-container>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import axios from 'axios';
import uuid from "uuid/v4"
import moment from "moment"

export default {
  data: () => ({
    stockist: '',
    valid: true,
    items: [],
    dialog: false,
    showList: false,
    isLoading: true,
    editedIndex: -1,
    date_from: new Date().toISOString().substr(0, 10),
    date_to: new Date().toISOString().substr(0, 10),
    menu: false,
    menu2: false,
    headers: [
      { text: 'No. Delivery Order', value: 'NO_DO' },
      { text: 'No. Resi', value: 'NO_RESI' },
      { text: 'Tanggal DO', value: 'TANGGAL_DO' },
      { text: 'Actions', value: 'action', sortable: false }
    ],
    editedItem: {
      NO_DO: '',
      NO_RESI: '',
      TANGGAL_DO: '',
      ALAMAT: '',
      STATUS: '',
      KOLI: '',
      BERAT: ''
    },
    defaultItem: {
      NO_DO: '',
      NO_RESI: '',
      TANGGAL_DO: ''
    },
  }),
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        this.submit()
      }
    },
    submit () {
      let items = {
        id_stockies: this.stockist,
        tgl_awal: this.date_from,
        tgl_akhir: this.date_to,
        ekspedisi: localStorage.getItem('parent_courier')
      }
      axios
      .post(`${process.env.VUE_APP_API_URL}listDO`, items)
      .then(response => {
        this.showList = true
        this.items = response.data
      })
      .catch(err => {
        if (err) throw err
      })
    },
    getDetail (no_do) {
      this.$store.commit('get_data', no_do)
      this.$router.push('/home/tracking')
    },
    editItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    save () {
      if (this.editedIndex > -1) {
        console.dir(this.editedItem)
        let current_datetime = moment(),
          formatted_date = current_datetime.format('YYYY-MM-DD'),
          items = {
            id_do: this.editedItem.ID_DO,
            no_do: this.editedItem.NO_DO,
            created_date: formatted_date,
            created_by: localStorage.getItem('username'),
            tanggal: this.editedItem.TANGGAL_DO,
            status: this.editedItem.STATUS,
            id_warehouse: this.id_warehouse,
            koli: this.editedItem.KOLI,
            berat: this.editedItem.BERAT,
            id_tracking: uuid()
          }
        axios
        .post(`${process.env.VUE_APP_API_URL}inputTracking`, items)
        .then(response => {
          console.log('Success...')
        })
        .catch(error => {
          console.log(error)
        })
      } else {
        this.items.push(this.editedItem)
      }
      this.close()
    },
    // create number input filter
    numFilter (event) {
      event = (event) ? event : window.event
      let charCode = (event.which) ? event.which : event.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        event.preventDefault()
      } else {
        return true
      }
    }
  },
  mounted () {
    axios
    .get(`${process.env.VUE_APP_API_URL}getListStk`)
    .then(response => {
      for (let i = 0; i < response.data.length; i++) {
        this.items.push(response.data[i])
      }
    })
    .then(() => this.isLoading = !this.isLoading)
    .catch(err => {
      if (err) throw err
    })
  }
}
</script>