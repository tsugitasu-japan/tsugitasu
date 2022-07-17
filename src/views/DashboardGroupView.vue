<template>
  <div class="dashboard">
    <LoginedHeader></LoginedHeader>
    <div class="content">
      <DashboardSidebar></DashboardSidebar>
      <DashboardGroup></DashboardGroup>
    </div>
  </div>
</template>

<script>
import DashboardSidebar from '../components/DashboardSidebar.vue'
import DashboardGroup from '../components/DashboardGroup.vue'
import LoginedHeader from '../components/LoginedHeader.vue'

export default {
  components: {
    DashboardSidebar,
    DashboardGroup,
    LoginedHeader
  },
  methods: {
    getOnPageData(){
    this.$store.commit('getOnPageData' , {
      onPageData: 'myGroup'
    })
    }
    // getOnPageData() {
    //   this.$store.dispatch('setTimeGet', {
    //     onPageData: 'myGroup'
    //   })
    // }
  },
  created() {
    this.getOnPageData()
  }
}
</script>

<style scoped>
.content {
  display: flex;
}
</style>