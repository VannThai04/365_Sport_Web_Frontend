<script setup lang="ts">
import { ref, computed } from "vue";

definePageMeta({
  layout: "admin"
});

const search = ref("");
const status = ref("All");

const orders = ref([
  {
    id: "#ORD-1001",
    customer: "Dara Sok",
    email: "dara@example.com",
    product: "Nike Mercurial Vapor 16",
    quantity: 1,
    total: 151.97,
    status: "Completed",
    date: "Sep 03, 2026"
  },
  {
    id: "#ORD-1002",
    customer: "Vann Thai",
    email: "vann@example.com",
    product: "Adidas Predator Elite",
    quantity: 1,
    total: 260,
    status: "Processing",
    date: "Sep 03, 2026"
  },
  {
    id: "#ORD-1003",
    customer: "Seyha Chan",
    email: "seyha@example.com",
    product: "PUMA Future 8 Ultimate",
    quantity: 2,
    total: 227.98,
    status: "Pending",
    date: "Sep 02, 2026"
  },
  {
    id: "#ORD-1004",
    customer: "Sokha Kim",
    email: "sokha@example.com",
    product: "Nike Phantom GX 2",
    quantity: 1,
    total: 220,
    status: "Cancelled",
    date: "Sep 01, 2026"
  }
]);

const filteredOrders = computed(() => {
  return orders.value.filter(order => {

    const matchSearch =
      order.id.toLowerCase().includes(search.value.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.value.toLowerCase());

    const matchStatus =
      status.value === "All" ||
      order.status === status.value;

    return matchSearch && matchStatus;
  });
});
</script>

<template>
  <div class="space-y-6">

    <!-- Header -->
    <div>
      <h2 class="text-2xl font-bold">
        Orders
      </h2>

      <p class="text-sm text-gray-500">
        Manage customer orders and payments
      </p>
    </div>

    <!-- Stats -->
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      <div class="rounded-2xl border bg-white p-5">
        <p class="text-sm text-gray-500">
          Total Orders
        </p>

        <p class="mt-2 text-2xl font-bold">
          1,248
        </p>
      </div>

      <div class="rounded-2xl border bg-white p-5">
        <p class="text-sm text-gray-500">
          Pending
        </p>

        <p class="mt-2 text-2xl font-bold text-yellow-600">
          18
        </p>
      </div>

      <div class="rounded-2xl border bg-white p-5">
        <p class="text-sm text-gray-500">
          Processing
        </p>

        <p class="mt-2 text-2xl font-bold text-blue-600">
          26
        </p>
      </div>

      <div class="rounded-2xl border bg-white p-5">
        <p class="text-sm text-gray-500">
          Completed
        </p>

        <p class="mt-2 text-2xl font-bold text-green-600">
          1,184
        </p>
      </div>

    </div>

    <!-- Filters -->
    <div class="flex flex-col gap-4 rounded-2xl border bg-white p-5 md:flex-row">

      <input
        v-model="search"
        placeholder="Search order or customer..."
        class="flex-1 rounded-xl border px-4 py-3 outline-none focus:border-black"
      />

      <select
        v-model="status"
        class="rounded-xl border px-4 py-3 outline-none"
      >
        <option>All</option>
        <option>Pending</option>
        <option>Processing</option>
        <option>Completed</option>
        <option>Cancelled</option>
      </select>

    </div>

    <!-- Table -->
    <div class="overflow-hidden rounded-2xl border bg-white">

      <div class="overflow-x-auto">

        <table class="w-full text-left text-sm">

          <thead class="bg-gray-50 text-xs uppercase text-gray-500">

            <tr>
              <th class="px-6 py-4">Order</th>
              <th class="px-6 py-4">Customer</th>
              <th class="px-6 py-4">Product</th>
              <th class="px-6 py-4">Quantity</th>
              <th class="px-6 py-4">Total</th>
              <th class="px-6 py-4">Status</th>
              <th class="px-6 py-4">Date</th>
              <th class="px-6 py-4">Action</th>
            </tr>

          </thead>

          <tbody class="divide-y">

            <tr
              v-for="order in filteredOrders"
              :key="order.id"
              class="hover:bg-gray-50"
            >

              <td class="px-6 py-5 font-bold">
                {{ order.id }}
              </td>

              <td class="px-6 py-5">

                <p class="font-semibold">
                  {{ order.customer }}
                </p>

                <p class="text-xs text-gray-500">
                  {{ order.email }}
                </p>

              </td>

              <td class="px-6 py-5">
                {{ order.product }}
              </td>

              <td class="px-6 py-5">
                {{ order.quantity }}
              </td>

              <td class="px-6 py-5 font-bold">
                ${{ order.total.toFixed(2) }}
              </td>

              <td class="px-6 py-5">

                <span
                  class="rounded-full px-3 py-1 text-xs font-semibold"
                  :class="{
                    'bg-yellow-100 text-yellow-700':
                      order.status === 'Pending',

                    'bg-blue-100 text-blue-700':
                      order.status === 'Processing',

                    'bg-green-100 text-green-700':
                      order.status === 'Completed',

                    'bg-red-100 text-red-700':
                      order.status === 'Cancelled'
                  }"
                >
                  {{ order.status }}
                </span>

              </td>

              <td class="whitespace-nowrap px-6 py-5 text-gray-500">
                {{ order.date }}
              </td>

              <td class="px-6 py-5">

                <NuxtLink
                  :to="`/admin/orders/${order.id.replace('#ORD-', '')}`"
                  class="rounded-lg bg-gray-100 px-3 py-2 text-xs font-semibold hover:bg-black hover:text-white"
                >
                  View
                </NuxtLink>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>
</template>