<template>
  <SignUpHeader></SignUpHeader>
  <CreateAuthInput></CreateAuthInput>
</template>

<script>
  import SignUpHeader from '../components/SignUpHeader.vue'
  import CreateAuthInput from '../components/CreateAuthInput.vue'

  export default{
    components:{
      SignUpHeader,
      CreateAuthInput
    }
  }
</script>