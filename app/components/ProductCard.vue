<template>
  <div class="w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-lg">
    <!-- Product Image -->
    <div
      class="h-56 w-full transform duration-200 ease-in-out cursor-grab"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <img
        :src="isHovered ? product.hoverimg : product.image"
        :alt="product.name"
        class="h-full w-full object-cover transition-all duration-300"
      />
    </div>

    <!-- Product Information -->
    <div class="p-4">
      <h2 class="text-lg font-bold text-gray-800">
        {{ product.name }}
      </h2>

      <p class="mt-2 text-xl font-semibold text-gray-700">
        ${{ product.price }}
      </p>

      <p class="mt-2 text-sm text-gray-500">
        {{ product.description }}
      </p>
    </div>
    <!-- Buttons -->
    <div class="mt-2 flex gap-2 p-3">
      <!-- Add to Cart -->
      <button
        class="flex-1 cursor-pointer rounded-xl border border-white/20 bg-blue-700/20 px-4 py-2 font-semibold text-blue-900 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400/40 hover:shadow-blue-400/50"
        @click="addToCart"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Product } from "~/type/product";

const props = defineProps<{
  product: Product;
}>();

const isHovered = ref(false);

const addToCart = () => {
  alert(`${props.product.name} added to cart!`);
};
</script>
