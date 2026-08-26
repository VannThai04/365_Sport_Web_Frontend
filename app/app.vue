<script setup lang="ts">
import ProductCard from './components/ProductCard.vue';
const product = {
  name: 'Nike Air Max',
  description: 'Comfortable running shoes',
  price: 120,
  image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff'
}

</script>


<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    <!-- <NuxtPage/> -->
  </div>
</template>
