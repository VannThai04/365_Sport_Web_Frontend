<script setup lang="ts">
import { ref } from "vue";

definePageMeta({
  layout: "admin"
});

const form = ref({
  name: "",
  description: "",
  website: "",
  image: "",
  status: "Active"
});

const createBrand = () => {

  if (!form.value.name.trim()) {
    alert("Please enter brand name.");
    return;
  }

  console.log("New brand:", form.value);

  alert("Brand created successfully!");

  navigateTo("/admin/brands");
};

const cancel = () => {
  navigateTo("/admin/brands");
};
</script>

<template>
  <div class="mx-auto max-w-4xl space-y-6">

    <!-- Header -->
    <div>

      <NuxtLink
        to="/admin/brands"
        class="text-sm font-medium text-gray-500 hover:text-black"
      >
        ← Back to Brands
      </NuxtLink>

      <div class="mt-3">
        <h2 class="text-2xl font-bold">
          Add Brand
        </h2>

        <p class="mt-1 text-sm text-gray-500">
          Add a new sports brand to your store.
        </p>
      </div>

    </div>

    <!-- Form -->
    <div class="grid gap-6 lg:grid-cols-3">

      <!-- Information -->
      <div class="rounded-2xl border bg-white p-6 shadow-sm lg:col-span-2">

        <h3 class="font-bold">
          Brand Information
        </h3>

        <div class="mt-6 space-y-5">

          <!-- Name -->
          <div>

            <label class="mb-2 block text-sm font-semibold">
              Brand Name
            </label>

            <input
              v-model="form.name"
              type="text"
              placeholder="Nike"
              class="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
            />

          </div>

          <!-- Description -->
          <div>

            <label class="mb-2 block text-sm font-semibold">
              Description
            </label>

            <textarea
              v-model="form.description"
              rows="6"
              placeholder="Enter brand description..."
              class="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
            ></textarea>

          </div>

          <!-- Website -->
          <div>

            <label class="mb-2 block text-sm font-semibold">
              Website
            </label>

            <input
              v-model="form.website"
              type="text"
              placeholder="https://www.nike.com"
              class="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
            />

          </div>

          <!-- Status -->
          <div>

            <label class="mb-2 block text-sm font-semibold">
              Status
            </label>

            <select
              v-model="form.status"
              class="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>

          </div>

        </div>

      </div>

      <!-- Preview -->
      <div class="space-y-6">

        <div class="rounded-2xl border bg-white p-6 shadow-sm">

          <h3 class="font-bold">
            Brand Logo
          </h3>

          <p class="mt-1 text-sm text-gray-500">
            Enter your brand logo URL.
          </p>

          <input
            v-model="form.image"
            type="text"
            placeholder="https://..."
            class="mt-5 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black"
          />

          <div
            class="mt-5 flex h-48 items-center justify-center overflow-hidden rounded-xl bg-gray-100"
          >

            <img
              v-if="form.image"
              :src="form.image"
              :alt="form.name"
              class="h-full w-full object-contain"
            />

            <div
              v-else
              class="text-center text-gray-400"
            >

              <div class="text-4xl">
                🏷️
              </div>

              <p class="mt-2 text-sm">
                Logo preview
              </p>

            </div>

          </div>

        </div>

        <!-- Preview Card -->
        <div class="rounded-2xl border bg-white p-6 shadow-sm">

          <h3 class="font-bold">
            Preview
          </h3>

          <div class="mt-5 rounded-xl border p-5">

            <div
              class="flex h-16 w-16 items-center justify-center rounded-xl bg-black text-xl font-black text-white"
            >
              {{ form.name ? form.name.charAt(0).toUpperCase() : "B" }}
            </div>

            <h4 class="mt-4 font-bold">
              {{ form.name || "Brand Name" }}
            </h4>

            <p class="mt-1 line-clamp-3 text-sm text-gray-500">
              {{ form.description || "Brand description..." }}
            </p>

            <span
              class="mt-4 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700"
            >
              {{ form.status }}
            </span>

          </div>

        </div>

      </div>

    </div>

    <!-- Actions -->
    <div class="flex justify-end gap-3">

      <button
        class="rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold hover:bg-gray-50"
        @click="cancel"
      >
        Cancel
      </button>

      <button
        class="rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
        @click="createBrand"
      >
        Create Brand
      </button>

    </div>

  </div>
</template>