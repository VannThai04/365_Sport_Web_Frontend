<script setup lang="ts">
import { ref } from "vue";

definePageMeta({
  layout: "admin",
});

const activeTab = ref("general");

const storeName = ref("365 Sport");
const email = ref("support@365sport.com");
const phone = ref("+855 12 345 678");
const address = ref("Phnom Penh, Cambodia");

const currency = ref("USD");
const timezone = ref("Asia/Phnom_Penh");

const orderEmail = ref(true);
const stockAlert = ref(true);
const newUserAlert = ref(false);
const reviewAlert = ref(true);

const maintenanceMode = ref(false);

const saveSettings = () => {
  alert("Settings saved successfully!");

  console.log({
    storeName: storeName.value,
    email: email.value,
    phone: phone.value,
    address: address.value,
    currency: currency.value,
    timezone: timezone.value,
  });
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">

    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900">
        Settings
      </h1>

      <p class="mt-1 text-sm text-gray-500">
        Manage your store configuration and admin preferences.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-4">

      <!-- Sidebar -->
      <aside class="h-fit rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">

        <button
          @click="activeTab = 'general'"
          class="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium"
          :class="
            activeTab === 'general'
              ? 'bg-black text-white'
              : 'text-gray-600 hover:bg-gray-100'
          "
        >
          <span>⚙️</span>
          General
        </button>

        <button
          @click="activeTab = 'store'"
          class="mt-1 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium"
          :class="
            activeTab === 'store'
              ? 'bg-black text-white'
              : 'text-gray-600 hover:bg-gray-100'
          "
        >
          <span>🏪</span>
          Store
        </button>

        <button
          @click="activeTab = 'notifications'"
          class="mt-1 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium"
          :class="
            activeTab === 'notifications'
              ? 'bg-black text-white'
              : 'text-gray-600 hover:bg-gray-100'
          "
        >
          <span>🔔</span>
          Notifications
        </button>

        <button
          @click="activeTab = 'security'"
          class="mt-1 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium"
          :class="
            activeTab === 'security'
              ? 'bg-black text-white'
              : 'text-gray-600 hover:bg-gray-100'
          "
        >
          <span>🔒</span>
          Security
        </button>

        <button
          @click="activeTab = 'system'"
          class="mt-1 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium"
          :class="
            activeTab === 'system'
              ? 'bg-black text-white'
              : 'text-gray-600 hover:bg-gray-100'
          "
        >
          <span>🖥️</span>
          System
        </button>

      </aside>

      <!-- Content -->
      <main class="lg:col-span-3">

        <!-- General -->
        <div
          v-if="activeTab === 'general'"
          class="rounded-2xl border border-gray-200 bg-white shadow-sm"
        >
          <div class="border-b border-gray-200 p-6">
            <h2 class="text-lg font-bold">General Settings</h2>
            <p class="mt-1 text-sm text-gray-500">
              Basic information about your store.
            </p>
          </div>

          <div class="space-y-6 p-6">

            <div>
              <label class="mb-2 block text-sm font-semibold">
                Store Name
              </label>

              <input
                v-model="storeName"
                class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
              />
            </div>

            <div class="grid grid-cols-1 gap-5 md:grid-cols-2">

              <div>
                <label class="mb-2 block text-sm font-semibold">
                  Email
                </label>

                <input
                  v-model="email"
                  type="email"
                  class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold">
                  Phone
                </label>

                <input
                  v-model="phone"
                  class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
                />
              </div>

            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold">
                Address
              </label>

              <textarea
                v-model="address"
                rows="3"
                class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
              ></textarea>
            </div>

          </div>
        </div>

        <!-- Store -->
        <div
          v-if="activeTab === 'store'"
          class="rounded-2xl border border-gray-200 bg-white shadow-sm"
        >
          <div class="border-b border-gray-200 p-6">
            <h2 class="text-lg font-bold">Store Configuration</h2>
          </div>

          <div class="space-y-6 p-6">

            <div>
              <label class="mb-2 block text-sm font-semibold">
                Currency
              </label>

              <select
                v-model="currency"
                class="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm"
              >
                <option value="USD">USD - US Dollar</option>
                <option value="KHR">KHR - Cambodian Riel</option>
                <option value="THB">THB - Thai Baht</option>
              </select>
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold">
                Timezone
              </label>

              <select
                v-model="timezone"
                class="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm"
              >
                <option value="Asia/Phnom_Penh">
                  Asia/Phnom_Penh
                </option>
                <option value="Asia/Bangkok">
                  Asia/Bangkok
                </option>
                <option value="Asia/Singapore">
                  Asia/Singapore
                </option>
              </select>
            </div>

          </div>
        </div>

        <!-- Notifications -->
        <div
          v-if="activeTab === 'notifications'"
          class="rounded-2xl border border-gray-200 bg-white shadow-sm"
        >
          <div class="border-b border-gray-200 p-6">
            <h2 class="text-lg font-bold">Notifications</h2>
            <p class="mt-1 text-sm text-gray-500">
              Choose which notifications administrators receive.
            </p>
          </div>

          <div class="divide-y">

            <label class="flex cursor-pointer items-center justify-between p-6">
              <div>
                <p class="font-semibold">New Order</p>
                <p class="text-sm text-gray-500">
                  Notify admins when a new order is created.
                </p>
              </div>

              <input
                v-model="orderEmail"
                type="checkbox"
                class="h-5 w-5"
              />
            </label>

            <label class="flex cursor-pointer items-center justify-between p-6">
              <div>
                <p class="font-semibold">Low Stock</p>
                <p class="text-sm text-gray-500">
                  Notify when products are running low.
                </p>
              </div>

              <input
                v-model="stockAlert"
                type="checkbox"
                class="h-5 w-5"
              />
            </label>

            <label class="flex cursor-pointer items-center justify-between p-6">
              <div>
                <p class="font-semibold">New User</p>
                <p class="text-sm text-gray-500">
                  Notify when a new customer registers.
                </p>
              </div>

              <input
                v-model="newUserAlert"
                type="checkbox"
                class="h-5 w-5"
              />
            </label>

            <label class="flex cursor-pointer items-center justify-between p-6">
              <div>
                <p class="font-semibold">New Review</p>
                <p class="text-sm text-gray-500">
                  Notify when customers submit reviews.
                </p>
              </div>

              <input
                v-model="reviewAlert"
                type="checkbox"
                class="h-5 w-5"
              />
            </label>

          </div>
        </div>

        <!-- Security -->
        <div
          v-if="activeTab === 'security'"
          class="rounded-2xl border border-gray-200 bg-white shadow-sm"
        >
          <div class="border-b border-gray-200 p-6">
            <h2 class="text-lg font-bold">Security</h2>
          </div>

          <div class="space-y-4 p-6">

            <button
              class="w-full rounded-xl border border-gray-200 px-5 py-4 text-left hover:bg-gray-50"
            >
              <p class="font-semibold">Change Password</p>
              <p class="mt-1 text-sm text-gray-500">
                Update your administrator password.
              </p>
            </button>

            <button
              class="w-full rounded-xl border border-gray-200 px-5 py-4 text-left hover:bg-gray-50"
            >
              <p class="font-semibold">Two-Factor Authentication</p>
              <p class="mt-1 text-sm text-gray-500">
                Add an additional layer of security.
              </p>
            </button>

          </div>
        </div>

        <!-- System -->
        <div
          v-if="activeTab === 'system'"
          class="rounded-2xl border border-gray-200 bg-white shadow-sm"
        >
          <div class="border-b border-gray-200 p-6">
            <h2 class="text-lg font-bold">System</h2>
          </div>

          <div class="p-6">

            <label class="flex items-center justify-between rounded-xl border border-red-200 bg-red-50 p-5">

              <div>
                <p class="font-semibold text-red-700">
                  Maintenance Mode
                </p>

                <p class="mt-1 text-sm text-red-600">
                  Temporarily disable the storefront for customers.
                </p>
              </div>

              <input
                v-model="maintenanceMode"
                type="checkbox"
                class="h-5 w-5"
              />

            </label>

          </div>
        </div>

        <!-- Save -->
        <div class="mt-6 flex justify-end">
          <button
            @click="saveSettings"
            class="rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Save Changes
          </button>
        </div>

      </main>
    </div>
  </div>
</template>