<script setup lang="ts">
import { computed, ref } from "vue";
import { products } from "~/data/product";

definePageMeta({
  layout: "admin",
});

const route = useRoute();

const productId = Number(route.params.id);

const product = ref(
  products.find((item) => item.id === productId),
);

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
  });
}

/* --------------------------------
   Stock
-------------------------------- */

const stock = ref(product.value?.stock ?? 0);

const minimumStock = ref(10);

const stockStatus = computed(() => {
  if (stock.value === 0) {
    return "Out of Stock";
  }

  if (stock.value <= minimumStock.value) {
    return "Low Stock";
  }

  return "In Stock";
});

const statusClass = computed(() => {
  if (stockStatus.value === "Out of Stock") {
    return "bg-red-100 text-red-700";
  }

  if (stockStatus.value === "Low Stock") {
    return "bg-orange-100 text-orange-700";
  }

  return "bg-green-100 text-green-700";
});

/* --------------------------------
   Stock Update
-------------------------------- */

const stockInput = ref(stock.value);

const updateStock = () => {
  const value = Number(stockInput.value);

  if (value < 0) {
    return;
  }

  stock.value = value;

  if (product.value) {
    product.value.stock = value;
  }
};

/* --------------------------------
   Quick Actions
-------------------------------- */

const addStock = (amount: number) => {
  stock.value += amount;
  stockInput.value = stock.value;

  if (product.value) {
    product.value.stock = stock.value;
  }
};

const removeStock = (amount: number) => {
  stock.value = Math.max(0, stock.value - amount);
  stockInput.value = stock.value;

  if (product.value) {
    product.value.stock = stock.value;
  }
};

/* --------------------------------
   Format
-------------------------------- */

