<template>
  <div>
    <LogInHeader></LogInHeader>
    <LogInContents></LogInContents>
  </div>
  <!-- <Loading v-show="loading"></Loading> -->
</template>

<script>
import LogInHeader from '../components/LogInHeader.vue'
import LogInContents from '../components/LogInContents.vue'
// import Loading from '../components/Loading.vue'

export default {
  components: {
    LogInHeader,
    LogInContents,
    // Loading,
  },
  // computed: {
  //   loading() {
  //     return this.$store.getters["loading"];
  //   },
  // },
}
</script>