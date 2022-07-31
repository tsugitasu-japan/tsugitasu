<template>
  <div>
    <LogInHeader></LogInHeader>
    <ForgetPassword></ForgetPassword>
  </div>
</template>

<script>
import LogInHeader from '../components/LogInHeader.vue'
import ForgetPassword from '../components/ForgetPasswordContents.vue'

export default {
  components: {
    LogInHeader,
    ForgetPassword
  },
}
</script>