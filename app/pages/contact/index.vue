<script setup lang="ts"> 
definePageMeta({
    layout: "user"
})
</script>
<template>
  <div class="min-h-screen bg-gray-100 px-6 py-12">

    <!-- Title -->
    <div class="mx-auto mb-10 max-w-7xl text-center">
      <h1 class="text-4xl font-bold text-gray-900">
        Contact Us
      </h1>

      <p class="mt-3 text-gray-500">
        Have a question? We would love to hear from you.
      </p>
    </div>

    <!-- Contact Content -->
    <div class="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

      <!-- Contact Information -->
      <div class="rounded-2xl bg-black p-8 text-white shadow-lg">

        <h2 class="text-2xl font-bold">
          Get in Touch
        </h2>

        <p class="mt-3 text-gray-300">
          Contact us if you have any questions about our products,
          orders, or services.
        </p>

        <div class="mt-8 space-y-6">

          <!-- Email -->
          <div>
            <p class="text-sm text-gray-400">
              Email
            </p>

            <p class="mt-1 font-medium">
              support@365sport.com
            </p>
          </div>

          <!-- Phone -->
          <div>
            <p class="text-sm text-gray-400">
              Phone
            </p>

            <p class="mt-1 font-medium">
              +855 12 345 678
            </p>
          </div>

          <!-- Address -->
          <div>
            <p class="text-sm text-gray-400">
              Address
            </p>

            <p class="mt-1 font-medium">
              Phnom Penh, Cambodia
            </p>
          </div>

        </div>
      </div>

      <!-- Contact Form -->
      <div class="rounded-2xl bg-white p-8 shadow-lg">

        <h2 class="text-2xl font-bold text-gray-900">
          Send Us a Message
        </h2>

        <form class="mt-6 space-y-5">

          <!-- Name -->
          <div>
            <label class="mb-2 block text-sm font-medium text-gray-700">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            />
          </div>

          <!-- Message -->
          <div>
            <label class="mb-2 block text-sm font-medium text-gray-700">
              Message
            </label>

            <textarea
              rows="5"
              placeholder="Write your message..."
              class="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            ></textarea>
          </div>

          <!-- Button -->
          <button
            type="submit"
            class="w-full cursor-pointer rounded-lg bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
          >
            Send Message
          </button>

        </form>
      </div>

    </div>
  </div>
</template>