<template>
  <div class="min-h-screen bg-gray-100 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Page Title -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">
          Shopping Cart
        </h1>
        <p class="text-gray-500 mt-2">
          Review your items before checkout
        </p>
      </div>

      <!-- Cart Content -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <!-- Cart Items -->
        <div class="lg:col-span-2 space-y-4">

          <!-- Item 1 -->
          <div class="bg-white rounded-xl shadow-sm p-5 flex flex-col sm:flex-row gap-5">

            <!-- Product Image -->
            <div class="w-full sm:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                alt="Sport Shoes"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Product Info -->
            <div class="flex-1">

              <div class="flex justify-between gap-4">
                <div>
                  <h2 class="text-lg font-semibold text-gray-900">
                    Nike Sport Shoes
                  </h2>

                  <p class="text-sm text-gray-500 mt-1">
                    Running Shoes
                  </p>
                </div>

                <!-- Delete -->
                <button
                  class="text-red-500 hover:text-red-700 transition"
                >
                  🗑
                </button>
              </div>

              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">

                <!-- Quantity -->
                <div class="flex items-center border rounded-lg w-fit">

                  <button
                    class="px-3 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    −
                  </button>

                  <span class="px-4 py-2 font-medium">
                    1
                  </span>

                  <button
                    class="px-3 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>

                </div>

                <!-- Price -->
                <p class="text-xl font-bold text-gray-900">
                  $89.99
                </p>

              </div>
            </div>
          </div>


          <!-- Item 2 -->
          <div class="bg-white rounded-xl shadow-sm p-5 flex flex-col sm:flex-row gap-5">

            <div class="w-full sm:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
                alt="Sport Bag"
                class="w-full h-full object-cover"
              />
            </div>

            <div class="flex-1">

              <div class="flex justify-between gap-4">

                <div>
                  <h2 class="text-lg font-semibold text-gray-900">
                    Sport Backpack
                  </h2>

                  <p class="text-sm text-gray-500 mt-1">
                    Training Bag
                  </p>
                </div>

                <button
                  class="text-red-500 hover:text-red-700 transition"
                >
                  🗑
                </button>

              </div>

              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">

                <div class="flex items-center border rounded-lg w-fit">

                  <button
                    class="px-3 py-2 hover:bg-gray-100"
                  >
                    −
                  </button>

                  <span class="px-4 py-2 font-medium">
                    2
                  </span>

                  <button
                    class="px-3 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>

                </div>

                <p class="text-xl font-bold text-gray-900">
                  $49.99
                </p>

              </div>

            </div>
          </div>


          <!-- Continue Shopping -->
          <div class="pt-4">
            <NuxtLink
              to="/Product"
              class="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800"
            >
              ← Continue Shopping
            </NuxtLink>
          </div>

        </div>


        <!-- Order Summary -->
        <div class="lg:col-span-1">

          <div class="bg-white rounded-xl shadow-sm p-6 sticky top-6">

            <h2 class="text-xl font-bold text-gray-900 mb-6">
              Order Summary
            </h2>

            <!-- Subtotal -->
            <div class="flex justify-between text-gray-600 mb-4">
              <span>Subtotal</span>
              <span>$189.97</span>
            </div>

            <!-- Shipping -->
            <div class="flex justify-between text-gray-600 mb-4">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>

            <!-- Discount -->
            <div class="flex justify-between text-green-600 mb-4">
              <span>Discount</span>
              <span>-$10.00</span>
            </div>

            <div class="border-t pt-4 mt-4">
              <div class="flex justify-between items-center">

                <span class="text-lg font-semibold text-gray-900">
                  Total
                </span>

                <span class="text-2xl font-bold text-blue-600">
                  $184.97
                </span>

              </div>
            </div>

            <!-- Coupon -->
            <div class="mt-6">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Promo Code
              </label>

              <div class="flex">
                <input
                  type="text"
                  placeholder="Enter code"
                  class="w-full border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  class="bg-gray-900 text-white px-4 py-2 rounded-r-lg hover:bg-gray-800"
                >
                  Apply
                </button>
              </div>
            </div>

            <!-- Checkout -->
            <button
              class="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Proceed to Checkout
            </button>

            <!-- Payment Info -->
            <p class="text-center text-xs text-gray-400 mt-4">
              Secure checkout · Safe payment
            </p>

          </div>

        </div>

      </div>

    </div>
  </div>
</template>