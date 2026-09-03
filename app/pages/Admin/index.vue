<script setup lang="ts">
definePageMeta({
  layout: "admin"
});

const stats = [
  {
    title: "Total Revenue",
    value: "$24,580",
    change: "+12.5%",
    icon: "💰"
  },
  {
    title: "Total Orders",
    value: "1,248",
    change: "+8.2%",
    icon: "🛒"
  },
  {
    title: "Products",
    value: "356",
    change: "+5.4%",
    icon: "👟"
  },
  {
    title: "Customers",
    value: "8,492",
    change: "+14.3%",
    icon: "👥"
  }
];

const orders = [
  {
    id: "#ORD-1001",
    customer: "Dara Sok",
    product: "Nike Mercurial Vapor 16",
    amount: "$151.97",
    status: "Completed"
  },
  {
    id: "#ORD-1002",
    customer: "Vann Thai",
    product: "Adidas Predator Elite",
    amount: "$260.00",
    status: "Processing"
  },
  {
    id: "#ORD-1003",
    customer: "Seyha Chan",
    product: "PUMA Future 8 Ultimate",
    amount: "$113.99",
    status: "Pending"
  },
  {
    id: "#ORD-1004",
    customer: "Sokha Kim",
    product: "Nike Phantom GX 2",
    amount: "$220.00",
    status: "Completed"
  }
];
</script>

<template>
  <div class="space-y-8">

    <!-- Page Title -->
    <div>
      <h2 class="text-2xl font-bold text-gray-900">
        Dashboard
      </h2>

      <p class="mt-1 text-sm text-gray-500">
        Welcome back, Admin. Here's what's happening with your store.
      </p>
    </div>

    <!-- Statistics -->
    <div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

      <div
        v-for="stat in stats"
        :key="stat.title"
        class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
      >
        <div class="flex items-start justify-between">

          <div>
            <p class="text-sm text-gray-500">
              {{ stat.title }}
            </p>

            <h3 class="mt-2 text-3xl font-bold text-gray-900">
              {{ stat.value }}
            </h3>

            <p class="mt-2 text-sm font-medium text-green-600">
              {{ stat.change }}
              <span class="font-normal text-gray-400">
                from last month
              </span>
            </p>
          </div>

          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-2xl"
          >
            {{ stat.icon }}
          </div>

        </div>
      </div>

    </div>

    <!-- Main Grid -->
    <div class="grid gap-6 xl:grid-cols-3">

      <!-- Sales -->
      <div
        class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm xl:col-span-2"
      >

        <div class="flex items-center justify-between">

          <div>
            <h3 class="font-bold text-gray-900">
              Sales Overview
            </h3>

            <p class="text-sm text-gray-500">
              Monthly revenue performance
            </p>
          </div>

          <select
            class="rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none"
          >
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 6 months</option>
            <option>This year</option>
          </select>

        </div>

        <!-- Fake Chart -->
        <div class="mt-8 flex h-64 items-end gap-3">

          <div
            v-for="height in [35, 48, 40, 65, 55, 72, 60, 82, 70, 90, 75, 96]"
            :key="height"
            class="group flex flex-1 flex-col justify-end"
          >
            <div
              class="w-full rounded-t-lg bg-black transition group-hover:bg-gray-600"
              :style="{ height: `${height}%` }"
            ></div>
          </div>

        </div>

        <div class="mt-4 flex justify-between text-xs text-gray-400">
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

      <!-- Top Products -->
      <div
        class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
      >

        <div class="flex items-center justify-between">
          <div>
            <h3 class="font-bold text-gray-900">
              Top Products
            </h3>

            <p class="text-sm text-gray-500">
              Best selling products
            </p>
          </div>

          <NuxtLink
            to="/admin/products"
            class="text-sm font-semibold hover:underline"
          >
            View all
          </NuxtLink>
        </div>

        <div class="mt-6 space-y-5">

          <div
            v-for="(product, index) in [
              ['Nike Mercurial Vapor 16', '245 sold'],
              ['Adidas Predator Elite', '189 sold'],
              ['PUMA Future 8 Ultimate', '156 sold'],
              ['Nike Phantom GX 2', '142 sold'],
              ['Mizuno Morelia Neo IV', '128 sold']
            ]"
            :key="product[0]"
            class="flex items-center gap-4"
          >

            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 font-bold"
            >
              {{ index + 1 }}
            </div>

            <div class="min-w-0 flex-1">
              <p class="truncate text-sm font-semibold">
                {{ product[0] }}
              </p>

              <p class="text-xs text-gray-500">
                {{ product[1] }}
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>

    <!-- Recent Orders -->
    <div
      class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
    >

      <div class="flex items-center justify-between border-b p-6">

        <div>
          <h3 class="font-bold text-gray-900">
            Recent Orders
          </h3>

          <p class="text-sm text-gray-500">
            Latest customer purchases
          </p>
        </div>

        <NuxtLink
          to="/admin/orders"
          class="text-sm font-semibold hover:underline"
        >
          View all
        </NuxtLink>

      </div>

      <div class="overflow-x-auto">

        <table class="w-full text-left text-sm">

          <thead class="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th class="px-6 py-4">Order</th>
              <th class="px-6 py-4">Customer</th>
              <th class="px-6 py-4">Product</th>
              <th class="px-6 py-4">Amount</th>
              <th class="px-6 py-4">Status</th>
            </tr>
          </thead>

          <tbody class="divide-y">

            <tr
              v-for="order in orders"
              :key="order.id"
              class="hover:bg-gray-50"
            >

              <td class="px-6 py-5 font-semibold">
                {{ order.id }}
              </td>

              <td class="px-6 py-5">
                {{ order.customer }}
              </td>

              <td class="px-6 py-5">
                {{ order.product }}
              </td>

              <td class="px-6 py-5 font-semibold">
                {{ order.amount }}
              </td>

              <td class="px-6 py-5">

                <span
                  class="rounded-full px-3 py-1 text-xs font-semibold"
                  :class="{
                    'bg-green-100 text-green-700':
                      order.status === 'Completed',

                    'bg-yellow-100 text-yellow-700':
                      order.status === 'Pending',

                    'bg-blue-100 text-blue-700':
                      order.status === 'Processing'
                  }"
                >
                  {{ order.status }}
                </span>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>
</template>