<<<<<<< HEAD
=======
<script setup lang="ts">

// ===============================================
// Wishlist
// ===============================================

const {
  wishlistCount
} = useWishlist();


// ===============================================
// Cart
// ===============================================

const {
  cartCount
} = useCart();

</script>
>>>>>>> 5122ed19357ad99144e6253845c95327c81f47f1


<template>

  <header
    class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white"
  >

    <nav
      class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >

      <div
        class="flex h-20 items-center justify-between gap-4 sm:gap-6 lg:gap-8"
      >

        <!-- ===================================== -->
        <!-- Logo -->
        <!-- ===================================== -->

        <NuxtLink
          to="/"
          class="flex items-center"
        >

          <h1
            class="flex items-baseline font-black italic leading-none"
          >

            <span
              class="text-5xl tracking-tighter text-lime-500"
            >
              365
            </span>

            <span
              class="ml-1 text-2xl tracking-tight text-black"
            >
              Sports
            </span>

          </h1>

        </NuxtLink>


        <!-- ===================================== -->
        <!-- Desktop Menu -->
        <!-- ===================================== -->

        <ul
          class="hidden items-center gap-8 md:flex lg:gap-10"
        >

          <!-- Home -->

          <li>

            <NuxtLink
              to="/"
              class="font-medium text-gray-800 transition duration-300 hover:text-amber-500"
              active-class="bg-black text-white px-5 py-2 rounded-lg"
            >
              Home
            </NuxtLink>

          </li>


          <!-- Product -->

          <li>

            <NuxtLink
              to="/Product"
              class="font-medium text-gray-800 transition duration-300 hover:text-amber-500"
              active-class="bg-black text-white px-5 py-2 rounded-lg"
            >
              Product
            </NuxtLink>

          </li>


          <!-- About -->

          <li>

            <NuxtLink
              to="/About"
              class="font-medium text-gray-800 transition duration-300 hover:text-amber-500"
              active-class="bg-black text-white px-5 py-2 rounded-lg"
            >
              About
            </NuxtLink>

          </li>


          <!-- Contact -->

          <li>

            <NuxtLink
              to="/Contact"
              class="font-medium text-gray-800 transition duration-300 hover:text-amber-500"
              active-class="bg-black text-white px-5 py-2 rounded-lg"
            >
              Contact
            </NuxtLink>

          </li>

        </ul>


        <!-- ===================================== -->
        <!-- Right Icons -->
        <!-- ===================================== -->

        <div
          class="hidden items-center gap-5 sm:flex"
        >

          <!-- ================================= -->
          <!-- Search -->
          <!-- ================================= -->

          <button
            class="group"
            title="Search"
          >

            <img
              class="h-6 w-6 transition duration-300 group-hover:scale-110"
              src="https://img.icons8.com/?size=100&id=132&format=png&color=000000"
              alt="Search"
            />

          </button>


          <!-- ================================= -->
          <!-- Wishlist -->
          <!-- ================================= -->

          <NuxtLink
            to="/Wishlist"
            class="group relative flex items-center justify-center"
            title="Wishlist"
          >

            <img
              class="h-6 w-6 transition duration-300 group-hover:scale-110"
              src="https://img.icons8.com/?size=100&id=glkpNAGhoITn&format=png&color=000000"
              alt="Wishlist"
            />


            <!-- Wishlist Count -->

            <span
              v-if="wishlistCount > 0"
              class="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white"
            >
              {{ wishlistCount }}
            </span>

          </NuxtLink>


          <!-- ================================= -->
          <!-- Cart -->
          <!-- ================================= -->

          <NuxtLink
            to="/Cart"
            class="group relative"
            title="Cart"
          >

            <img
              class="h-6 w-6 transition duration-300 group-hover:scale-110"
              src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000"
              alt="Cart"
            />


            <!-- Cart Count -->

            <span
              v-if="cartCount > 0"
              class="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1 text-xs font-bold text-white"
            >
              {{ cartCount }}
            </span>

          </NuxtLink>


          <!-- ================================= -->
          <!-- Login -->
          <!-- ================================= -->

          <NuxtLink
            to="/Auth/Login"
            class="rounded-lg bg-black px-5 py-2 font-medium text-white transition duration-300 hover:bg-amber-500 hover:text-black"
          >
            Login
          </NuxtLink>

        </div>


        <!-- ===================================== -->
        <!-- Mobile Menu Button -->
        <!-- ===================================== -->

        <button
          class="rounded-lg p-2 hover:bg-gray-100 md:hidden"
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >

            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />

          </svg>

        </button>

      </div>

    </nav>
    

  </header>

</template>