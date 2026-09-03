<script setup lang="ts">
import { computed, ref } from "vue";
import { products } from "~/data/product";

definePageMeta({
  layout: "admin"
});

const search = ref("");
const selectedBrand = ref("All");
const selectedCategory = ref("All");

const filteredProducts = computed(() => {
  return products.filter((product) => {

    const matchSearch =
      product.name
        .toLowerCase()
        .includes(search.value.toLowerCase());

    const matchBrand =
      selectedBrand.value === "All" ||
      product.brand === selectedBrand.value;

    const matchCategory =
      selectedCategory.value === "All" ||
      product.category === selectedCategory.value;

    return matchSearch && matchBrand && matchCategory;
  });
});

const deleteProduct = (id: number) => {
  const product = products.find((item) => item.id === id);

  if (product) {
    alert(`Delete product: ${product.name}`);
  }
};
</script>

<template>
  <div class="space-y-6">

    <!-- Header -->
    <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

      <div>
        <h2 class="text-2xl font-bold">
          Products
        </h2>

        <p class="text-sm text-gray-500">
          Manage your sports products
        </p>
      </div>

      <button
        class="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
      >
        + Add Product
      </button>

    </div>

    <!-- Filters -->
    <div class="rounded-2xl border bg-white p-5 shadow-sm">

      <div class="grid gap-4 md:grid-cols-3">

        <input
          v-model="search"
          type="text"
          placeholder="Search products..."
          class="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black"
        />

        <select
          v-model="selectedBrand"
          class="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none"
        >
          <option>All</option>
          <option>Mizuno</option>
          <option>Nike</option>
          <option>Adidas</option>
          <option>Puma</option>
        </select>

        <select
          v-model="selectedCategory"
          class="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none"
        >
          <option>All</option>
          <option>Football Boots</option>
          <option>Football Jersey</option>
          <option>Football Clothing</option>
          <option>Football Bags</option>
          <option>Football Accessories</option>
          <option>Goalkeeper</option>
        </select>

      </div>

    </div>

    <!-- Product Table -->
    <div class="overflow-hidden rounded-2xl border bg-white shadow-sm">

      <div class="border-b px-6 py-5">
        <p class="text-sm text-gray-500">
          {{ filteredProducts.length }} products found
        </p>
      </div>

      <div class="overflow-x-auto">

        <table class="w-full text-left">

          <thead class="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th class="px-6 py-4">Product</th>
              <th class="px-6 py-4">Brand</th>
              <th class="px-6 py-4">Category</th>
              <th class="px-6 py-4">Price</th>
              <th class="px-6 py-4">Stock</th>
              <th class="px-6 py-4">Action</th>
            </tr>
          </thead>

          <tbody class="divide-y">

            <tr
              v-for="product in filteredProducts"
              :key="product.id"
              class="hover:bg-gray-50"
            >

              <!-- Product -->
              <td class="px-6 py-4">

                <div class="flex items-center gap-4">

                  <img
                    :src="product.image"
                    :alt="product.name"
                    class="h-14 w-14 rounded-xl object-cover"
                  />

                  <div>
                    <p class="font-semibold">
                      {{ product.name }}
                    </p>

                    <p class="text-xs text-gray-500">
                      ID: {{ product.id }}
                    </p>
                  </div>

                </div>

              </td>

              <td class="px-6 py-4">
                {{ product.brand }}
              </td>

              <td class="px-6 py-4">
                {{ product.category }}
              </td>

              <td class="px-6 py-4 font-semibold">
                ${{ product.price.toFixed(2) }}
              </td>

              <td class="px-6 py-4">

                <span
                  :class="
                    product.stock <= 10
                      ? 'text-red-600'
                      : 'text-green-600'
                  "
                  class="font-semibold"
                >
                  {{ product.stock }}
                </span>

              </td>

              <td class="px-6 py-4">

                <div class="flex gap-2">

                  <button
                    class="rounded-lg bg-gray-100 px-3 py-2 text-sm hover:bg-gray-200"
                  >
                    ✏️
                  </button>

                  <button
                    class="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600 hover:bg-red-100"
                    @click="deleteProduct(product.id)"
                  >
                    🗑️
                  </button>

                </div>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>
</template>