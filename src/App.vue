<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <div class="wrapper"></div>

  <RouterView />
  <Footer />
</template>

<style scoped></style>
