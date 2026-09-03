<script setup lang="ts">
import { ref } from "vue";

definePageMeta({
  layout: "admin"
});

const discounts = ref([
  {
    code: "WELCOME10",
    type: "Percentage",
    value: "10%",
    used: 125,
    limit: 500,
    status: "Active"
  },
  {
    code: "SPORT20",
    type: "Percentage",
    value: "20%",
    used: 82,
    limit: 200,
    status: "Active"
  },
  {
    code: "SAVE50",
    type: "Fixed",
    value: "$50",
    used: 40,
    limit: 100,
    status: "Expired"
  }
]);
</script>

<template>
  <div class="space-y-6">

    <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

      <div>
        <h2 class="text-2xl font-bold">
          Discounts
        </h2>

        <p class="text-sm text-gray-500">
          Manage discount codes and promotions
        </p>
      </div>

      <button
        class="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white"
      >
        + Create Discount
      </button>

    </div>

    <div class="overflow-hidden rounded-2xl border bg-white">

      <div class="overflow-x-auto">

        <table class="w-full text-left text-sm">

          <thead class="bg-gray-50 text-xs uppercase text-gray-500">

            <tr>
              <th class="px-6 py-4">Code</th>
              <th class="px-6 py-4">Type</th>
              <th class="px-6 py-4">Value</th>
              <th class="px-6 py-4">Usage</th>
              <th class="px-6 py-4">Status</th>
              <th class="px-6 py-4">Action</th>
            </tr>

          </thead>

          <tbody class="divide-y">

            <tr
              v-for="discount in discounts"
              :key="discount.code"
              class="hover:bg-gray-50"
            >

              <td class="px-6 py-5 font-bold">
                {{ discount.code }}
              </td>

              <td class="px-6 py-5">
                {{ discount.type }}
              </td>

              <td class="px-6 py-5 font-bold">
                {{ discount.value }}
              </td>

              <td class="px-6 py-5">
                {{ discount.used }} / {{ discount.limit }}
              </td>

              <td class="px-6 py-5">

                <span
                  class="rounded-full px-3 py-1 text-xs font-semibold"
                  :class="
                    discount.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-500'
                  "
                >
                  {{ discount.status }}
                </span>

              </td>

              <td class="px-6 py-5">

                <button class="mr-2 rounded-lg bg-gray-100 px-3 py-2">
                  ✏️
                </button>

                <button class="rounded-lg bg-red-50 px-3 py-2 text-red-600">
                  🗑️
                </button>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>
</template>