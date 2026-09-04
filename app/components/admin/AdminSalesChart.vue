<script setup lang="ts">
import { computed, ref } from "vue"

const selectedPeriod = ref("Last 30 days")

const periods = [
  "Last 7 days",
  "Last 30 days",
  "Last 6 months",
  "This year"
]

const chartData = computed(() => {
  if (selectedPeriod.value === "Last 7 days") {
    return [
      { label: "Mon", value: 45 },
      { label: "Tue", value: 62 },
      { label: "Wed", value: 50 },
      { label: "Thu", value: 78 },
      { label: "Fri", value: 65 },
      { label: "Sat", value: 88 },
      { label: "Sun", value: 72 }
    ]
  }

  if (selectedPeriod.value === "Last 6 months") {
    return [
      { label: "Apr", value: 55 },
      { label: "May", value: 68 },
      { label: "Jun", value: 61 },
      { label: "Jul", value: 80 },
      { label: "Aug", value: 72 },
      { label: "Sep", value: 92 }
    ]
  }

  if (selectedPeriod.value === "This year") {
    return [
      { label: "Jan", value: 35 },
      { label: "Feb", value: 48 },
      { label: "Mar", value: 40 },
      { label: "Apr", value: 65 },
      { label: "May", value: 55 },
      { label: "Jun", value: 72 },
      { label: "Jul", value: 60 },
      { label: "Aug", value: 82 },
      { label: "Sep", value: 70 },
      { label: "Oct", value: 90 },
      { label: "Nov", value: 75 },
      { label: "Dec", value: 96 }
    ]
  }

  return [
    { label: "1", value: 35 },
    { label: "5", value: 48 },
    { label: "10", value: 40 },
    { label: "15", value: 65 },
    { label: "20", value: 55 },
    { label: "25", value: 72 },
    { label: "30", value: 60 }
  ]
})
</script>

<template>
  <div
    class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
  >

    <!-- Header -->
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

      <div>
        <h3 class="font-bold text-gray-900">
          Sales Overview
        </h3>

        <p class="text-sm text-gray-500">
          Revenue performance
        </p>
      </div>

      <select
        v-model="selectedPeriod"
        class="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-black"
      >
        <option
          v-for="period in periods"
          :key="period"
          :value="period"
        >
          {{ period }}
        </option>
      </select>

    </div>

    <!-- Revenue -->
    <div class="mt-6">
      <p class="text-sm text-gray-500">
        Total Revenue
      </p>

      <p class="mt-1 text-2xl font-bold text-gray-900">
        $24,580
      </p>
    </div>

    <!-- Chart -->
    <div class="mt-8 flex h-64 items-end gap-2 sm:gap-3">

      <div
        v-for="item in chartData"
        :key="item.label"
        class="group flex h-full flex-1 flex-col justify-end"
      >

        <div class="relative flex h-full items-end">

          <!-- Tooltip -->
          <div
            class="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 rounded-lg bg-black px-2 py-1 text-xs text-white group-hover:block"
          >
            {{ item.value }}%
          </div>

          <!-- Bar -->
          <div
            class="w-full rounded-t-lg bg-black transition-all duration-300 group-hover:bg-gray-600"
            :style="{ height: `${item.value}%` }"
          ></div>

        </div>

      </div>

    </div>

    <!-- Labels -->
    <div class="mt-4 flex justify-between text-xs text-gray-400">
      <span
        v-for="item in chartData"
        :key="item.label"
      >
        {{ item.label }}
      </span>
    </div>

  </div>
</template>