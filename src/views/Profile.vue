<template>
  <div class="prpfile">
    <LoginedHeader></LoginedHeader>
    <div class="content">
      <MyProfile></MyProfile>
      <!-- <MyprofileChange></MyprofileChange> -->
    </div>
  </div>
</template>

<script>
import LoginedHeader from '../components/LoginedHeader.vue'
import MyProfile from '../components/MyProfile.vue'
// import MyprofileChange from '../components/MyprofileChange.vue'

export default {
  components: {
    LoginedHeader,
    MyProfile,
    // MyprofileChange,
  }
}
</script>