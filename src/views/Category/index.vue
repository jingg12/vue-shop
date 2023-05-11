<template>
  <div>
    <AppHeader/>
    <!-- <van-tabs v-model:active="active"  offset-top="50px"> -->
      <CFirst :firstList="firstList"/>
    <!-- </van-tabs> -->
    <nav-bar></nav-bar>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import NavBar from '@/components/NavBar.vue'
import CFirst from './components/CFirst.vue';
// import CSecond from './components/CSecond.vue';
import { useCategoryStore } from "../../store/category";

// const active = ref(0);
const categoryStore = useCategoryStore()
const firstList = computed(() => categoryStore.firstList)
const categoryData = computed(() => categoryStore.categoryData)
onMounted(async () => {
    await categoryStore.getCategoryData()
    
})
</script>

<style scoped>

</style>