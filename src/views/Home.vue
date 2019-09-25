<template>
  <v-layout>
    <p class="display-1">
      Dashboard
    </p>
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
