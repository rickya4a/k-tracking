<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>

<style>
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
/* import Home from '../components/Home';
import Status from '../components/Status';
import Tracking from '../components/Tracking';

export default {
  components: {
    Home,
    Status,
    Tracking
  },
}; */
</script>
