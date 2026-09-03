<script setup lang="ts">
import { ref, computed } from "vue";
import { products } from "~/data/product";

definePageMeta({
  layout: "admin",
});

const discountType = ref("percentage");
const discountValue = ref<number | null>(10);
const discountCode = ref("");
const description = ref("");
const startDate = ref("");
const endDate = ref("");
const minPurchase = ref<number | null>(0);
const usageLimit = ref<number | null>(100);
const selectedProducts = ref<number[]>([]);
const active = ref(true);

const selectAll = computed({
  get() {
    return selectedProducts.value.length === products.length;
  },
  set(value: boolean) {
    selectedProducts.value = value
      ? products.map((product) => product.id)
      : [];
  },
});

const toggleProduct = (id: number) => {
  if (selectedProducts.value.includes(id)) {
    selectedProducts.value = selectedProducts.value.filter(
      (productId) => productId !== id
    );
  } else {
    selectedProducts.value.push(id);
  }
};

const saveDiscount = () => {
  if (!discountCode.value) {
    alert("Please enter a discount code.");
    return;
  }

  if (!discountValue.value || discountValue.value <= 0) {
    alert("Please enter a valid discount value.");
    return;
  }

  alert("Discount created successfully!");

  console.log({
    code: discountCode.value,
    type: discountType.value,
    value: discountValue.value,
    description: description.value,
    startDate: startDate.value,
    endDate: endDate.value,
    minPurchase: minPurchase.value,
    usageLimit: usageLimit.value,
    products: selectedProducts.value,
    active: active.value,
  });
};

