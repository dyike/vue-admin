<template>
  <div id="wrapper">
    <app-navbar></app-navbar>
    <div class="container-fluid" id="emcApp">
      <div class="row">
        <nav class="col-md-2 menu">
          <app-sidebar></app-sidebar>
        </nav>
        <div class="col-md-10 nopadding">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>


<script>
export default {
  components: {
    'app-navbar': require('./components/Navbar.vue'),
    'app-sidebar': require('./components/Sidebar.vue'),
    'app-footer': require('./components/Footer.vue')
  }
}
</script>

<style>
  .nopadding {
    padding: 0 !important;
    margin: 0 !important;
  }
  div.app-sidebar{
    background-color: #F8F8F8;
    position: absolute;
    top: 60px;
    bottom: 0;
    left: 0;
  }
  div.app-content{
    left: 16.6667%;
  }
</style>