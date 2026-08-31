```vue
<template>
  <div class="min-h-screen bg-gray-100 py-10">

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <!-- Back Button -->
      <div class="mb-6">
        <NuxtLink
          to="/Product"
          class="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:-translate-x-1 hover:text-blue-600"
        >
          ← Back to Products
        </NuxtLink>
      </div>


      <!-- Product -->
      <div
        v-if="product"
        class="overflow-hidden rounded-2xl bg-white shadow-sm"
      >

        <div class="grid grid-cols-1 lg:grid-cols-2">

          <!-- ===================== -->
          <!-- Product Images -->
          <!-- ===================== -->

          <div class="p-5 sm:p-8">

            <!-- Main Image -->
            <div
              class="relative h-[400px] overflow-hidden rounded-2xl bg-gray-100 sm:h-[500px]"
            >

              <!-- Discount -->
              <span
                v-if="product.discount"
                class="absolute left-4 top-4 z-10 rounded-full bg-red-500 px-4 py-2 text-sm font-bold text-white"
              >
                -{{ product.discount }}%
              </span>

              <!-- New -->
              <span
                v-if="product.isNew"
                class="absolute right-4 top-4 z-10 rounded-full bg-black px-4 py-2 text-sm font-bold text-white"
              >
                NEW
              </span>

              <img
                :src="selectedImage"
                :alt="product.name"
                class="h-full w-full object-cover transition duration-500"
              />

            </div>


            <!-- Image Thumbnails -->
            <div class="mt-4 grid grid-cols-2 gap-4">

              <button
                @click="selectedImage = product.image"
                class="h-28 overflow-hidden rounded-xl border-2 transition"
                :class="
                  selectedImage === product.image
                    ? 'border-blue-600'
                    : 'border-transparent'
                "
              >
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="h-full w-full object-cover"
                />
              </button>


              <button
                v-if="product.hoverimg"
                @click="selectedImage = product.hoverimg"
                class="h-28 overflow-hidden rounded-xl border-2 transition"
                :class="
                  selectedImage === product.hoverimg
                    ? 'border-blue-600'
                    : 'border-transparent'
                "
              >
                <img
                  :src="product.hoverimg"
                  :alt="product.name"
                  class="h-full w-full object-cover"
                />
              </button>

            </div>

          </div>


          <!-- ===================== -->
          <!-- Product Information -->
          <!-- ===================== -->

          <div class="flex flex-col justify-center p-5 sm:p-8 lg:p-12">

            <!-- Brand -->
            <p
              class="text-sm font-bold uppercase tracking-widest text-blue-600"
            >
              {{ product.brand }}
            </p>


            <!-- Product Name -->
            <h1
              class="mt-2 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
            >
              {{ product.name }}
            </h1>


            <!-- Rating -->
            <div class="mt-4 flex flex-wrap items-center gap-3">

              <div class="text-lg text-yellow-400">
                ★★★★★
              </div>

              <span class="font-semibold text-gray-700">
                {{ product.rating }}
              </span>

              <span class="text-gray-400">
                ({{ product.reviews }} reviews)
              </span>

            </div>


            <!-- Price -->
            <div class="mt-6 flex items-center gap-4">

              <span class="text-3xl font-bold text-gray-900">
                ${{ product.price.toFixed(2) }}
              </span>

              <span
                v-if="product.discount"
                class="text-lg text-gray-400 line-through"
              >
                ${{ originalPrice.toFixed(2) }}
              </span>

            </div>


            <!-- Description -->
            <div class="mt-6">

              <h2 class="text-lg font-bold text-gray-900">
                Description
              </h2>

              <p class="mt-2 leading-7 text-gray-500">
                {{ product.description }}
              </p>

            </div>


            <!-- Product Details -->
            <div
              class="mt-6 grid grid-cols-2 gap-4 rounded-xl bg-gray-50 p-4"
            >

              <div>
                <p class="text-xs text-gray-400">
                  Category
                </p>

                <p class="mt-1 font-semibold text-gray-800">
                  {{ product.category }}
                </p>
              </div>


              <div>
                <p class="text-xs text-gray-400">
                  Brand
                </p>

                <p class="mt-1 font-semibold text-gray-800">
                  {{ product.brand }}
                </p>
              </div>


              <div>
                <p class="text-xs text-gray-400">
                  Gender
                </p>

                <p class="mt-1 font-semibold text-gray-800">
                  {{ product.gender }}
                </p>
              </div>


              <div>
                <p class="text-xs text-gray-400">
                  Color
                </p>

                <p class="mt-1 font-semibold text-gray-800">
                  {{ product.color }}
                </p>
              </div>

            </div>


            <!-- Size -->
            <div class="mt-6">

              <div class="flex items-center justify-between">

                <h2 class="font-bold text-gray-900">
                  Select Size
                </h2>

                <button
                  class="text-sm font-medium text-blue-600 hover:underline"
                >
                  Size Guide
                </button>

              </div>


              <div class="mt-3 flex flex-wrap gap-2">

                <button
                  v-for="size in product.size"
                  :key="size"
                  @click="selectedSize = size"
                  class="min-w-[50px] rounded-lg border px-4 py-2.5 text-sm font-semibold transition"
                  :class="
                    selectedSize === size
                      ? 'border-blue-600 bg-blue-600 text-white'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-blue-500'
                  "
                >
                  {{ size }}
                </button>

              </div>

            </div>


            <!-- Stock -->
            <div class="mt-5">

              <span
                v-if="product.stock > 0"
                class="font-medium text-green-600"
              >
                ✓ {{ product.stock }} items available
              </span>

              <span
                v-else
                class="font-medium text-red-500"
              >
                ✕ Out of stock
              </span>

            </div>


            <!-- Quantity -->
            <div class="mt-6 flex items-center gap-4">

              <span class="font-semibold text-gray-900">
                Quantity
              </span>

              <div
                class="flex items-center overflow-hidden rounded-lg border border-gray-200"
              >

                <button
                  @click="decreaseQuantity"
                  class="px-4 py-2 text-lg transition hover:bg-gray-100"
                >
                  −
                </button>

                <span class="px-5 py-2 font-semibold">
                  {{ quantity }}
                </span>

                <button
                  @click="increaseQuantity"
                  class="px-4 py-2 text-lg transition hover:bg-gray-100"
                >
                  +
                </button>

              </div>

            </div>


            <!-- Buttons -->
            <div class="mt-7 flex flex-col gap-3 sm:flex-row">

              <!-- Add Cart -->
              <button
                :disabled="product.stock === 0"
                @click="addToCart"
                class="flex-1 rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-md transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                🛒 Add to Cart
              </button>


              <!-- Wishlist -->
              <button
                @click="toggleWishlist"
                class="rounded-xl border border-gray-200 px-6 py-3.5 font-bold transition hover:border-red-300 hover:bg-red-50"
                :class="isFavorite ? 'text-red-500' : 'text-gray-700'"
              >
                {{ isFavorite ? "♥ Saved" : "♡ Wishlist" }}
              </button>

            </div>


            <!-- Buy Now -->
            <button
              :disabled="product.stock === 0"
              @click="buyNow"
              class="mt-3 w-full rounded-xl bg-black px-6 py-3.5 font-bold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              Buy Now
            </button>


            <!-- Features -->
            <div
              class="mt-8 grid grid-cols-1 gap-4 border-t border-gray-100 pt-6 sm:grid-cols-3"
            >

              <div class="text-center">

                <div class="text-2xl">
                  🚚
                </div>

                <p class="mt-1 text-sm font-semibold text-gray-800">
                  Fast Delivery
                </p>

                <p class="text-xs text-gray-400">
                  Quick shipping
                </p>

              </div>


              <div class="text-center">

                <div class="text-2xl">
                  🔄
                </div>

                <p class="mt-1 text-sm font-semibold text-gray-800">
                  Easy Returns
                </p>

                <p class="text-xs text-gray-400">
                  Simple return policy
                </p>

              </div>


              <div class="text-center">

                <div class="text-2xl">
                  🔒
                </div>

                <p class="mt-1 text-sm font-semibold text-gray-800">
                  Secure Payment
                </p>

                <p class="text-xs text-gray-400">
                  Safe checkout
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      <!-- Product Not Found -->
      <div
        v-else
        class="rounded-2xl bg-white p-16 text-center shadow-sm"
      >

        <div class="text-5xl">
          😕
        </div>

        <h2 class="mt-4 text-2xl font-bold text-gray-900">
          Product Not Found
        </h2>

        <p class="mt-2 text-gray-500">
          The product you're looking for doesn't exist.
        </p>

        <NuxtLink
          to="/Product"
          class="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Back to Products
        </NuxtLink>

      </div>

    </div>
  </div>
</template>


<script setup lang="ts">

import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { products } from "~/data/product";


// ============================
// Route
// ============================

const route = useRoute();


// ============================
// Find Product
// ============================

const product = computed(() => {

  return products.find(
    item => item.id === Number(route.params.id)
  );

});


// ============================
// Selected Image
// ============================

const selectedImage = ref(
  product.value?.image || ""
);


// ============================
// Selected Size
// ============================

const selectedSize = ref(
  product.value?.size?.[0] || ""
);


// ============================
// Quantity
// ============================

const quantity = ref(1);


// ============================
// Wishlist
// ============================

const isFavorite = ref(false);


// ============================
// Original Price
// ============================

const originalPrice = computed(() => {

  if (!product.value?.discount) {
    return product.value?.price || 0;
  }

  return (
    product.value.price /
    (1 - product.value.discount / 100)
  );

});


// ============================
// Quantity +
// ============================

const increaseQuantity = () => {

  if (
    product.value &&
    quantity.value < product.value.stock
  ) {
    quantity.value++;
  }

};


// ============================
// Quantity -
// ============================

const decreaseQuantity = () => {

  if (quantity.value > 1) {
    quantity.value--;
  }

};


// ============================
// Add Cart
// ============================

const addToCart = () => {

  if (!product.value) return;

  alert(
    `${product.value.name}\nSize: ${selectedSize.value}\nQuantity: ${quantity.value}\nAdded to cart!`
  );

};


// ============================
// Buy Now
// ============================

const buyNow = () => {

  if (!product.value) return;

  alert(
    `Buy Now\n${product.value.name}\nSize: ${selectedSize.value}\nQuantity: ${quantity.value}`
  );

};


// ============================
// Wishlist
// ============================

const toggleWishlist = () => {

  isFavorite.value = !isFavorite.value;

};

</script>