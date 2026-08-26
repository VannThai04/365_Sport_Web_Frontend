<script setup lang="ts">
import type { Product } from '~/type/product';


defineProps<{
  product: Product
}>()
</script>

<template>
  <div
    class="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
  >
    <!-- Image -->
    <div class="overflow-hidden">
      <img
        :src="product.image"
        :alt="product.name"
        class="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
      />
    </div>

    <!-- Content -->
    <div class="p-5">

      <!-- Product Name -->
      <h2 class="text-xl font-bold text-gray-800">
        {{ product.name }}
      </h2>

      <!-- Description -->
      <p class="mt-2 line-clamp-2 text-sm text-gray-500">
        {{ product.description }}
      </p>

      <!-- Bottom -->
      <div class="mt-5 flex items-center justify-between">

        <!-- Price -->
        <span class="text-2xl font-bold text-blue-600">
          ${{ product.price }}
        </span>

        <!-- Button -->
        <button
          class="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          Buy Now
        </button>

      </div>
    </div>
  </div>
</template>