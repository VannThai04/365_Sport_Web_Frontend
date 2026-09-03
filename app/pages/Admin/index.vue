<script setup lang="ts">
definePageMeta({
  layout: "admin"
})

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
]
</script>

<template>
  <div class="space-y-8">

    <!-- Header -->
    <AdminHeader
      title="Dashboard"
      description="Welcome back, Admin. Here's what's happening with your store."
    />

    <!-- Statistics -->
    <AdminStats :stats="stats" />

    <!-- Sales + Top Products -->
    <div class="grid gap-6 xl:grid-cols-3">

      <!-- Sales -->
      <div class="xl:col-span-2">
        <AdminSalesChart />
      </div>

      <!-- Top Products -->
      <AdminTopProducts />

    </div>

    <!-- Recent Orders -->
    <AdminRecentOrders />

  </div>
</template>