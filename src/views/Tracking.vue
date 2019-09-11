<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <transition name="slide">
      <h1>Tracking DO</h1>
    </transition>
    <v-text-field
      v-model="delivery"
      :rules="deliveryRules"
      label="No. DO."
      required
    ></v-text-field>

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

    <v-text-field
      v-model="status"
      :rules="statusRules"
      label="Status"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Submit
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      delivery: '',
      deliveryRules: [
        v => !!v || 'DO is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      courier: '',
      courierRules: [
        v => !!v || 'Courier is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      address: '',
      addressRules: [
        v => !!v || 'Address is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      warehouse: '',
      warehouseRules: [
        v => !!v || 'Warehouse is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      status: '',
      statusRules: [
        v => !!v || 'Status is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      stockist: '',
      stockistRules: [
        v => !!v || 'Stockist is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>