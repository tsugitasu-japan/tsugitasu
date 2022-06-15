<template>
  <SignUpHeader></SignUpHeader>
  <SignUpContents></SignUpContents>
</template>

<script>
  import SignUpHeader from '../components/SignUpHeader.vue'
  import SignUpContents from '../components/SignUpContents.vue'

  export default{
    components:{
      SignUpHeader,
      SignUpContents,
    }
  }
</script>