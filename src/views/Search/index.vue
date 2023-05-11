<template>
  <Header />
  <Guess />
  
  <router-view></router-view>
</template>

<script setup>
import Header from '@/views/Search/components/Header.vue'
import Guess from '@/views/Search/components/Guess.vue'
</script>

<style lang="stylus" scoped>

</style>