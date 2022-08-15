<template>
<div>
  <Navbar />
  <router-view />
</div>

</template>

<script>
import Navbar from '@/components/Navbar.vue'; //import Navarbar
export default{
  components:{
    Navbar,// for use navbar in template
  },
}

</script>


<style lang="scss"></style>
