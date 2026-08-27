<script setup lang="ts">
interface Product {
  id: number
  name: string
  brand: string
  price: number
  image: string
  hoverImage: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Mercurial Vapor 16',
    brand: 'Nike',
    price: 129,
    image: 'https://www.prodirectsport.us/cdn/shop/files/4002042_main.jpg?v=1787766083&width=1000',
    hoverImage: 'https://cdn.shopify.com/s/files/1/0643/3216/9303/files/4000362_gallery_1.jpg?v=1787803617&width=800',
  },
  {
    id: 2,
    name: 'Predator Elite',
    brand: 'Adidas',
    price: 149,
    image: 'https://www.prodirectsport.us/cdn/shop/files/4002042_main.jpg?v=1787766083&width=1000',
    hoverImage: 'https://cdn.shopify.com/s/files/1/0643/3216/9303/files/4000362_gallery_1.jpg?v=1787803617&width=800',
  },
  {
    id: 3,
    name: 'Phantom GX 2',
    brand: 'Nike',
    price: 139,
    image: 'https://www.prodirectsport.us/cdn/shop/files/4002042_main.jpg?v=1787766083&width=1000',
    hoverImage: 'https://cdn.shopify.com/s/files/1/0643/3216/9303/files/4000362_gallery_1.jpg?v=1787803617&width=800',
  },
  {
    id: 4,
    name: 'F50 League',
    brand: 'Adidas',
    price: 119,
    image: 'https://www.prodirectsport.us/cdn/shop/files/4002042_main.jpg?v=1787766083&width=1000',
    hoverImage: 'https://cdn.shopify.com/s/files/1/0643/3216/9303/files/4000362_gallery_1.jpg?v=1787803617&width=800',
  },
]
</script>

<template>
  <div class="min-h-screen bg-gray-100 px-6 py-10">

    <!-- Category Title -->
    <div class="mx-auto mb-10 max-w-7xl">
      <h1 class="text-3xl font-bold text-gray-900">
        Soccer Shoes
      </h1>

      <p class="mt-2 text-gray-500">
        Find the perfect soccer shoes for your game.
      </p>
    </div>

    <!-- Product Cards -->
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >

      <div
        v-for="product in products"
        :key="product.id"
        class="group overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      >

        <!-- Product Image -->
        <div class="relative h-60 overflow-hidden bg-gray-100">

          <!-- Normal Image -->
          <img
            :src="product.image"
            :alt="product.name"
            class="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-0"
          />

          <!-- Hover Image -->
          <img
            :src="product.hoverImage"
            :alt="product.name"
            class="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
          />

          <!-- New Badge -->
          <span
            class="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white"
          >
            NEW
          </span>

        </div>

        <!-- Card Content -->
        <div class="p-5">

          <p class="text-sm text-gray-400">
            {{ product.brand }}
          </p>

          <h2 class="mt-1 text-lg font-bold text-gray-800">
            {{ product.name }}
          </h2>

          <div class="mt-4 flex items-center justify-between">

            <p class="text-xl font-bold text-gray-900">
              ${{ product.price }}
            </p>

            <button
              class="cursor-pointer rounded-xl border border-white/20 bg-blue-700/20 px-4 py-2 text-sm font-semibold  text-blue-900 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400/40 hover:shadow-blue-400/50"
            >
              Add Cart
            </button>

          </div>

        </div>

      </div>

    </div>
  </div>
</template>