<script setup lang="ts">
import { ref } from "vue";

definePageMeta({
  layout: "admin"
});

const brands = ref([
  {
    id: 1,
    name: "Nike",
    products: 125,
    status: "Active"
  },
  {
    id: 2,
    name: "Adidas",
    products: 98,
    status: "Active"
  },
  {
    id: 3,
    name: "Puma",
    products: 67,
    status: "Active"
  },
  {
    id: 4,
    name: "Mizuno",
    products: 42,
    status: "Active"
  },
  {
    id: 5,
    name: "New Balance",
    products: 24,
    status: "Active"
  }
]);

const showModal = ref(false);
const brandName = ref("");

const addBrand = () => {
  if (!brandName.value.trim()) return;

  brands.value.push({
    id: Date.now(),
    name: brandName.value,
    products: 0,
    status: "Active"
  });

  brandName.value = "";
  showModal.value = false;
};

const deleteBrand = (id: number) => {
  brands.value = brands.value.filter(
    brand => brand.id !== id
  );
};
</script>

<template>
  <div class="space-y-6">

    <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

      <div>
        <h2 class="text-2xl font-bold">
          Brands
        </h2>

        <p class="text-sm text-gray-500">
          Manage sports brands
        </p>
      </div>

      <button
        class="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white"
        @click="showModal = true"
      >
        + Add Brand
      </button>

    </div>

    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      <div
        v-for="brand in brands"
        :key="brand.id"
        class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
      >

        <div class="flex items-center justify-between">

          <div
            class="flex h-14 w-14 items-center justify-center rounded-xl bg-black text-lg font-black text-white"
          >
            {{ brand.name.charAt(0) }}
          </div>

          <button
            class="text-gray-400 hover:text-red-500"
            @click="deleteBrand(brand.id)"
          >
            🗑️
          </button>

        </div>

        <h3 class="mt-5 text-lg font-bold">
          {{ brand.name }}
        </h3>

        <p class="mt-1 text-sm text-gray-500">
          {{ brand.products }} products
        </p>

        <div class="mt-4">
          <span
            class="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700"
          >
            {{ brand.status }}
          </span>
        </div>

      </div>

    </div>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >

      <div class="w-full max-w-md rounded-2xl bg-white p-6">

        <h3 class="text-lg font-bold">
          Add Brand
        </h3>

        <input
          v-model="brandName"
          type="text"
          placeholder="Brand name"
          class="mt-5 w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
        />

        <div class="mt-5 flex justify-end gap-3">

          <button
            class="rounded-xl border px-4 py-2"
            @click="showModal = false"
          >
            Cancel
          </button>

          <button
            class="rounded-xl bg-black px-5 py-2 text-white"
            @click="addBrand"
          >
            Add
          </button>

        </div>

      </div>

    </div>

  </div>
</template>