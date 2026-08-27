<template>
  <div class="min-h-screen bg-gray-100 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">
            My Wishlist
          </h1>

          <p class="text-gray-500 mt-2">
            Save your favorite sports products for later
          </p>
        </div>

        <span class="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
          4 Items
        </span>
      </div>


      <!-- Wishlist Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <!-- Product 1 -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition">

          <!-- Image -->
          <div class="relative h-64 bg-gray-100">

            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt="Nike Sport Shoes"
              class="w-full h-full object-cover"
            />

            <!-- Remove Wishlist -->
            <button
              class="absolute top-3 right-3 w-9 h-9 bg-white rounded-full shadow flex items-center justify-center text-red-500 hover:bg-red-50"
            >
              ♥
            </button>

            <!-- Discount -->
            <span class="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              -20%
            </span>

          </div>


          <!-- Product Info -->
          <div class="p-5">

            <p class="text-sm text-gray-500">
              Running Shoes
            </p>

            <h2 class="text-lg font-semibold text-gray-900 mt-1">
              Nike Sport Shoes
            </h2>

            <div class="flex items-center gap-2 mt-3">

              <span class="text-xl font-bold text-blue-600">
                $89.99
              </span>

              <span class="text-sm text-gray-400 line-through">
                $110.00
              </span>

            </div>


            <!-- Add Cart -->
            <button
              class="w-full mt-5 bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>

          </div>

        </div>


        <!-- Product 2 -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition">

          <div class="relative h-64 bg-gray-100">

            <img
              src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
              alt="Sport Backpack"
              class="w-full h-full object-cover"
            />

            <button
              class="absolute top-3 right-3 w-9 h-9 bg-white rounded-full shadow flex items-center justify-center text-red-500 hover:bg-red-50"
            >
              ♥
            </button>

          </div>


          <div class="p-5">

            <p class="text-sm text-gray-500">
              Training Bag
            </p>

            <h2 class="text-lg font-semibold text-gray-900 mt-1">
              Sport Backpack
            </h2>

            <div class="flex items-center gap-2 mt-3">

              <span class="text-xl font-bold text-blue-600">
                $49.99
              </span>

            </div>


            <button
              class="w-full mt-5 bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>

          </div>

        </div>


        <!-- Product 3 -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition">

          <div class="relative h-64 bg-gray-100">

            <img
              src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55"
              alt="Football"
              class="w-full h-full object-cover"
            />

            <button
              class="absolute top-3 right-3 w-9 h-9 bg-white rounded-full shadow flex items-center justify-center text-red-500 hover:bg-red-50"
            >
              ♥
            </button>

          </div>


          <div class="p-5">

            <p class="text-sm text-gray-500">
              Football
            </p>

            <h2 class="text-lg font-semibold text-gray-900 mt-1">
              Professional Football
            </h2>

            <div class="flex items-center gap-2 mt-3">

              <span class="text-xl font-bold text-blue-600">
                $35.00
              </span>

            </div>


            <button
              class="w-full mt-5 bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>

          </div>

        </div>


        <!-- Product 4 -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition">

          <div class="relative h-64 bg-gray-100">

            <img
              src="https://images.unsplash.com/photo-1517466787929-bc90951d0974"
              alt="Sports Jersey"
              class="w-full h-full object-cover"
            />

            <button
              class="absolute top-3 right-3 w-9 h-9 bg-white rounded-full shadow flex items-center justify-center text-red-500 hover:bg-red-50"
            >
              ♥
            </button>

            <span class="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
              New
            </span>

          </div>


          <div class="p-5">

            <p class="text-sm text-gray-500">
              Sports Clothing
            </p>

            <h2 class="text-lg font-semibold text-gray-900 mt-1">
              Sports Jersey
            </h2>

            <div class="flex items-center gap-2 mt-3">

              <span class="text-xl font-bold text-blue-600">
                $39.99
              </span>

            </div>


            <button
              class="w-full mt-5 bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>

          </div>

        </div>

      </div>


      <!-- Continue Shopping -->
      <div class="mt-10 text-center">

        <NuxtLink
          to="/Product"
          class="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800"
        >
          ← Continue Shopping
        </NuxtLink>

      </div>

    </div>
  </div>
</template>