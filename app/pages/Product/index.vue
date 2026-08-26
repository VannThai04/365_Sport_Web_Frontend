<template>
  <div
    class="w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
  >
    <!-- Product Image -->
    <img
      :src="image"
      :alt="name"
      class="h-56 w-full object-cover"
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
defineProps<{
  name: string
  description: string
  price: number
  image: string
}>()

const buyProduct = () => {
  alert("Product added!")
}
</script>