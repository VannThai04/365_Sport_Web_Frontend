<script setup lang="ts">
import { ref } from "vue";

definePageMeta({
  layout: "admin"
});

const categories = ref([
  {
    id: 1,
    name: "Football Boots",
    products: 85,
    status: "Active"
  },
  {
    id: 2,
    name: "Football Jersey",
    products: 42,
    status: "Active"
  },
  {
    id: 3,
    name: "Football Clothing",
    products: 36,
    status: "Active"
  },
  {
    id: 4,
    name: "Football Bags",
    products: 18,
    status: "Active"
  },
  {
    id: 5,
    name: "Football Accessories",
    products: 51,
    status: "Active"
  },
  {
    id: 6,
    name: "Goalkeeper",
    products: 24,
    status: "Active"
  }
]);

const showModal = ref(false);
const categoryName = ref("");

const addCategory = () => {
  if (!categoryName.value.trim()) return;

  categories.value.push({
    id: Date.now(),
    name: categoryName.value,
    products: 0,
    status: "Active"
  });

  categoryName.value = "";
  showModal.value = false;
};

const deleteCategory = (id: number) => {
  categories.value = categories.value.filter(
    category => category.id !== id
  );
};
</script>

<template>
  <div class="space-y-6">

    <!-- Header -->
    <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

      <div>
        <h2 class="text-2xl font-bold">
          Categories
        </h2>

        <p class="text-sm text-gray-500">
          Manage your product categories
        </p>
      </div>

      <button
        class="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
        @click="showModal = true"
      >
        + Add Category
      </button>

    </div>

    <!-- Categories -->
    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

      <div
        v-for="category in categories"
        :key="category.id"
        class="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
      >

        <div class="flex items-start justify-between">

          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-2xl"
          >
            📂
          </div>

          <button
            class="text-gray-400 hover:text-red-500"
            @click="deleteCategory(category.id)"
          >
            🗑️
          </button>

        </div>

        <h3 class="mt-5 font-bold">
          {{ category.name }}
        </h3>

        <div class="mt-2 flex items-center justify-between">

          <p class="text-sm text-gray-500">
            {{ category.products }} products
          </p>

          <span
            class="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700"
          >
            {{ category.status }}
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

        <div class="flex items-center justify-between">

          <h3 class="text-lg font-bold">
            Add Category
          </h3>

          <button
            class="text-xl text-gray-400"
            @click="showModal = false"
          >
            ×
          </button>

        </div>

        <input
          v-model="categoryName"
          type="text"
          placeholder="Category name"
          class="mt-6 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
        />

        <div class="mt-5 flex justify-end gap-3">

          <button
            class="rounded-xl border px-4 py-2 text-sm"
            @click="showModal = false"
          >
            Cancel
          </button>

          <button
            class="rounded-xl bg-black px-5 py-2 text-sm font-semibold text-white"
            @click="addCategory"
          >
            Add Category
          </button>

        </div>

      </div>

    </div>

  </div>
</template>