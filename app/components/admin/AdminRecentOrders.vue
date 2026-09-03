<script setup lang="ts">
interface Order {
  id: string
  customer: string
  product: string
  amount: string
  status: "Completed" | "Processing" | "Pending"
}

const orders: Order[] = [
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
]

const statusClass = (status: Order["status"]) => {
  if (status === "Completed") {
    return "bg-green-100 text-green-700"
  }

  if (status === "Processing") {
    return "bg-blue-100 text-blue-700"
  }

  return "bg-yellow-100 text-yellow-700"
}
</script>

<template>
  <div
    class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
  >

    <!-- Header -->
    <div
      class="flex flex-col gap-3 border-b p-6 sm:flex-row sm:items-center sm:justify-between"
    >

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
        class="text-sm font-semibold text-gray-900 hover:underline"
      >
        View all
      </NuxtLink>

    </div>

    <!-- Table -->
    <div class="overflow-x-auto">

      <table class="w-full min-w-[750px] text-left text-sm">

        <thead class="bg-gray-50 text-xs uppercase text-gray-500">
          <tr>
            <th class="px-6 py-4">
              Order
            </th>

            <th class="px-6 py-4">
              Customer
            </th>

            <th class="px-6 py-4">
              Product
            </th>

            <th class="px-6 py-4">
              Amount
            </th>

            <th class="px-6 py-4">
              Status
            </th>

            <th class="px-6 py-4">
              Action
            </th>
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-100">

          <tr
            v-for="order in orders"
            :key="order.id"
            class="transition hover:bg-gray-50"
          >

            <td class="px-6 py-5 font-semibold text-gray-900">
              {{ order.id }}
            </td>

            <td class="px-6 py-5">
              {{ order.customer }}
            </td>

            <td class="px-6 py-5 text-gray-600">
              {{ order.product }}
            </td>

            <td class="px-6 py-5 font-semibold">
              {{ order.amount }}
            </td>

            <td class="px-6 py-5">

              <span
                class="rounded-full px-3 py-1 text-xs font-semibold"
                :class="statusClass(order.status)"
              >
                {{ order.status }}
              </span>

            </td>

            <td class="px-6 py-5">

              <NuxtLink
                :to="`/admin/orders/${order.id.replace('#ORD-', '')}`"
                class="font-semibold text-gray-700 hover:text-black hover:underline"
              >
                View
              </NuxtLink>

            </td>

          </tr>

        </tbody>

      </table>

    </div>

  </div>
</template>