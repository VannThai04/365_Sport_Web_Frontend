<script setup lang="ts">

import { products } from "~/data/product";

definePageMeta({
  layout: "user"
});

// Show only first 4 products
const homeProducts = products.slice(0, 8);

</script>


<template>

  <div>

    <!-- Hero -->
    <Hero />


    <!-- Featured Products -->
    <section class="bg-gray-100 py-12">

      <div class="mx-30 px-4 sm:px-6 lg:px-8">

        <!-- Header -->
        <div class="mb-8 flex items-center justify-between">

          <div>
            <h2 class="text-3xl font-bold text-gray-900">
              Featured Products
            </h2>

            <p class="mt-2 text-gray-500">
              Check out our popular sports products
            </p>
          </div>

          <!-- View All -->
          <NuxtLink
            to="/Product"
            class="font-semibold text-blue-600 transition hover:text-blue-800"
          >
            View All →
          </NuxtLink>

        </div>


        <!-- Product Grid -->
        <div
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >

          <ProductCard
            v-for="product in homeProducts"
            :key="product.id"
            :product="product"
          />

        </div>

      </div>

    </section>

  </div>

</template>