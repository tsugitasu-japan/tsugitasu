<template>
  <div class="profile">
    <LoginedHeader></LoginedHeader>
    <div class="content">
      <MyProfileEdit></MyProfileEdit>
    </div>
  </div>
</template>

<script>
import LoginedHeader from '../components/LoginedHeader.vue'
import MyProfileEdit from '../components/MyProfileEdit.vue'

export default {
  components: {
    LoginedHeader,
    MyProfileEdit,
  }
}
</script>