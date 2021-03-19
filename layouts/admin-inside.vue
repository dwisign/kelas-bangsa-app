<template>
  <body class="admin-inside">
    <div class="wrap">
      <topbar />
      <div class="row no-gutters">
        <div class="col-2">
          <navbar />
        </div>
        <div class="col-10">
          <div class="content-inside">
              <nuxt />
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import Navbar from '~/components/admin/Navbar.vue'
import Topbar from '~/components/admin/Topbar.vue'
export default {
  components: {
    Navbar,
    Topbar
  }
}
</script>

<style lang="scss">
  .admin-inside{
    overflow-y: hidden;
    height: 100vh;
  }
  .content-inside{
      padding: 40px 30px;
      height: 80vh;
      overflow-y: auto;
  }
</style>