const cancel = () => {
  navigateTo("/admin/discounts");
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">

    <!-- Header -->
    <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div class="flex items-center gap-2 text-sm text-gray-500">
          <NuxtLink to="/admin/discounts" class="hover:text-black">
            Discounts
          </NuxtLink>
          <span>/</span>
          <span>Create</span>
        </div>

        <h1 class="mt-2 text-2xl font-bold text-gray-900">
          Create Discount
        </h1>

        <p class="mt-1 text-sm text-gray-500">
          Create a promotional discount for your customers.
        </p>
      </div>

      <div class="flex gap-3">
        <button
          @click="cancel"
          class="rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          @click="saveDiscount"
          class="rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800"
        >
          Create Discount
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-6 xl:grid-cols-3">

      <!-- Main Form -->
      <div class="space-y-6 xl:col-span-2">

        <!-- Basic Information -->
        <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 class="text-lg font-bold text-gray-900">
            Basic Information
          </h2>

          <p class="mt-1 text-sm text-gray-500">
            Define the main information for your promotion.
          </p>

          <div class="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">

            <div class="md:col-span-2">
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Discount Code
              </label>

              <input
                v-model="discountCode"
                type="text"
                placeholder="e.g. SUMMER20"
                class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm uppercase outline-none focus:border-black focus:ring-1 focus:ring-black"
              />

              <p class="mt-1 text-xs text-gray-400">
                Customers will enter this code during checkout.
              </p>
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Discount Type
              </label>

              <select
                v-model="discountType"
                class="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-black"
              >
                <option value="percentage">Percentage (%)</option>
                <option value="fixed">Fixed Amount ($)</option>
              </select>
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Discount Value
              </label>

              <div class="relative">
                <input
                  v-model.number="discountValue"
                  type="number"
                  min="1"
                  class="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 text-sm outline-none focus:border-black"
                />

                <span class="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                  {{ discountType === "percentage" ? "%" : "$" }}
                </span>
              </div>
            </div>

            <div class="md:col-span-2">
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Description
              </label>

              <textarea
                v-model="description"
                rows="4"
                placeholder="Describe this discount..."
                class="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
              ></textarea>
            </div>

          </div>
        </div>

        <!-- Schedule -->
        <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 class="text-lg font-bold text-gray-900">
            Schedule
          </h2>

          <div class="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">

            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Start Date
              </label>

              <input
                v-model="startDate"
                type="date"
                class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                End Date
              </label>

              <input
                v-model="endDate"
                type="date"
                class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>

          </div>
        </div>

        <!-- Restrictions -->
        <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 class="text-lg font-bold text-gray-900">
            Restrictions
          </h2>

          <div class="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">

            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Minimum Purchase
              </label>

              <div class="relative">
                <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  $
                </span>

                <input
                  v-model.number="minPurchase"
                  type="number"
                  min="0"
                  class="w-full rounded-xl border border-gray-300 py-3 pl-8 pr-4 text-sm outline-none focus:border-black"
                />
              </div>
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Usage Limit
              </label>

              <input
                v-model.number="usageLimit"
                type="number"
                min="1"
                class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>

          </div>
        </div>

        <!-- Products -->
        <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-lg font-bold text-gray-900">
                Applicable Products
              </h2>

              <p class="mt-1 text-sm text-gray-500">
                Select products that this discount applies to.
              </p>
            </div>

            <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold">
              {{ selectedProducts.length }} selected
            </span>
          </div>

          <div class="mt-6 overflow-hidden rounded-xl border border-gray-200">

            <div class="flex items-center gap-3 border-b bg-gray-50 px-4 py-3">
              <input
                v-model="selectAll"
                type="checkbox"
                class="h-4 w-4"
              />

              <span class="text-sm font-semibold text-gray-700">
                Select all products
              </span>
            </div>

            <div
              v-for="product in products"
              :key="product.id"
              class="flex items-center gap-4 border-b border-gray-100 px-4 py-4 last:border-0 hover:bg-gray-50"
            >
              <input
                :checked="selectedProducts.includes(product.id)"
                type="checkbox"
                class="h-4 w-4"
                @change="toggleProduct(product.id)"
              />

              <img
                :src="product.image"
                :alt="product.name"
                class="h-12 w-12 rounded-lg object-cover bg-gray-100"
              />

              <div class="min-w-0 flex-1">
                <p class="truncate text-sm font-semibold text-gray-900">
                  {{ product.name }}
                </p>

                <p class="text-xs text-gray-500">
                  {{ product.brand }} · ${{ product.price }}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Preview -->
      <div>
        <div class="sticky top-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

          <div class="flex items-center justify-between">
            <h2 class="text-lg font-bold text-gray-900">
              Discount Preview
            </h2>

            <button
              @click="active = !active"
              class="relative h-6 w-11 rounded-full transition"
              :class="active ? 'bg-black' : 'bg-gray-300'"
            >
              <span
                class="absolute top-1 h-4 w-4 rounded-full bg-white transition"
                :class="active ? 'left-6' : 'left-1'"
              ></span>
            </button>
          </div>

          <div class="mt-6 rounded-2xl bg-gray-100 p-6 text-center">

            <p class="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Promotion Code
            </p>

            <p class="mt-2 text-3xl font-black tracking-wider text-gray-900">
              {{ discountCode || "DISCOUNT" }}
            </p>

            <div class="my-6 border-t border-dashed border-gray-300"></div>

            <p class="text-sm text-gray-500">
              Customer gets
            </p>

            <p class="mt-1 text-4xl font-black text-gray-900">
              {{ discountValue || 0 }}{{ discountType === "percentage" ? "%" : "$" }}
            </p>

            <p class="mt-2 text-sm text-gray-500">
              discount
            </p>
          </div>

          <div class="mt-6 space-y-4 text-sm">

            <div class="flex justify-between">
              <span class="text-gray-500">Status</span>
              <span
                class="font-semibold"
                :class="active ? 'text-green-600' : 'text-gray-400'"
              >
                {{ active ? "Active" : "Inactive" }}
              </span>
            </div>

            <div class="flex justify-between">
              <span class="text-gray-500">Products</span>
              <span class="font-semibold">
                {{ selectedProducts.length }}
              </span>
            </div>

            <div class="flex justify-between">
              <span class="text-gray-500">Minimum purchase</span>
              <span class="font-semibold">
                ${{ minPurchase || 0 }}
              </span>
            </div>

            <div class="flex justify-between">
              <span class="text-gray-500">Usage limit</span>
              <span class="font-semibold">
                {{ usageLimit || "Unlimited" }}
              </span>
            </div>

          </div>

          <button
            @click="saveDiscount"
            class="mt-8 w-full rounded-xl bg-black py-3 font-semibold text-white hover:bg-gray-800"
          >
            Create Discount
          </button>

        </div>
      </div>

    </div>
  </div>
</template>