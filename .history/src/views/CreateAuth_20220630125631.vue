<template>
  <SignUpHeader></SignUpHeader>
  <CreateAuthContent></CreateAuthContent>
</template>

<script>
  import SignUpHeader from '../components/SignUpHeader.vue'
  import CreateAuthContent from '../components/CreateAuthContent.vue'

  export default{
    components:{
      SignUpHeader,
      CreateAuthContent
    }
  }
</script>