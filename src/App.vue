<template>
  <NavBarComp />
  <router-view/>
</template>

<script>
import NavBarComp from './components/NavBarComp.vue';

export default{
  components: { NavBarComp }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
