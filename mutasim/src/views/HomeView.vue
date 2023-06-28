<script setup>
import FilteringTable from '../components/FilteringTable.vue';
import InputBox from '../components/InputBox.vue';
import CustomCarousel from '../components/CustomCarousel.vue';
import PopupModal from '../components/PopupModal.vue';
</script>

<template>
  <main class="container">
    <InputBox />
    <FilteringTable />
    <CustomCarousel />
    <PopupModal />
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
