<script setup lang="ts">
import { onMounted } from "vue";

definePageMeta({
  layout: "user",
});

const { user, loadUser, logout } = useAuth();

onMounted(loadUser);
</script>

<template>
  <main class="min-h-[60vh] bg-gray-50 px-4 py-12 sm:px-6">
    <div class="mx-auto max-w-2xl">
      <div v-if="user" class="rounded-2xl bg-white p-8 shadow-sm">
        <div class="flex items-center gap-4 border-b border-gray-100 pb-6">
          <div
            class="flex h-16 w-16 items-center justify-center rounded-full bg-lime-400 text-2xl font-black text-black"
          >
            {{ user.name.charAt(0).toUpperCase() }}
          </div>

          <div>
            <p class="text-sm font-medium text-lime-600">365SPORT member</p>
            <h1 class="text-2xl font-bold text-gray-900">{{ user.name }}</h1>
          </div>
        </div>

        <dl class="mt-6 space-y-4">
          <div>
            <dt class="text-sm text-gray-500">Gmail address</dt>
            <dd class="font-medium text-gray-900">{{ user.email }}</dd>
          </div>

          <div>
            <dt class="text-sm text-gray-500">Account role</dt>
            <dd class="font-medium text-gray-900">{{ user.role }}</dd>
          </div>
        </dl>

        <button
          type="button"
          class="mt-8 rounded-lg bg-black px-5 py-3 font-bold text-white transition hover:bg-lime-500 hover:text-black"
          @click="logout"
        >
          LOG OUT
        </button>
      </div>

      <div v-else class="rounded-2xl bg-white p-8 text-center shadow-sm">
        <h1 class="text-2xl font-bold text-gray-900">
          Log in to view your profile
        </h1>
        <NuxtLink
          to="/Auth/Login"
          class="mt-6 inline-block rounded-lg bg-black px-5 py-3 font-bold text-white hover:bg-lime-500 hover:text-black"
        >
          LOGIN
        </NuxtLink>
      </div>
    </div>
  </main>
</template>
