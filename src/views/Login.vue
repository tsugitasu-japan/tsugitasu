<template>
  <LogInHeader></LogInHeader>
  <LogInContents></LogInContents>
</template>

<script>
  import LogInHeader from '../components/LogInHeader.vue'
  import LogInContents from '../components/LogInContents.vue'

  export default{
    components:{
      LogInHeader,
      LogInContents,
    }
  }
</script>