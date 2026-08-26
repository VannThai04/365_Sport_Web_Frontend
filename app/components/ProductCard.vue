<template>
  <div
    class="mt-3 m-3 w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
  >
    <!-- Product Image -->
    <img 
      :src="image"
      :alt="name"
      class="h-56 w-full object-cover hover:scale-110 transform duration-100"
    />

    <!-- Product Content -->
    <div class="p-5">
      <h2 class="mb-2 text-xl font-bold text-gray-800">
        {{ name }}
      </h2>

      <p class="mb-4 text-gray-600">
        {{ description }}
      </p>

      <div class="flex items-center justify-between">
        <span class="text-2xl font-bold text-blue-600">
          ${{ price }}
        </span>

        <button
          class="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 active:scale-95"
          @click="buyProduct"
        >
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Define data locally instead of using defineProps
const name = ref("Premium Wireless Headphones")
const description = ref("Experience industry-leading noise cancellation with our latest over-ear headphones.")
const price = ref(299.99)
const image = ref("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80")

const buyProduct = () => {
  alert("Product added!")
}
</script>