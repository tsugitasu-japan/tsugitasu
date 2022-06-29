<template>
<div class="prpfile">
  <HeaderLogin></HeaderLogin>
  <div class="content">
    <MyProfile></MyProfile>
    <!-- <MyprofileChange></MyprofileChange> -->
  </div>
</div>
</template>

<script>
  import HeaderLogin from '../components/HeaderLogin.vue'
  import MyProfile from '../components/MyProfile.vue'
  // import MyprofileChange from '../components/MyprofileChange.vue'

  export default{
    components:{
      HeaderLogin,
      MyProfile,
      // MyprofileChange,
    }
  }
</script>