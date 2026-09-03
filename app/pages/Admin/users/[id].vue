<script setup lang="ts">
definePageMeta({
  layout: "admin"
});

const purchases = [
  {
    id: "#ORD-1001",
    product: "Nike Mercurial Vapor 16 Elite",
    quantity: 1,
    price: 151.97,
    status: "Completed",
    date: "Sep 03, 2026"
  },
  {
    id: "#ORD-0955",
    product: "Adidas Predator Elite",
    quantity: 1,
    price: 260,
    status: "Completed",
    date: "Aug 24, 2026"
  },
  {
    id: "#ORD-0912",
    product: "Nike Academy Team Backpack",
    quantity: 2,
    price: 90,
    status: "Completed",
    date: "Aug 10, 2026"
  }
];
</script>

<template>
  <div class="space-y-6">

    <!-- Back -->
    <NuxtLink
      to="/admin/users"
      class="text-sm font-semibold text-gray-500 hover:text-black"
    >
      ← Back to Customers
    </NuxtLink>

    <!-- User -->
    <div class="rounded-2xl border bg-white p-6">

      <div class="flex flex-col gap-5 sm:flex-row sm:items-center">

        <div
          class="flex h-16 w-16 items-center justify-center rounded-full bg-black text-xl font-bold text-white"
        >
          D
        </div>

        <div>

          <h2 class="text-2xl font-bold">
            Dara Sok
          </h2>

          <p class="text-sm text-gray-500">
            dara@example.com
          </p>

        </div>

      </div>

    </div>

    <!-- Statistics -->
    <div class="grid gap-4 sm:grid-cols-3">

      <div class="rounded-2xl border bg-white p-5">
        <p class="text-sm text-gray-500">
          Total Orders
        </p>
        <p class="mt-2 text-2xl font-bold">
          12
        </p>
      </div>

      <div class="rounded-2xl border bg-white p-5">
        <p class="text-sm text-gray-500">
          Total Spent
        </p>
        <p class="mt-2 text-2xl font-bold">
          $1,250.50
        </p>
      </div>

      <div class="rounded-2xl border bg-white p-5">
        <p class="text-sm text-gray-500">
          Customer Since
        </p>
        <p class="mt-2 text-2xl font-bold">
          2025
        </p>
      </div>

    </div>

    <!-- Purchase History -->
    <div class="overflow-hidden rounded-2xl border bg-white">

      <div class="border-b p-6">

        <h3 class="font-bold">
          Purchase History
        </h3>

        <p class="text-sm text-gray-500">
          Products purchased by this customer
        </p>

      </div>

      <div class="overflow-x-auto">

        <table class="w-full text-left text-sm">

          <thead class="bg-gray-50 text-xs uppercase text-gray-500">

            <tr>
              <th class="px-6 py-4">Order</th>
              <th class="px-6 py-4">Product</th>
              <th class="px-6 py-4">Quantity</th>
              <th class="px-6 py-4">Amount</th>
              <th class="px-6 py-4">Status</th>
              <th class="px-6 py-4">Date</th>
            </tr>

          </thead>

          <tbody class="divide-y">

            <tr
              v-for="purchase in purchases"
              :key="purchase.id"
              class="hover:bg-gray-50"
            >

              <td class="px-6 py-5 font-semibold">
                {{ purchase.id }}
              </td>

              <td class="px-6 py-5">
                {{ purchase.product }}
              </td>

              <td class="px-6 py-5">
                {{ purchase.quantity }}
              </td>

              <td class="px-6 py-5 font-bold">
                ${{ purchase.price.toFixed(2) }}
              </td>

              <td class="px-6 py-5">

                <span class="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  {{ purchase.status }}
                </span>

              </td>

              <td class="px-6 py-5 text-gray-500">
                {{ purchase.date }}
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>
</template>