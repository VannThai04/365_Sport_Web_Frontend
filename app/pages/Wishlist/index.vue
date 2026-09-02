<template>
  <div class="min-h-screen bg-gray-100 py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- ========================================= -->
      <!-- Back Button -->
      <!-- ========================================= -->

      <div class="mb-6">
        <NuxtLink
          to="/Product"
          class="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:-translate-x-1 hover:border-blue-500 hover:text-blue-600"
        >
          <span class="text-lg"> ← </span>

          Back to Products
        </NuxtLink>
      </div>

      <!-- ========================================= -->
      <!-- Page Header -->
      <!-- ========================================= -->

      <div
        class="mb-8 flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between"
      >
        <!-- Title -->

        <div>
          <div class="flex items-center gap-3">
            <h1 class="text-3xl font-bold text-gray-900">My Wishlist</h1>

            <span class="text-2xl text-red-500"> ♥ </span>
          </div>

          <p class="mt-2 text-gray-500">
            Save your favorite sports products for later
          </p>
        </div>

        <!-- ======================================= -->
        <!-- Wishlist Count -->
        <!-- ======================================= -->

        <div class="flex items-center gap-3">
          <span
            class="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600"
          >
            {{ wishlist.length }}

            {{ wishlist.length === 1 ? "Item" : "Items" }}
          </span>

          <!-- Clear All -->

          <button
            v-if="wishlist.length > 0"
            @click="clearWishlist"
            class="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
          >
            Clear All
          </button>
        </div>
      </div>

      <!-- ========================================= -->
      <!-- Empty Wishlist -->
      <!-- ========================================= -->

      <div
        v-if="wishlist.length === 0"
        class="rounded-2xl bg-white px-6 py-20 text-center shadow-sm"
      >
        <!-- Heart -->

        <div class="text-6xl text-gray-300">♡</div>

        <!-- Title -->

        <h2 class="mt-5 text-2xl font-bold text-gray-900">
          Your wishlist is empty
        </h2>

        <!-- Description -->

        <p class="mx-auto mt-2 max-w-md text-gray-500">
          You haven't added any products to your wishlist yet. Explore our
          products and save your favorites here.
        </p>

        <!-- Start Shopping -->

        <NuxtLink
          to="/Product"
          class="mt-6 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Start Shopping
        </NuxtLink>
      </div>

      <!-- ========================================= -->
      <!-- Wishlist Products -->
      <!-- ========================================= -->

      <div
        v-else
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <!-- ======================================= -->
        <!-- Product Card -->
        <!-- ======================================= -->

        <div
          v-for="product in wishlist"
          :key="product.id"
          class="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <!-- ===================================== -->
          <!-- Product Image -->
          <!-- ===================================== -->

          <div class="relative h-64 overflow-hidden bg-gray-100">
            <NuxtLink
              :to="`/Product/${product.id}`"
              class="block h-full w-full"
            >
              <img
                :src="product.image"
                :alt="product.name"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </NuxtLink>

            <!-- Discount -->

            <span
              v-if="product.discount"
              class="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white"
            >
              -{{ product.discount }}%
            </span>

            <!-- New -->

            <span
              v-if="product.isNew"
              class="absolute right-3 top-3 rounded-full bg-black px-3 py-1 text-xs font-bold text-white"
            >
              NEW
            </span>

            <!-- ================================= -->
            <!-- Remove Wishlist -->
            <!-- ================================= -->

            <button
              @click="removeFromWishlist(product.id)"
              class="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-red-500 shadow-md transition hover:scale-110 hover:bg-red-50"
              title="Remove from wishlist"
            >
              ♥
            </button>
          </div>

          <!-- ===================================== -->
          <!-- Product Information -->
          <!-- ===================================== -->

          <div class="p-5">
            <!-- Brand / Category -->

            <div class="flex items-center justify-between">
              <p
                class="text-xs font-bold uppercase tracking-wider text-gray-400"
              >
                {{ product.brand }}
              </p>

              <p class="text-xs text-gray-400">
                {{ product.category }}
              </p>
            </div>

            <!-- ================================= -->
            <!-- Product Name -->
            <!-- ================================= -->

            <NuxtLink :to="`/Product/${product.id}`" class="mt-2 block">
              <h2
                class="line-clamp-2 min-h-12 text-lg font-bold text-gray-900 transition hover:text-blue-600"
              >
                {{ product.name }}
              </h2>
            </NuxtLink>

            <!-- ================================= -->
            <!-- Rating -->
            <!-- ================================= -->

            <div class="mt-2 flex items-center gap-2">
              <span class="text-sm text-yellow-400"> ★★★★★ </span>

              <span class="text-sm text-gray-500">
                {{ product.rating }}
              </span>

              <span class="text-xs text-gray-400">
                ({{ product.reviews }})
              </span>
            </div>

            <!-- ================================= -->
            <!-- Price -->
            <!-- ================================= -->

            <div class="mt-4 flex items-center gap-3">
              <!-- Current Price -->

              <span class="text-2xl font-bold text-gray-900">
                ${{ product.price.toFixed(2) }}
              </span>

              <!-- Original Price -->

              <span
                v-if="product.discount"
                class="text-sm text-gray-400 line-through"
              >
                ${{ originalPrice(product).toFixed(2) }}
              </span>
            </div>

            <!-- ================================= -->
            <!-- Stock -->
            <!-- ================================= -->

            <div class="mt-2">
              <!-- In Stock -->

              <span
                v-if="product.stock > 0"
                class="text-xs font-medium text-green-600"
              >
                ✓ {{ product.stock }} in stock
              </span>

              <!-- Out of Stock -->

              <span v-else class="text-xs font-medium text-red-500">
                Out of stock
              </span>
            </div>

            <!-- ================================= -->
            <!-- Buttons -->
            <!-- ================================= -->

            <div class="mt-5 flex gap-2">
              <!-- ================================= -->
              <!-- Add Cart -->
              <!-- ================================= -->

              <button
                :disabled="product.stock === 0"
                @click="addToCart(product)"
                class="flex-1 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                🛒 Add to Cart
              </button>

              <!-- ================================= -->
              <!-- Remove -->
              <!-- ================================= -->

              <button
                @click="removeFromWishlist(product.id)"
                class="rounded-xl border border-gray-200 px-4 py-3 font-semibold text-gray-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                title="Remove from wishlist"
              >
                🗑
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- ========================================= -->
      <!-- Continue Shopping -->
      <!-- ========================================= -->

      <div class="mt-10 flex justify-center">
        <NuxtLink
          to="/Product"
          class="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-600"
        >
          ← Continue Shopping
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/type/product";
import { useWishlist } from "~/composables/useWishlist";
import { navigateTo } from "#app/composables/router";

// ===============================================
// Wishlist
// ===============================================

const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();

// ===============================================
// Add To Cart
// ===============================================

const addToCart = (product: Product) => {
  navigateTo(`/Product/${product.id}`);
};

// ===============================================
// Original Price
// ===============================================

const originalPrice = (product: Product) => {
  if (!product.discount) {
    return product.price;
  }

  return product.price / (1 - product.discount / 100);
};
</script>
