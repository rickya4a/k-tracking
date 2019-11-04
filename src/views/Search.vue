<template>
  <v-container>
    <v-card>
      <v-container>
        <v-alert
          v-show="emptyData"
          class="elevation-1"
          type="error"
          dark
          transition="scale-transition"
        >
          Data tidak ditemukan
        </v-alert>
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
                <v-date-picker v-model="date_from" no-title scrollable>
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
                <v-date-picker v-model="date_to" no-title scrollable>
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
            <v-btn
              color="warning"
              class="mr-4"
              elevation="5"
              @click="reset"
            >Reset</v-btn>
          </v-item-group>
        </v-form>
      </v-container>
    </v-card>

    <div class="my-5"></div>

    <v-expand-transition>
      <v-card class="mx-auto" v-show="showList">
        <v-simple-table>
          <thead>
            <tr>
              <th>No. Delivery Order</th>
              <th>No. Resi</th>
              <th>Tanggal Delivery Order</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in rows"
              :key="row.ID_DO"
              @click="getDetail(row.NO_DO)"
            >
              <td><a to="#">{{ row.NO_DO }}</a></td>
              <td>{{ row.NO_RESI }}</td>
              <td>{{ row.TANGGAL_DO }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
    </v-expand-transition>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    stockist: '',
    emptyData: false,
    valid: true,
    items: [],
    rows: '',
    showList: false,
    date_from: new Date().toISOString().substr(0, 10),
    date_to: new Date().toISOString().substr(0, 10),
    menu: false,
    menu2: false
  }),
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        this.submit()
        // this.reset()
      }
    },
    reset () {
      this.$refs.form.reset()
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
        if (response.data == '') this.emptyData = !this.emptyData
        this.showList = true
        this.rows = response.data
      })
      .catch(err => {
        if (err) throw err
      })
    },
    getDetail (no_do) {
      this.$store.commit('get_data', no_do)
      this.$router.push('/home/tracking')
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
    .catch(err => {
      if (err) throw err
    })
  }
}
</script>