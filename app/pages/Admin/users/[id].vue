<script setup lang="ts">
import { computed, ref } from "vue";

definePageMeta({
  layout: "admin",
});

const route = useRoute();

const userId = Number(route.params.id);

const user = ref({
  id: userId,
  name: "Dara Sok",
  email: "dara@gmail.com",
  phone: "+855 12 111 222",
  address: "Phnom Penh, Cambodia",
  role: "Customer",
  status: "Active",
  joined: "January 12, 2026",
  avatar: "https://i.pravatar.cc/300?img=12",
  orders: 12,
  completedOrders: 10,
  cancelledOrders: 2,
  spent: 1250,
});

const orders = ref([
  {
    id: "#ORD-1001",
    date: "2026-08-28",
    items: 2,
    total: 319,
    status: "Delivered",
  },
  {
    id: "#ORD-1002",
    date: "2026-08-20",
    items: 1,
    total: 151.97,
    status: "Processing",
  },
  {
    id: "#ORD-1003",
    date: "2026-08-15",
    items: 3,
    total: 420,
    status: "Delivered",
  },
  {
    id: "#ORD-1004",
    date: "2026-08-10",
    items: 1,
    total: 55,
    status: "Cancelled",
  },
]);

const activities = [
  {
    title: "Placed an order",
    description: "Order #ORD-1001 was created.",
    date: "2 days ago",
  },
  {
    title: "Updated profile",
    description: "User changed their phone number.",
    date: "5 days ago",
  },
  {
    title: "Placed an order",
    description: "Order #ORD-1002 was created.",
    date: "14 days ago",
  },
];

const toggleStatus = () => {
  user.value.status =
    user.value.status === "Active" ? "Blocked" : "Active";
};

const deleteUser = () => {
  const confirmed = confirm(
    `Are you sure you want to delete ${user.value.name}?`
  );

  if (!confirmed) return;

  navigateTo("/admin/users");
};

const editUser = () => {
  alert("Edit user form will be connected here.");
};

