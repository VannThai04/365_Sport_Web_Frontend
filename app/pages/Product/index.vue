```vue
<script setup lang="ts">

import { computed, ref } from "vue";
import { products } from "~/data/product";

definePageMeta({
  layout: "user"
});


// Search
const search = ref("");

// Filters
const selectedCategory = ref("All");
const selectedBrand = ref("All");
const selectedGender = ref("All");

const minPrice = ref(0);
const maxPrice = ref(1000);

// Sort
const sortBy = ref("featured");


// Filter options
const categories = [
  "All",
  "Football",
  "Running",
  "Basketball",
  "Training",
  "Clothing",
  "Accessories"
];

const brands = [
  "All",
  "Mizuno",
  "Nike",
  "Adidas",
  "Puma",
  "New Balance"
];

const genders = [
  "All",
  "Men",
  "Women",
  "Unisex"
];


// Filter products
const filteredProducts = computed(() => {

  let result = products.filter((product) => {

    const matchSearch =
      product.name
        .toLowerCase()
        .includes(search.value.toLowerCase());

    const matchCategory =
      selectedCategory.value === "All" ||
      product.category === selectedCategory.value;

    const matchBrand =
      selectedBrand.value === "All" ||
      product.brand === selectedBrand.value;

    const matchGender =
      selectedGender.value === "All" ||
      product.gender === selectedGender.value;

    const matchPrice =
      product.price >= minPrice.value &&
      product.price <= maxPrice.value;

    return (
      matchSearch &&
      matchCategory &&
      matchBrand &&
      matchGender &&
      matchPrice
    );

  });


  // Sort
  if (sortBy.value === "low") {
    result.sort((a, b) => a.price - b.price);
  }

  if (sortBy.value === "high") {
    result.sort((a, b) => b.price - a.price);
  }

  if (sortBy.value === "name") {
    result.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  return result;

});


// Clear filters
const clearFilters = () => {

  search.value = "";

  selectedCategory.value = "All";
  selectedBrand.value = "All";
  selectedGender.value = "All";

  minPrice.value = 0;
  maxPrice.value = 1000;

  sortBy.value = "featured";

};

</script>


<template>

  <!-- Full Width Page -->
  <div class="h-screen overflow-hidden bg-gray-100 mx-5">


    <!-- ============================== -->
    <!-- SEARCH HEADER -->
    <!-- ============================== -->

    <div
      class="h-[85px] w-full border-b border-gray-200 bg-white"
    >

      <div
        class="flex h-full w-full items-center gap-4 px-5 sm:px-8"
      >

        <!-- Search -->
        <div class="relative flex-1">

          <input
            v-model="search"
            type="text"
            placeholder="Search products..."
            class="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 pl-12 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
          />

          <span
            class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          >
            🔍
          </span>

        </div>


        <!-- Sort -->
        <select
          v-model="sortBy"
          class="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
        >

          <option value="featured">
            Featured
          </option>

          <option value="low">
            Price: Low to High
          </option>

          <option value="high">
            Price: High to Low
          </option>

          <option value="name">
            Name
          </option>

        </select>

      </div>

    </div>


    <!-- ============================== -->
    <!-- MAIN FULL WIDTH -->
    <!-- ============================== -->

    <div class="flex h-[calc(100vh-85px)] w-full">


      <!-- ============================== -->
      <!-- FILTER SIDEBAR -->
      <!-- ============================== -->

      <aside
        class="hidden w-72 shrink-0 overflow-y-auto border-r border-gray-200 bg-white p-6 lg:block"
      >

        <!-- Filter Header -->
        <div class="flex items-center justify-between">

          <h2 class="text-xl font-bold text-gray-900">
            Filters
          </h2>

          <button
            @click="clearFilters"
            class="text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            Clear
          </button>

        </div>


        <!-- Category -->
        <div class="mt-8">

          <h3 class="mb-4 font-semibold text-gray-900">
            Category
          </h3>

          <div class="space-y-3">

            <label
              v-for="category in categories"
              :key="category"
              class="flex cursor-pointer items-center gap-3 text-sm text-gray-600 transition hover:text-gray-900"
            >

              <input
                v-model="selectedCategory"
                type="radio"
                :value="category"
                class="h-4 w-4 accent-blue-600"
              />

              {{ category }}

            </label>

          </div>

        </div>


        <!-- Brand -->
        <div class="mt-8 border-t border-gray-100 pt-7">

          <h3 class="mb-4 font-semibold text-gray-900">
            Brand
          </h3>

          <div class="space-y-3">

            <label
              v-for="brand in brands"
              :key="brand"
              class="flex cursor-pointer items-center gap-3 text-sm text-gray-600 transition hover:text-gray-900"
            >

              <input
                v-model="selectedBrand"
                type="radio"
                :value="brand"
                class="h-4 w-4 accent-blue-600"
              />

              {{ brand }}

            </label>

          </div>

        </div>


        <!-- Gender -->
        <div class="mt-8 border-t border-gray-100 pt-7">

          <h3 class="mb-4 font-semibold text-gray-900">
            Gender
          </h3>

          <div class="space-y-3">

            <label
              v-for="gender in genders"
              :key="gender"
              class="flex cursor-pointer items-center gap-3 text-sm text-gray-600 transition hover:text-gray-900"
            >

              <input
                v-model="selectedGender"
                type="radio"
                :value="gender"
                class="h-4 w-4 accent-blue-600"
              />

              {{ gender }}

            </label>

          </div>

        </div>


        <!-- Price -->
        <div class="mt-8 border-t border-gray-100 pt-7">

          <h3 class="mb-4 font-semibold text-gray-900">
            Price Range
          </h3>

          <div class="flex items-center gap-2">

            <input
              v-model.number="minPrice"
              type="number"
              placeholder="Min"
              class="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500"
            />

            <span class="text-gray-400">
              -
            </span>

            <input
              v-model.number="maxPrice"
              type="number"
              placeholder="Max"
              class="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500"
            />

          </div>

        </div>


        <!-- Reset -->
        <button
          @click="clearFilters"
          class="mt-8 w-full rounded-xl border border-gray-200 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
        >
          Reset Filters
        </button>

      </aside>


      <!-- ============================== -->
      <!-- PRODUCT AREA -->
      <!-- ============================== -->

      <main
        class="flex-1 overflow-y-auto p-5 sm:p-8"
      >

        <!-- Header -->
        <div class="mb-6 flex items-center justify-between">

          <div>

            <h1 class="text-2xl font-bold text-gray-900">
              All Products
            </h1>

            <p class="mt-1 text-sm text-gray-500">
              {{ filteredProducts.length }} products found
            </p>

          </div>

        </div>


        <!-- Product Grid -->
        <div
          v-if="filteredProducts.length"
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
        >

          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />

        </div>


        <!-- No Products -->
        <div
          v-else
          class="flex min-h-[500px] items-center justify-center rounded-2xl bg-white"
        >

          <div class="text-center">

            <div class="text-5xl">
              🔍
            </div>

            <h2 class="mt-4 text-xl font-bold text-gray-900">
              No products found
            </h2>

            <p class="mt-2 text-gray-500">
              Try changing your search or filters.
            </p>

            <button
              @click="clearFilters"
              class="mt-5 rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
            >
              Clear Filters
            </button>

          </div>

        </div>

      </main>

    </div>

  </div>

</template>
```
