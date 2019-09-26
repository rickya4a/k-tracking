<template>
  <v-layout>
    <v-card
      min-width="1042"
      min-height="350"
    >
      <v-card-title>Dashboard</v-card-title>
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
export default {
  props: {
    customData: Object
  }
}
</script>
