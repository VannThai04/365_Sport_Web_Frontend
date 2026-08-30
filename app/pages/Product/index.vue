<template>
  <div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue'
import { products } from '~/data/product'
</script>