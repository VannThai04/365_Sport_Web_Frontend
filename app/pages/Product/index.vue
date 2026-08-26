<script setup lang="ts">
import { products } from '~/data/product';


</script>

<template>
  <main class="min-h-screen bg-gray-100 px-6 py-10">

    <!-- Page Title -->
    <div class="mx-auto mb-10 max-w-7xl text-center">
      <h1 class="text-4xl font-bold text-gray-800">
        Our Products
      </h1>

      <p class="mt-2 text-gray-500">
        Choose your favorite laptop
      </p>
    </div>

    <!-- Product Grid -->
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >

      <!-- Product Card -->
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />

    </div>

  </main>
</template>