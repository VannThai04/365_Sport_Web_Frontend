<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4">

    <div class="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

      <!-- Logo -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-black italic">
          <span class="text-lime-500">365</span>SPORT
        </h1>

        <p class="mt-2 text-gray-500">
          Welcome back!
        </p>
      </div>

      <!-- Login Form -->
      <form class="space-y-5">

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
            placeholder="Enter your password"
            class="w-full rounded-lg border border-gray-300 px-4 py-3
                   outline-none transition
                   focus:border-lime-500 focus:ring-2
                   focus:ring-lime-200"
          />
        </div>

        <!-- Remember / Forgot -->
        <div class="flex items-center justify-between text-sm">

          <label class="flex items-center gap-2">
            <input
              type="checkbox"
              class="h-4 w-4 accent-lime-500"
            />

            <span class="text-gray-600">
              Remember me
            </span>
          </label>

          <a
            href="#"
            class="font-medium text-lime-600 hover:text-lime-700"
          >
            Forgot password?
          </a>

        </div>

        <!-- Login Button -->
        <button
          type="submit"
          class="w-full rounded-lg bg-black py-3
                 font-bold text-white transition
                 hover:bg-lime-500 hover:text-black"
        >
          LOGIN
        </button>

      </form>

      <!-- Register -->
      <div class="mt-6 text-center text-sm text-gray-500">

        Don't have an account?

        <NuxtLink
          to="/Auth/Register"
          class="font-semibold text-lime-600 hover:text-lime-700"
        >
          Register
        </NuxtLink>

      </div>

    </div>

  </div>
</template>