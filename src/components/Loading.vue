<template>
  <div class="loading_display">
    <div class="lottie" ref="lottie"></div>
    <img src="../assets/logo-loading.svg" class="loading_logo">
  </div>
</template>

<script>
import lottie from 'lottie-web';
import animationData from '../assets/lottie/loading.json';

export default {
  mounted() {
    lottie.loadAnimation({
      container: this.$refs.lottie,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    });
  },
};
</script>

<style scoped lang="scss">
.loading_display {
  height: 100vh;
  width: 100%;
  background-color: #FFFFFF;
  position: relative;

  .lottie {
    width: 150px;
    height: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
  .loading_logo{
    position: absolute;
    bottom: 48px;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
  }
}
</style>