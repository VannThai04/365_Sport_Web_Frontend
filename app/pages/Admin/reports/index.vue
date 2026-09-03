<script setup lang="ts">
definePageMeta({
  layout: "admin"
});
</script>

<template>
  <div class="space-y-6">

    <div>
      <h2 class="text-2xl font-bold">
        Reports & Analytics
      </h2>

      <p class="text-sm text-gray-500">
        Analyze your store performance
      </p>
    </div>

    <!-- Revenue -->
    <div class="grid gap-5 lg:grid-cols-3">

      <div class="rounded-2xl border bg-white p-6">
        <p class="text-sm text-gray-500">
          Today's Sales
        </p>

        <p class="mt-2 text-3xl font-bold">
          $2,480
        </p>

        <p class="mt-2 text-sm text-green-600">
          +12.4%
        </p>
      </div>

      <div class="rounded-2xl border bg-white p-6">
        <p class="text-sm text-gray-500">
          This Month
        </p>

        <p class="mt-2 text-3xl font-bold">
          $24,580
        </p>

        <p class="mt-2 text-sm text-green-600">
          +18.2%
        </p>
      </div>

      <div class="rounded-2xl border bg-white p-6">
        <p class="text-sm text-gray-500">
          Average Order
        </p>

        <p class="mt-2 text-3xl font-bold">
          $87.50
        </p>

        <p class="mt-2 text-sm text-green-600">
          +5.7%
        </p>
      </div>

    </div>

    <!-- Sales Chart -->
    <div class="rounded-2xl border bg-white p-6">

      <h3 class="font-bold">
        Sales Performance
      </h3>

      <div class="mt-8 flex h-72 items-end gap-3">

        <div
          v-for="height in [40,55,48,70,62,80,68,92,75,85,78,96]"
          :key="height"
          class="flex-1 rounded-t-lg bg-black transition hover:bg-gray-600"
          :style="{ height: `${height}%` }"
        ></div>

      </div>

      <div class="mt-3 flex justify-between text-xs text-gray-400">
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>
        <span>Jul</span>
        <span>Aug</span>
        <span>Sep</span>
        <span>Oct</span>
        <span>Nov</span>
        <span>Dec</span>
      </div>

    </div>

    <!-- Reports -->
    <div class="grid gap-5 md:grid-cols-3">

      <button
        class="rounded-2xl border bg-white p-6 text-left transition hover:-translate-y-1 hover:shadow-md"
      >
        <span class="text-3xl">📊</span>

        <h3 class="mt-4 font-bold">
          Sales Report
        </h3>

        <p class="mt-1 text-sm text-gray-500">
          View detailed sales performance
        </p>
      </button>

      <button
        class="rounded-2xl border bg-white p-6 text-left transition hover:-translate-y-1 hover:shadow-md"
      >
        <span class="text-3xl">👟</span>

        <h3 class="mt-4 font-bold">
          Product Report
        </h3>

        <p class="mt-1 text-sm text-gray-500">
          Find your best-selling products
        </p>
      </button>

      <button
        class="rounded-2xl border bg-white p-6 text-left transition hover:-translate-y-1 hover:shadow-md"
      >
        <span class="text-3xl">👥</span>

        <h3 class="mt-4 font-bold">
          Customer Report
        </h3>

        <p class="mt-1 text-sm text-gray-500">
          Analyze customer activity
        </p>
      </button>

    </div>

  </div>
</template>