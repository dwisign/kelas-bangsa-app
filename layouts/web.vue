<template>
  <div>
    <navbar />
    <nuxt />
    <footerweb />
  </div>
</template>

<script>
import Navbar from '~/components/web/Navbar.vue'
import Footerweb from '~/components/web/Footerweb.vue'
export default {
  components: {
    Navbar,
    Footerweb
  }
}
</script>

<style lang="scss">

</style>
