<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <p class="display-1">
      Tracking Delivery Order
    </p>
    <v-text-field
      v-model="delivery"
      :rules="deliveryRules"
      label="No. DO."
      @change="getDetails"
      required
    ></v-text-field>

    <input type="hidden" v-model="id_do">

    <v-text-field
      v-model="courier"
      :rules="courierRules"
      label="Nama Kurir"
      required
    ></v-text-field>

    <v-text-field
      v-model="stockist"
      :rules="stockistRules"
      label="Kode Stockist"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Nama"
      required
    ></v-text-field>

    <v-text-field
      v-model="address"
      :rules="addressRules"
      label="Alamat"
      required
    ></v-text-field>

    <v-text-field
      v-model="warehouse"
      :rules="warehouseRules"
      label="Gudang"
      required
    ></v-text-field>

    <input type="hidden" v-model="id_warehouse">

    <v-text-field
      v-model="status"
      :rules="statusRules"
      label="Status"
      required
    ></v-text-field>

    <v-expand-transition>
      <v-card
        class="mx-auto divider"
        v-show="expand"
      >
        <v-card-title>Tracking Status</v-card-title>
        <v-simple-table>
          <thead>
            <tr>
              <!-- <th class="text-left">Deliver Order</th> -->
              <th class="text-left">Status</th>
              <th class="text-left">Created By</th>
              <th class="text-left">Created Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="detail in details" :key="detail.ID_DO">
              <!-- <td>{{ detail.NO_DO }}</td> -->
              <td>{{ detail.STATUS }}</td>
              <td>{{ detail.CREATED_BY }}</td>
              <td>{{ detail.CREATED_DATE }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
    </v-expand-transition>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      elevation="5"
      @click="validate"
    >
      Submit
    </v-btn>
    <v-btn
      color="warning"
      class="mr-4"
      elevation="5"
      @click="reset"
    >
      Reset
    </v-btn>
  </v-form>
</template>

<style scoped>
.divider {
  margin-top: .1em;
  margin-bottom: .75rem
}
</style>

<script>
/* eslint-disable */
import axios from "axios"
import uuid from "uuid/v4"
import moment from "moment"

  export default {
    data: () => ({
      expand: false,
      valid: true,
      id_do: '',
      id_warehouse: '',
      details: '',
      output: '',
      name: '',
      nameRules: [
        v => !!v || 'Name tidak boleh kosong',
        v => (v && v.length <= 20) || 'Name must be less than 10 characters',
      ],
      delivery: '',
      deliveryRules: [
        v => !!v || 'DO tidak boleh kosong'
      ],
      courier: '',
      courierRules: [
        v => !!v || 'Kurir tidak boleh kosong'
      ],
      address: '',
      addressRules: [
        v => !!v || 'Alamat tidak boleh kosong'
      ],
      warehouse: '',
      warehouseRules: [
        v => !!v || 'Gudang tidak boleh kosong'
      ],
      status: '',
      statusRules: [
        v => !!v || 'Status tidak boleh kosong'
      ],
      stockist: '',
      stockistRules: [
        v => !!v || 'Stokis tidak boleh kosong'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
          this.formHasErrors = false
          this.submit()
          this.reset()
          this.expand = false
        }
      },
      reset () {
        this.$refs.form.reset()
        this.expand = false
      },
      submit () {
        let current_datetime = moment(),
            formatted_date = current_datetime.format('YYYY-MM-DD HH:mm:ss'),
            items = {
              id_do: this.id_do,
              no_do: this.delivery,
              created_date: formatted_date,
              created_by: localStorage.getItem('username'),
              tanggal: formatted_date,
              status: this.status,
              id_warehouse: this.id_warehouse,
              id_tracking: uuid()
            }
        axios
        .post('http://192.168.91.22:3000/inputTracking', items)
          .then((response) => {
            this.output = response.data;
          })
          .catch((error) => {
            this.output = error;
          })
      },
      getDetails () {
        axios.all([
          axios.get('http://192.168.91.22:3000/tracking/' + this.delivery)
        ])
        .then(axios.spread((rows) => {
          // send detail
          this.id_do = rows.data[0][0].ID_DO;
          this.courier = rows.data[0][0].NAMA[1];
          this.stockist = rows.data[0][0].CODE_STOCKIES;
          this.name = rows.data[0][0].NAMA[0];
          this.address = rows.data[0][0].ALAMAT1;
          this.warehouse = rows.data[0][0].WAREHOUSE_NAME;
          this.id_warehouse = rows.data[0][0].ID_WAREHOUSE;

          // send status
          this.details = rows.data[1];
          this.expand = true;
        }))
        .catch((error) => {
          this.output = error
        })
      }
    },
  }
</script>