const statusClass = computed(() => {
  if (user.value.status === "Active") {
    return "bg-green-100 text-green-700";
  }

  return "bg-red-100 text-red-700";
});
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">

    <!-- Header -->
    <div class="mb-8">

      <div class="flex items-center gap-2 text-sm text-gray-500">
        <NuxtLink
          to="/admin/users"
          class="hover:text-black"
        >
          Users
        </NuxtLink>

        <span>/</span>

        <span>{{ user.name }}</span>
      </div>

      <div class="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 class="text-2xl font-bold text-gray-900">
            User Profile
          </h1>

          <p class="mt-1 text-sm text-gray-500">
            View customer information and activity.
          </p>
        </div>

        <div class="flex gap-3">

          <button
            @click="editUser"
            class="rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold hover:bg-gray-100"
          >
            Edit User
          </button>

          <button
            @click="deleteUser"
            class="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
          >
            Delete
          </button>

        </div>

      </div>
    </div>

    <!-- Profile -->
    <div class="grid grid-cols-1 gap-6 xl:grid-cols-3">

      <!-- Left -->
      <div class="space-y-6">

        <div class="rounded-2xl border bg-white p-6 text-center shadow-sm">

          <img
            :src="user.avatar"
            :alt="user.name"
            class="mx-auto h-28 w-28 rounded-full object-cover ring-4 ring-gray-100"
          />

          <h2 class="mt-5 text-xl font-bold text-gray-900">
            {{ user.name }}
          </h2>

          <p class="mt-1 text-sm text-gray-500">
            {{ user.email }}
          </p>

          <div class="mt-4 flex justify-center gap-2">

            <span class="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              {{ user.role }}
            </span>

            <span
              class="rounded-full px-3 py-1 text-xs font-semibold"
              :class="statusClass"
            >
              {{ user.status }}
            </span>

          </div>

          <button
            @click="toggleStatus"
            class="mt-6 w-full rounded-xl border border-gray-300 py-3 text-sm font-semibold hover:bg-gray-100"
          >
            {{ user.status === "Active" ? "Block User" : "Activate User" }}
          </button>

        </div>

        <!-- Contact -->
        <div class="rounded-2xl border bg-white p-6 shadow-sm">

          <h3 class="font-bold text-gray-900">
            Contact Information
          </h3>

          <div class="mt-5 space-y-5">

            <div>
              <p class="text-xs uppercase tracking-wide text-gray-400">
                Email
              </p>

              <p class="mt-1 text-sm font-medium">
                {{ user.email }}
              </p>
            </div>

            <div>
              <p class="text-xs uppercase tracking-wide text-gray-400">
                Phone
              </p>

              <p class="mt-1 text-sm font-medium">
                {{ user.phone }}
              </p>
            </div>

            <div>
              <p class="text-xs uppercase tracking-wide text-gray-400">
                Address
              </p>

              <p class="mt-1 text-sm font-medium">
                {{ user.address }}
              </p>
            </div>

            <div>
              <p class="text-xs uppercase tracking-wide text-gray-400">
                Joined
              </p>

              <p class="mt-1 text-sm font-medium">
                {{ user.joined }}
              </p>
            </div>

          </div>

        </div>

      </div>

      <!-- Right -->
      <div class="space-y-6 xl:col-span-2">

        <!-- Statistics -->
        <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">

          <div class="rounded-2xl border bg-white p-5 shadow-sm">
            <p class="text-sm text-gray-500">
              Total Orders
            </p>

            <p class="mt-2 text-2xl font-bold">
              {{ user.orders }}
            </p>
          </div>

          <div class="rounded-2xl border bg-white p-5 shadow-sm">
            <p class="text-sm text-gray-500">
              Completed
            </p>

            <p class="mt-2 text-2xl font-bold text-green-600">
              {{ user.completedOrders }}
            </p>
          </div>

          <div class="rounded-2xl border bg-white p-5 shadow-sm">
            <p class="text-sm text-gray-500">
              Cancelled
            </p>

            <p class="mt-2 text-2xl font-bold text-red-600">
              {{ user.cancelledOrders }}
            </p>
          </div>

          <div class="rounded-2xl border bg-white p-5 shadow-sm">
            <p class="text-sm text-gray-500">
              Total Spent
            </p>

            <p class="mt-2 text-2xl font-bold">
              ${{ user.spent.toLocaleString() }}
            </p>
          </div>

        </div>

        <!-- Orders -->
        <div class="overflow-hidden rounded-2xl border bg-white shadow-sm">

          <div class="flex items-center justify-between border-b p-6">

            <div>
              <h2 class="text-lg font-bold">
                Order History
              </h2>

              <p class="mt-1 text-sm text-gray-500">
                Recent purchases made by this customer.
              </p>
            </div>

            <NuxtLink
              to="/admin/orders"
              class="text-sm font-semibold hover:underline"
            >
              View All
            </NuxtLink>

          </div>

          <div class="overflow-x-auto">

            <table class="w-full min-w-[700px]">

              <thead class="bg-gray-50">
                <tr class="border-b">

                  <th class="px-6 py-4 text-left text-xs uppercase text-gray-500">
                    Order
                  </th>

                  <th class="px-6 py-4 text-left text-xs uppercase text-gray-500">
                    Date
                  </th>

                  <th class="px-6 py-4 text-left text-xs uppercase text-gray-500">
                    Items
                  </th>

                  <th class="px-6 py-4 text-left text-xs uppercase text-gray-500">
                    Total
                  </th>

                  <th class="px-6 py-4 text-left text-xs uppercase text-gray-500">
                    Status
                  </th>

                </tr>
              </thead>

              <tbody class="divide-y">

                <tr
                  v-for="order in orders"
                  :key="order.id"
                  class="hover:bg-gray-50"
                >

                  <td class="px-6 py-4 text-sm font-semibold">
                    {{ order.id }}
                  </td>

                  <td class="px-6 py-4 text-sm text-gray-500">
                    {{ order.date }}
                  </td>

                  <td class="px-6 py-4 text-sm">
                    {{ order.items }}
                  </td>

                  <td class="px-6 py-4 text-sm font-semibold">
                    ${{ order.total }}
                  </td>

                  <td class="px-6 py-4">

                    <span
                      class="rounded-full px-3 py-1 text-xs font-semibold"
                      :class="{
                        'bg-green-100 text-green-700':
                          order.status === 'Delivered',

                        'bg-yellow-100 text-yellow-700':
                          order.status === 'Processing',

                        'bg-red-100 text-red-700':
                          order.status === 'Cancelled',
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

        <!-- Activity -->
        <div class="rounded-2xl border bg-white p-6 shadow-sm">

          <h2 class="text-lg font-bold">
            Recent Activity
          </h2>

          <div class="mt-6 space-y-6">

            <div
              v-for="activity in activities"
              :key="activity.title + activity.date"
              class="flex gap-4"
            >

              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
                ✓
              </div>

              <div class="flex-1">

                <div class="flex flex-col justify-between gap-1 sm:flex-row">

                  <p class="font-semibold">
                    {{ activity.title }}
                  </p>

                  <span class="text-xs text-gray-400">
                    {{ activity.date }}
                  </span>

                </div>

                <p class="mt-1 text-sm text-gray-500">
                  {{ activity.description }}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>