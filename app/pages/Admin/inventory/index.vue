<script setup lang="ts">
import { computed, ref } from "vue";
import { products } from "~/data/product";

definePageMeta({
  layout: "admin"
});

const search = ref("");

const inventory = computed(() => {
  return products.filter(product =>
    product.name
      .toLowerCase()
      .includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <div class="space-y-6">

    <div>
      <h2 class="text-2xl font-bold">
        Inventory
      </h2>

      <p class="text-sm text-gray-500">
        Monitor product stock levels
      </p>
    </div>

    <!-- Stats -->
    <div class="grid gap-4 sm:grid-cols-3">

      <div class="rounded-2xl border bg-white p-5">
        <p class="text-sm text-gray-500">
          Total Products
        </p>

        <p class="mt-2 text-2xl font-bold">
          {{ products.length }}
        </p>
      </div>

      <div class="rounded-2xl border bg-white p-5">
        <p class="text-sm text-gray-500">
          Low Stock
        </p>

        <p class="mt-2 text-2xl font-bold text-orange-600">
          {{ products.filter(p => p.stock <= 10).length }}
        </p>
      </div>

      <div class="rounded-2xl border bg-white p-5">
        <p class="text-sm text-gray-500">
          Out of Stock
        </p>

        <p class="mt-2 text-2xl font-bold text-red-600">
          0
        </p>
      </div>

    </div>

    <!-- Search -->
    <div class="rounded-2xl border bg-white p-5">

      <input
        v-model="search"
        placeholder="Search inventory..."
        class="w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
      />

    </div>

    <!-- Table -->
    <div class="overflow-hidden rounded-2xl border bg-white">

      <div class="overflow-x-auto">

        <table class="w-full text-left text-sm">

          <thead class="bg-gray-50 text-xs uppercase text-gray-500">

            <tr>
              <th class="px-6 py-4">Product</th>
              <th class="px-6 py-4">Brand</th>
              <th class="px-6 py-4">Price</th>
              <th class="px-6 py-4">Stock</th>
              <th class="px-6 py-4">Status</th>
              <th class="px-6 py-4">Action</th>
            </tr>

          </thead>

          <tbody class="divide-y">

            <tr
              v-for="product in inventory"
              :key="product.id"
              class="hover:bg-gray-50"
            >

              <td class="px-6 py-5 font-semibold">
                {{ product.name }}
              </td>

              <td class="px-6 py-5">
                {{ product.brand }}
              </td>

              <td class="px-6 py-5">
                ${{ product.price.toFixed(2) }}
              </td>

              <td class="px-6 py-5 font-bold">
                {{ product.stock }}
              </td>

              <td class="px-6 py-5">

                <span
                  class="rounded-full px-3 py-1 text-xs font-semibold"
                  :class="
                    product.stock === 0
                      ? 'bg-red-100 text-red-700'
                      : product.stock <= 10
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-green-100 text-green-700'
                  "
                >
                  {{
                    product.stock === 0
                      ? "Out of Stock"
                      : product.stock <= 10
                        ? "Low Stock"
                        : "In Stock"
                  }}
                </span>

              </td>

              <td class="px-6 py-5">

                <button
                  class="rounded-lg bg-black px-4 py-2 text-xs font-semibold text-white"
                >
                  Update Stock
                </button>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>
</template>