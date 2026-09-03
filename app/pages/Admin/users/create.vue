<script setup lang="ts">
import { reactive, ref } from "vue";

definePageMeta({
  layout: "admin"
});

const showPassword = ref(false);

const user = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  role: "Customer",
  status: "Active",
  address: "",
  city: "",
  country: "Cambodia"
});

const errors = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: ""
});

const validateForm = () => {
  errors.firstName = "";
  errors.lastName = "";
  errors.email = "";
  errors.phone = "";
  errors.password = "";

  let valid = true;

  if (!user.firstName.trim()) {
    errors.firstName = "First name is required.";
    valid = false;
  }

  if (!user.lastName.trim()) {
    errors.lastName = "Last name is required.";
    valid = false;
  }

  if (!user.email.trim()) {
    errors.email = "Email is required.";
    valid = false;
  }

  if (!user.phone.trim()) {
    errors.phone = "Phone number is required.";
    valid = false;
  }

  if (!user.password.trim()) {
    errors.password = "Password is required.";
    valid = false;
  }

  return valid;
};

const createUser = () => {
  if (!validateForm()) {
    return;
  }

  alert("User created successfully!");

  navigateTo("/admin/users");
};

const cancel = () => {
  navigateTo("/admin/users");
};
</script>

<template>
  <div class="space-y-6">

    <!-- Header -->
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

      <div>
        <div class="flex items-center gap-3">

          <NuxtLink
            to="/admin/users"
            class="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition hover:bg-gray-100 hover:text-black"
            title="Back to Users"
          >
            ←
          </NuxtLink>

          <div>
            <h1 class="text-2xl font-bold text-gray-900">
              Create User
            </h1>

            <p class="mt-1 text-sm text-gray-500">
              Add a new customer or administrator.
            </p>
          </div>

        </div>
      </div>

    </div>

    <!-- Form -->
    <div class="grid gap-6 lg:grid-cols-3">

      <!-- Main Form -->
      <div class="space-y-6 lg:col-span-2">

        <!-- Personal Information -->
        <div
          class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >

          <div class="mb-6">
            <h2 class="text-lg font-bold text-gray-900">
              Personal Information
            </h2>

            <p class="mt-1 text-sm text-gray-500">
              Basic information about the user.
            </p>
          </div>

          <div class="grid gap-5 sm:grid-cols-2">

            <!-- First Name -->
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                First Name
                <span class="text-red-500">*</span>
              </label>

              <input
                v-model="user.firstName"
                type="text"
                placeholder="Enter first name"
                class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
                :class="{ 'border-red-500': errors.firstName }"
              />

              <p
                v-if="errors.firstName"
                class="mt-1 text-xs text-red-500"
              >
                {{ errors.firstName }}
              </p>
            </div>

            <!-- Last Name -->
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Last Name
                <span class="text-red-500">*</span>
              </label>

              <input
                v-model="user.lastName"
                type="text"
                placeholder="Enter last name"
                class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
                :class="{ 'border-red-500': errors.lastName }"
              />

              <p
                v-if="errors.lastName"
                class="mt-1 text-xs text-red-500"
              >
                {{ errors.lastName }}
              </p>
            </div>

            <!-- Email -->
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Email Address
                <span class="text-red-500">*</span>
              </label>

              <input
                v-model="user.email"
                type="email"
                placeholder="example@email.com"
                class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
                :class="{ 'border-red-500': errors.email }"
              />

              <p
                v-if="errors.email"
                class="mt-1 text-xs text-red-500"
              >
                {{ errors.email }}
              </p>
            </div>

            <!-- Phone -->
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Phone Number
                <span class="text-red-500">*</span>
              </label>

              <input
                v-model="user.phone"
                type="tel"
                placeholder="+855 12 345 678"
                class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
                :class="{ 'border-red-500': errors.phone }"
              />

              <p
                v-if="errors.phone"
                class="mt-1 text-xs text-red-500"
              >
                {{ errors.phone }}
              </p>
            </div>

          </div>

        </div>

        <!-- Account Information -->
        <div
          class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >

          <div class="mb-6">
            <h2 class="text-lg font-bold text-gray-900">
              Account Information
            </h2>

            <p class="mt-1 text-sm text-gray-500">
              Login and account settings.
            </p>
          </div>

          <div class="space-y-5">

            <!-- Password -->
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Password
                <span class="text-red-500">*</span>
              </label>

              <div class="relative">

                <input
                  v-model="user.password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Enter password"
                  class="w-full rounded-xl border border-gray-200 px-4 py-3 pr-20 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
                  :class="{ 'border-red-500': errors.password }"
                />

                <button
                  type="button"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-500 hover:text-black"
                  @click="showPassword = !showPassword"
                >
                  {{ showPassword ? "Hide" : "Show" }}
                </button>

              </div>

              <p
                v-if="errors.password"
                class="mt-1 text-xs text-red-500"
              >
                {{ errors.password }}
              </p>
            </div>

            <!-- Role -->
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Role
              </label>

              <select
                v-model="user.role"
                class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
              >
                <option value="Customer">
                  Customer
                </option>

                <option value="Admin">
                  Admin
                </option>
              </select>
            </div>

            <!-- Status -->
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Account Status
              </label>

              <select
                v-model="user.status"
                class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
              >
                <option value="Active">
                  Active
                </option>

                <option value="Blocked">
                  Blocked
                </option>
              </select>
            </div>

          </div>

        </div>

        <!-- Address -->
        <div
          class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >

          <div class="mb-6">
            <h2 class="text-lg font-bold text-gray-900">
              Address
            </h2>

            <p class="mt-1 text-sm text-gray-500">
              User's delivery address.
            </p>
          </div>

          <div class="space-y-5">

            <!-- Address -->
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Address
              </label>

              <textarea
                v-model="user.address"
                rows="3"
                placeholder="Enter address"
                class="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
              ></textarea>
            </div>

            <div class="grid gap-5 sm:grid-cols-2">

              <!-- City -->
              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  City
                </label>

                <input
                  v-model="user.city"
                  type="text"
                  placeholder="Phnom Penh"
                  class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
                />
              </div>

              <!-- Country -->
              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Country
                </label>

                <input
                  v-model="user.country"
                  type="text"
                  placeholder="Cambodia"
                  class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
                />
              </div>

            </div>

          </div>

        </div>

      </div>

      <!-- Right Side -->
      <div class="space-y-6">

        <!-- Account Preview -->
        <div
          class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >

          <h2 class="text-lg font-bold text-gray-900">
            Account Preview
          </h2>

          <div class="mt-6 flex flex-col items-center text-center">

            <!-- Avatar -->
            <div
              class="flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 text-3xl font-bold text-gray-500"
            >
              {{
                user.firstName || user.lastName
                  ? `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`
                  : "?"
              }}
            </div>

            <h3 class="mt-4 font-bold text-gray-900">
              {{ user.firstName || user.lastName
                ? `${user.firstName} ${user.lastName}`
                : "New User"
              }}
            </h3>

            <p class="mt-1 break-all text-sm text-gray-500">
              {{ user.email || "user@email.com" }}
            </p>

            <div class="mt-4 flex gap-2">

              <span
                class="rounded-full px-3 py-1 text-xs font-semibold"
                :class="
                  user.role === 'Admin'
                    ? 'bg-purple-100 text-purple-700'
                    : 'bg-gray-100 text-gray-700'
                "
              >
                {{ user.role }}
              </span>

              <span
                class="rounded-full px-3 py-1 text-xs font-semibold"
                :class="
                  user.status === 'Active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                "
              >
                {{ user.status }}
              </span>

            </div>

          </div>

        </div>

        <!-- Actions -->
        <div
          class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >

          <h2 class="text-lg font-bold text-gray-900">
            Actions
          </h2>

          <div class="mt-5 space-y-3">

            <button
              type="button"
              class="w-full rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
              @click="createUser"
            >
              Create User
            </button>

            <button
              type="button"
              class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              @click="cancel"
            >
              Cancel
            </button>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>