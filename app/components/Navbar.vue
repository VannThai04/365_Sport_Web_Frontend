<template>
  <header class="w-full bg-white border-b border-gray-200 sticky top-0 z-50">

    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="h-20 flex items-center justify-between">

        <!-- Logo -->
        <NuxtLink
          to="/"
          class="flex items-center"
        >
          <img
            class="w-16 sm:w-20 object-contain"
            src="https://361sport.com/cdn/shop/files/361_logo-BLACK_cee7a490-836a-429f-b257-f2c209a0327a.png?v=1707293000&width=110"
            alt="361 Sport"
          />
        </NuxtLink>


        <!-- Desktop Menu -->
        <ul class="hidden md:flex items-center gap-8 lg:gap-10">

          <li>
            <NuxtLink
              to="/"
              class="text-gray-800 font-medium hover:text-amber-500 transition duration-300"
            >
              Home
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              to="/About"
              class="text-gray-800 font-medium hover:text-amber-500 transition duration-300"
            >
              About
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              to="/Product"
              class="text-gray-800 font-medium hover:text-amber-500 transition duration-300"
            >
              Product
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              to="/Contact"
              class="text-gray-800 font-medium hover:text-amber-500 transition duration-300"
            >
              Contact
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              to="/Order"
              class="text-gray-800 font-medium hover:text-amber-500 transition duration-300"
            >
              Order
            </NuxtLink>
          </li>

        </ul>


        <!-- Right Icons -->
        <div class="hidden sm:flex items-center gap-5">

          <!-- Search -->
          <button
            class="group"
            title="Search"
          >
            <img
              class="w-6 h-6 group-hover:scale-110 transition duration-300"
              src="https://img.icons8.com/?size=100&id=132&format=png&color=000000"
              alt="Search"
            />
          </button>

          <!-- Wishlist -->
          <NuxtLink
            to="/Wishlist"
            class="relative group"
            title="Wishlist"
          >
            <img
              class="w-6 h-6 group-hover:scale-110 transition duration-300"
              src="https://img.icons8.com/?size=100&id=12438&format=png&color=000000"
              alt="Wishlist"
            />

            <span
              class="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center"
            >
              2
            </span>
          </NuxtLink>

          <!-- Cart -->
          <NuxtLink
            to="/Cart"
            class="relative group"
            title="Cart"
          >
            <img
              class="w-6 h-6 group-hover:scale-110 transition duration-300"
              src="https://img.icons8.com/?size=100&id=3686&format=png&color=000000"
              alt="Cart"
            />

            <span
              class="absolute -top-2 -right-2 bg-amber-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center"
            >
              3
            </span>
          </NuxtLink>

          <!-- Login -->
          <NuxtLink
            to="/Auth/Login"
            class="bg-black text-white px-5 py-2 rounded-lg font-medium hover:bg-amber-500 hover:text-black transition duration-300"
          >
            Login
          </NuxtLink>

        </div>


        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7"
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