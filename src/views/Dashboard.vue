<template>
<div class="dashboard">
  <HeaderLogin></HeaderLogin>
  <div class="content">
    <DashboardSidebar></DashboardSidebar>
    <DashboardClass></DashboardClass>
  </div>
</div>
</template>

<script>
  import HeaderLogin from '../components/HeaderLogin.vue'
  import DashboardSidebar from '../components/DashboardSidebar.vue'
  import DashboardClass from '../components/DashboardClass.vue'

  export default{
    components:{
      HeaderLogin,
      DashboardSidebar,
      DashboardClass,
    }
  }
</script>

<style scoped>
.content{
  display: flex;
}
</style>