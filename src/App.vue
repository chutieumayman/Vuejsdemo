<template>
  <TheHeader/>
  <TheMenu/>
  <div class="container mt-4 mb-5 px-0 page-content">
    <RouterView />
  </div>
  <TheFooter/>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheMenu from '@/components/TheMenu.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

</script>
<style>
@import '@/assets/base.css';
@import '@/assets/bootstrap-min.css';
/* @import '@/assets/custom.css'; */
</style>
