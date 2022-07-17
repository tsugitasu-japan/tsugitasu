<template>
  <div class="dashboard">
    <LoginedHeader></LoginedHeader>
    <div class="content">
      <DashboardSidebar></DashboardSidebar>
      <DashboardClass></DashboardClass>
    </div>
  </div>
</template>

<script>
import DashboardSidebar from '../components/DashboardSidebar.vue'
import DashboardClass from '../components/DashboardClass.vue'
import LoginedHeader from '../components/LoginedHeader.vue'

export default {
  components: {
    DashboardSidebar,
    DashboardClass,
    LoginedHeader
  },
  methods:{
    getOnPageData(){
    this.$store.commit('getOnPageData' , {
      onPageData: 'myClass'
    })
    }
  },
  created(){
    this.getOnPageData()
  }
}
</script>

<style scoped>
.content {
  display: flex;
}
</style>