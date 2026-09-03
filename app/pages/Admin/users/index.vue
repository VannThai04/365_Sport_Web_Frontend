<script setup lang="ts">
import { ref } from "vue";

definePageMeta({
  layout: "admin"
});

const search = ref("");

const users = [
  {
    id: 1,
    name: "Dara Sok",
    email: "dara@example.com",
    orders: 12,
    spent: 1250.50,
    status: "Active"
  },
  {
    id: 2,
    name: "Vann Thai",
    email: "vann@example.com",
    orders: 8,
    spent: 945.20,
    status: "Active"
  },
  {
    id: 3,
    name: "Seyha Chan",
    email: "seyha@example.com",
    orders: 5,
    spent: 520.00,
    status: "Active"
  },
  {
    id: 4,
    name: "Sokha Kim",
    email: "sokha@example.com",
    orders: 3,
    spent: 320.00,
    status: "Inactive"
  }
];
</script>

<template>
  <div class="space-y-6">

    <div>
      <h2 class="text-2xl font-bold">
        Customers
      </h2>

      <p class="text-sm text-gray-500">
        Manage customers and view purchase history
      </p>
    </div>

    <!-- Search -->
    <div class="rounded-2xl border bg-white p-5">

      <input
        v-model="search"
        placeholder="Search customer..."
        class="w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
      />

    </div>

    <!-- Users -->
    <div class="overflow-hidden rounded-2xl border bg-white">

      <div class="overflow-x-auto">

        <table class="w-full text-left text-sm">

          <thead class="bg-gray-50 text-xs uppercase text-gray-500">

            <tr>
              <th class="px-6 py-4">Customer</th>
              <th class="px-6 py-4">Orders</th>
              <th class="px-6 py-4">Total Spent</th>
              <th class="px-6 py-4">Status</th>
              <th class="px-6 py-4">Action</th>
            </tr>

          </thead>

          <tbody class="divide-y">

            <tr
              v-for="user in users"
              :key="user.id"
              class="hover:bg-gray-50"
            >

              <td class="px-6 py-5">

                <div class="flex items-center gap-3">

                  <div
                    class="flex h-10 w-10 items-center justify-center rounded-full bg-black font-bold text-white"
                  >
                    {{ user.name.charAt(0) }}
                  </div>

                  <div>

                    <p class="font-semibold">
                      {{ user.name }}
                    </p>

                    <p class="text-xs text-gray-500">
                      {{ user.email }}
                    </p>

                  </div>

                </div>

              </td>

              <td class="px-6 py-5">
                {{ user.orders }}
              </td>

              <td class="px-6 py-5 font-bold">
                ${{ user.spent.toFixed(2) }}
              </td>

              <td class="px-6 py-5">

                <span
                  class="rounded-full px-3 py-1 text-xs font-semibold"
                  :class="
                    user.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-500'
                  "
                >
                  {{ user.status }}
                </span>

              </td>

              <td class="px-6 py-5">

                <NuxtLink
                  :to="`/admin/users/${user.id}`"
                  class="rounded-lg bg-black px-4 py-2 text-xs font-semibold text-white"
                >
                  Purchase History
                </NuxtLink>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>
</template>