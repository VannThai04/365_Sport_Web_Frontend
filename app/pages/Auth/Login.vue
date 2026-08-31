<template>
  <div class="min-h-screen bg-gray-100 px-4 py-8">

    <div class="mx-auto w-full max-w-md">

      <!-- Back Button -->
      <div class="mb-4">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition-all duration-200 hover:-translate-x-1 hover:bg-white hover:text-gray-900 hover:shadow-sm"
        >
          <span class="text-lg leading-none">←</span>
          Back to Home
        </NuxtLink>
      </div>


      <!-- Login Card -->
      <div class="rounded-xl bg-white p-8 shadow-lg">

        <!-- Logo -->
        <div class="mb-8 text-center">

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
            <label class="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-lime-500 focus:ring-2 focus:ring-lime-200"
            />
          </div>


          <!-- Password -->
          <div>
            <label class="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-lime-500 focus:ring-2 focus:ring-lime-200"
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

            <NuxtLink
              to="/Auth/ForgotPassword"
              class="font-medium text-lime-600 hover:text-lime-700"
            >
              Forgot password?
            </NuxtLink>

          </div>


          <!-- Login -->
          <button
            type="submit"
            class="w-full rounded-lg bg-black py-3 font-bold text-white transition-all duration-200 hover:bg-lime-500 hover:text-black active:scale-[0.98]"
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

  </div>
</template>
```
