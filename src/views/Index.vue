<template>
<div>
  <Header></Header> 
  <router-link to="/dashboard/class">ダッシュボードへ遷移</router-link>
  <!-- <router-link to="/test">ラムダテストページへ</router-link>
  <router-link to="/cropper">Cropperテストページへ</router-link> -->
  <!-- emailは{{vuex}} -->
  <Loading></Loading>
</div>
</template>

<script>

import Loading from '../components/Loading.vue'
export default {
    components:{
      Loading
    },
  computed: {
    vuex(){
      return this.$store.state.UserProfileInfo.email
    }

  },
}
</script>