const formatPrice = (price: number) => {
  return `$${price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};
</script>

<template>
  <div
    v-if="product"
    class="space-y-6"
  >

    <!-- Back -->
    <NuxtLink
      to="/admin/inventory"
      class="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black"
    >
      ← Back to Inventory
    </NuxtLink>

    <!-- Product Header -->
    <div
      class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
    >

      <div
        class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
      >

        <div class="flex items-center gap-5">

          <img
            :src="product.image"
            :alt="product.name"
            class="h-24 w-24 rounded-2xl object-cover"
          />

          <div>

            <div class="flex flex-wrap items-center gap-3">

              <h1 class="text-2xl font-bold">
                {{ product.name }}
              </h1>

              <span
                class="rounded-full px-3 py-1 text-xs font-semibold"
                :class="statusClass"
              >
                {{ stockStatus }}
              </span>

            </div>

            <p class="mt-2 text-sm text-gray-500">
              {{ product.brand }} · {{ product.category }}
            </p>

            <p class="mt-1 text-xs text-gray-400">
              Product ID: #{{ product.id }}
            </p>

          </div>

        </div>

        <NuxtLink
          :to="`/admin/products/${product.id}`"
          class="rounded-xl bg-black px-5 py-3 text-center text-sm font-semibold text-white hover:bg-gray-800"
        >
          View Product
        </NuxtLink>

      </div>

    </div>

    <!-- Stats -->
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      <div
        class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
      >

        <p class="text-sm text-gray-500">
          Current Stock
        </p>

        <p class="mt-2 text-3xl font-bold">
          {{ stock }}
        </p>

        <p class="mt-1 text-xs text-gray-400">
          Units available
        </p>

      </div>

      <div
        class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
      >

        <p class="text-sm text-gray-500">
          Product Price
        </p>

        <p class="mt-2 text-3xl font-bold">
          {{ formatPrice(product.price) }}
        </p>

      </div>

      <div
        class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
      >

        <p class="text-sm text-gray-500">
          Stock Value
        </p>

        <p class="mt-2 text-3xl font-bold">
          {{ formatPrice(product.price * stock) }}
        </p>

      </div>

      <div
        class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
      >

        <p class="text-sm text-gray-500">
          Minimum Stock
        </p>

        <p class="mt-2 text-3xl font-bold">
          {{ minimumStock }}
        </p>

        <p class="mt-1 text-xs text-gray-400">
          Alert threshold
        </p>

      </div>

    </div>

    <!-- Main -->
    <div class="grid gap-6 lg:grid-cols-3">

      <!-- Stock Management -->
      <div
        class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2"
      >

        <div>

          <h2 class="text-lg font-bold">
            Stock Management
          </h2>

          <p class="mt-1 text-sm text-gray-500">
            Update the available quantity for this product.
          </p>

        </div>

        <!-- Current -->
        <div class="mt-6 rounded-2xl bg-gray-50 p-6">

          <div class="flex items-center justify-between">

            <div>
              <p class="text-sm text-gray-500">
                Current Stock
              </p>

              <p class="mt-2 text-4xl font-bold">
                {{ stock }}
              </p>
            </div>

            <span
              class="rounded-full px-4 py-2 text-sm font-semibold"
              :class="statusClass"
            >
              {{ stockStatus }}
            </span>

          </div>

          <!-- Progress -->
          <div class="mt-6">

            <div class="mb-2 flex justify-between text-xs text-gray-500">

              <span>
                Stock Level
              </span>

              <span>
                {{ stock }} units
              </span>

            </div>

            <div class="h-3 overflow-hidden rounded-full bg-gray-200">

              <div
                class="h-full rounded-full transition-all"
                :class="
                  stock === 0
                    ? 'bg-red-500'
                    : stock <= minimumStock
                      ? 'bg-orange-500'
                      : 'bg-green-500'
                "
                :style="{
                  width: `${Math.min((stock / 100) * 100, 100)}%`,
                }"
              ></div>

            </div>

          </div>

        </div>

        <!-- Input -->
        <div class="mt-6">

          <label class="mb-2 block text-sm font-semibold">
            New Stock Quantity
          </label>

          <div class="flex gap-3">

            <input
              v-model.number="stockInput"
              type="number"
              min="0"
              class="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-lg font-semibold outline-none focus:border-black"
            />

            <button
              class="rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
              @click="updateStock"
            >
              Update
            </button>

          </div>

        </div>

        <!-- Quick -->
        <div class="mt-6">

          <p class="mb-3 text-sm font-semibold">
            Quick Adjustment
          </p>

          <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">

            <button
              class="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 hover:bg-green-100"
              @click="addStock(1)"
            >
              +1
            </button>

            <button
              class="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 hover:bg-green-100"
              @click="addStock(10)"
            >
              +10
            </button>

            <button
              class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 hover:bg-red-100"
              @click="removeStock(1)"
            >
              -1
            </button>

            <button
              class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 hover:bg-red-100"
              @click="removeStock(10)"
            >
              -10
            </button>

          </div>

        </div>

      </div>

      <!-- Product Information -->
      <div
        class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
      >

        <h2 class="text-lg font-bold">
          Product Information
        </h2>

        <div class="mt-5 space-y-5">

          <div>
            <p class="text-xs uppercase text-gray-400">
              Product
            </p>

            <p class="mt-1 font-semibold">
              {{ product.name }}
            </p>
          </div>

          <div>
            <p class="text-xs uppercase text-gray-400">
              Brand
            </p>

            <p class="mt-1 font-semibold">
              {{ product.brand }}
            </p>
          </div>

          <div>
            <p class="text-xs uppercase text-gray-400">
              Category
            </p>

            <p class="mt-1 font-semibold">
              {{ product.category }}
            </p>
          </div>

          <div>
            <p class="text-xs uppercase text-gray-400">
              Price
            </p>

            <p class="mt-1 font-semibold">
              {{ formatPrice(product.price) }}
            </p>
          </div>

          <div>
            <p class="text-xs uppercase text-gray-400">
              Status
            </p>

            <span
              class="mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold"
              :class="statusClass"
            >
              {{ stockStatus }}
            </span>
          </div>

        </div>

      </div>

    </div>

    <!-- Inventory History -->
    <div
      class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
    >

      <div class="border-b border-gray-200 p-6">

        <h2 class="text-lg font-bold">
          Stock History
        </h2>

        <p class="mt-1 text-sm text-gray-500">
          Recent inventory activity
        </p>

      </div>

      <div class="overflow-x-auto">

        <table class="w-full text-left text-sm">

          <thead class="bg-gray-50 text-xs uppercase text-gray-500">

            <tr>

              <th class="px-6 py-4">
                Date
              </th>

              <th class="px-6 py-4">
                Type
              </th>

              <th class="px-6 py-4">
                Quantity
              </th>

              <th class="px-6 py-4">
                Stock After
              </th>

              <th class="px-6 py-4">
                Note
              </th>

            </tr>

          </thead>

          <tbody class="divide-y divide-gray-100">

            <tr>

              <td class="px-6 py-5">
                September 3, 2026
              </td>

              <td class="px-6 py-5">
                <span
                  class="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700"
                >
                  Stock Added
                </span>
              </td>

              <td class="px-6 py-5 font-semibold">
                +10
              </td>

              <td class="px-6 py-5 font-semibold">
                {{ stock }}
              </td>

              <td class="px-6 py-5 text-gray-500">
                Restock
              </td>

            </tr>

            <tr>

              <td class="px-6 py-5">
                September 1, 2026
              </td>

              <td class="px-6 py-5">
                <span
                  class="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700"
                >
                  Sale
                </span>
              </td>

              <td class="px-6 py-5 font-semibold">
                -2
              </td>

              <td class="px-6 py-5 font-semibold">
                {{ Math.max(stock - 2, 0) }}
              </td>

              <td class="px-6 py-5 text-gray-500">
                Customer order
              </td>

            </tr>

            <tr>

              <td class="px-6 py-5">
                August 28, 2026
              </td>

              <td class="px-6 py-5">
                <span
                  class="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700"
                >
                  Adjustment
                </span>
              </td>

              <td class="px-6 py-5 font-semibold">
                +5
              </td>

              <td class="px-6 py-5 font-semibold">
                {{ Math.max(stock - 5, 0) }}
              </td>

              <td class="px-6 py-5 text-gray-500">
                Manual adjustment
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>
</template>