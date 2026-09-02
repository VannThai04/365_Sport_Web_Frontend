<template>
  <div
    class="group relative w-full overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
  >
    <!-- Discount -->
    <div
      v-if="product.discount"
      class="absolute left-3 top-3 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white"
    >
      -{{ product.discount }}%
    </div>

    <!-- New Badge -->
    <div
      v-if="product.isNew"
      class="absolute right-3 top-3 z-10 rounded-full bg-black px-3 py-1 text-xs font-bold text-white"
    >
      NEW
    </div>

    <!-- Favorite -->
    <button
      @click="toggleFavorite"
      class="absolute bottom-[285px] right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110"
    >
      <span
        class="text-xl"
        :class="isFavorite ? 'text-red-500' : 'text-gray-500'"
      >
        {{ isFavorite ? "♥" : "♡" }}
      </span>
    </button>

    <!-- Product Image -->
    <NuxtLink
  :to="`/Product/${product.id}`"
  class="block h-64 w-full overflow-hidden bg-gray-100"
  @mouseenter="isHovered = true"
  @mouseleave="isHovered = false"
>
  <img
    :src="
      isHovered && product.hoverimg
        ? product.hoverimg
        : product.image
    "
    :alt="product.name"
    class="h-full w-full object-cover transition duration-500 group-hover:scale-105 cursor-grab active:cursor-grabbing"
  />
</NuxtLink>

    <!-- Product Information -->
    <div class="p-5">

      <!-- Brand / Category -->
      <div class="flex items-center justify-between">
        <p class="text-xs font-bold uppercase tracking-wider text-gray-400">
          {{ product.brand }}
        </p>

        <p class="text-xs text-gray-400">
          {{ product.category }}
        </p>
      </div>

      <!-- Name -->
      <NuxtLink :to="`/Product/${product.id}`">
  <h2
    class="line-clamp-2 min-h-[48px] text-lg font-bold text-gray-900 transition hover:text-blue-600"
  >
    {{ product.name }}
  </h2>
</NuxtLink>

      <!-- Rating -->
      <div class="mt-2 flex items-center gap-2">
        <div class="text-sm text-yellow-400">
          ★★★★★
        </div>

        <span class="text-sm text-gray-500">
          {{ product.rating }}
        </span>

        <span class="text-xs text-gray-400">
          ({{ product.reviews }})
        </span>
      </div>

      <!-- Description -->
      <p class="mt-2 line-clamp-2 text-sm leading-5 text-gray-500">
        {{ product.description }}
      </p>

      <!-- Color -->
      <div class="mt-3 flex items-center gap-2">
        <span class="text-xs font-medium text-gray-500">
          Color:
        </span>

        <span class="text-xs font-semibold text-gray-700">
          {{ product.color }}
        </span>
      </div>

      <!-- Price -->
      <div class="mt-4 flex items-center gap-3">
        <span class="text-2xl font-bold text-gray-900">
          ${{ product.price.toFixed(2) }}
        </span>

        <span
          v-if="product.discount"
          class="text-sm text-gray-400 line-through"
        >
          ${{ originalPrice }}
        </span>
      </div>

      <!-- Stock -->
      <div class="mt-2">
        <span
          v-if="product.stock > 0"
          class="text-xs font-medium text-green-600"
        >
          ✓ {{ product.stock }} in stock
        </span>

        <span
          v-else
          class="text-xs font-medium text-red-500"
        >
          Out of stock
        </span>
      </div>

      <!-- Buttons -->
      <div class="mt-5 flex gap-2">

        <!-- Add Cart -->
        <button
          :disabled="product.stock === 0"
          @click="addToCart"
          class="flex-1 rounded-xl bg-black px-4 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-gray-300 active:scale-95 cursor-pointer"
        >
          🛒 Add to Cart
        </button>

        <!-- Buy -->
        <button
          :disabled="product.stock === 0"
          @click="buyNow"
          class="rounded-xl border border-gray-200 px-4 py-3 font-semibold text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 active:scale-95 cursor-pointer"
        >
          Buy
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { Product } from "~/type/product";

const props = defineProps<{
  product: Product;
}>();

const isHovered = ref(false);
const isFavorite = ref(false);

// Calculate original price
const originalPrice = computed(() => {
  if (!props.product.discount) {
    return props.product.price.toFixed(2);
  }

  return (
    props.product.price /
    (1 - props.product.discount / 100)
  ).toFixed(2);
});

// Add to cart
const addToCart = () => {
  alert(`${props.product.name} added to cart!`);
};

// Favorite
const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};

// Buy now
const buyNow = () => {
  alert(`Buying ${props.product.name}`);
};
</script>
