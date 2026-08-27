<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

    <div class="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

      <!-- Logo -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-black italic">
          <span class="text-lime-500">365</span>SPORT
        </h1>

        <p class="mt-2 text-gray-500">
          Create your account
        </p>
      </div>

      <!-- Register Form -->
      <form class="space-y-5">

        <!-- Name -->
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            class="w-full rounded-lg border border-gray-300 px-4 py-3
                   outline-none transition
                   focus:border-lime-500 focus:ring-2
                   focus:ring-lime-200"
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            class="w-full rounded-lg border border-gray-300 px-4 py-3
                   outline-none transition
                   focus:border-lime-500 focus:ring-2
                   focus:ring-lime-200"
          />
        </div>

        <!-- Password -->
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-700">
            Password
          </label>

          <input
            type="password"
            placeholder="Create a password"
            class="w-full rounded-lg border border-gray-300 px-4 py-3
                   outline-none transition
                   focus:border-lime-500 focus:ring-2
                   focus:ring-lime-200"
          />
        </div>

        <!-- Confirm Password -->
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-700">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm your password"
            class="w-full rounded-lg border border-gray-300 px-4 py-3
                   outline-none transition
                   focus:border-lime-500 focus:ring-2
                   focus:ring-lime-200"
          />
        </div>

        <!-- Terms -->
        <div class="flex items-start gap-2 text-sm">

          <input
            type="checkbox"
            class="mt-1 h-4 w-4 accent-lime-500"
          />

          <p class="text-gray-600">
            I agree to the
            <a
              href="#"
              class="font-medium text-lime-600 hover:text-lime-700"
            >
              Terms & Conditions
            </a>
          </p>

        </div>

        <!-- Register Button -->
        <button
          type="submit"
          class="w-full rounded-lg bg-black py-3
                 font-bold text-white transition
                 hover:bg-lime-500 hover:text-black"
        >
          CREATE ACCOUNT
        </button>

      </form>

      <!-- Login -->
      <div class="mt-6 text-center text-sm text-gray-500">

        Already have an account?

        <NuxtLink
          to="/Auth/Login"
          class="font-semibold text-lime-600 hover:text-lime-700"
        >
          Login
        </NuxtLink>

      </div>

    </div>

  </div>
</template>