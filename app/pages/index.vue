<script setup lang="ts">

import { products } from "~/data/product";

definePageMeta({
  layout: "user"
});

// Popular Products = Low Stock
const popularProducts = products
  .filter(product => product.stock <= 20)
  .slice(0, 4);

// Discount Products
const discountProducts = products
  .filter(product => product.discount > 0)
  .slice(0, 4);

</script>


<template>

  <div>

    <!-- ================= HERO ================= -->
    <Hero />


    <!-- ================= POPULAR PRODUCTS ================= -->
    <section class="bg-gray-100 py-14">

      <div class="mx-10 px-4 sm:px-6 lg:px-8">

        <!-- Section Header -->
        <div class="mb-8 flex items-end justify-between">

          <div>

            <div class="flex items-center gap-2">

              <span class="text-2xl">
                🔥
              </span>

              <h2 class="text-3xl font-bold text-gray-900">
                Popular Products
              </h2>

            </div>

            <p class="mt-2 text-gray-500">
              Popular products with limited stock
            </p>

          </div>


          <!-- View All -->
          <NuxtLink
            to="/Product"
            class="hidden font-semibold text-blue-600 transition hover:text-blue-800 sm:block"
          >
            View All →
          </NuxtLink>

        </div>


        <!-- Product Grid -->
        <div
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >

          <ProductCard
            v-for="product in popularProducts"
            :key="product.id"
            :product="product"
          />

        </div>


        <!-- Mobile View All -->
        <div class="mt-8 text-center sm:hidden">

          <NuxtLink
            to="/Product"
            class="font-semibold text-blue-600 transition hover:text-blue-800"
          >
            View All Products →
          </NuxtLink>

        </div>

      </div>

    </section>


    <!-- ================= DISCOUNT PRODUCTS ================= -->
    <section class="bg-white py-14">

      <div class="mx-10 px-4 sm:px-6 lg:px-8">

        <!-- Section Header -->
        <div class="mb-8 flex items-end justify-between">

          <div>

            <div class="flex items-center gap-2">

              <span class="text-2xl">
                🏷️
              </span>

              <h2 class="text-3xl font-bold text-gray-900">
                Discount Products
              </h2>

            </div>

            <p class="mt-2 text-gray-500">
              Get your favorite sports products at special prices
            </p>

          </div>


          <!-- View All -->
          <NuxtLink
            to="/Product"
            class="hidden font-semibold text-blue-600 transition hover:text-blue-800 sm:block"
          >
            View All →
          </NuxtLink>

        </div>


        <!-- Product Grid -->
        <div
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >

          <ProductCard
            v-for="product in discountProducts"
            :key="product.id"
            :product="product"
          />

        </div>


        <!-- Mobile View All -->
        <div class="mt-8 text-center sm:hidden">

          <NuxtLink
            to="/Product"
            class="font-semibold text-blue-600 transition hover:text-blue-800"
          >
            View All Products →
          </NuxtLink>

        </div>

      </div>

    </section>

  </div>

</template>