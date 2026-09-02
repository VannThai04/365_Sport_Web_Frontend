<template>
  <div class="min-h-screen bg-gray-100 py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- ========================================= -->
      <!-- Page Title -->
      <!-- ========================================= -->

      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Shopping Cart</h1>

        <p class="mt-2 text-gray-500">Review your items before checkout</p>
      </div>

      <!-- ========================================= -->
      <!-- EMPTY CART -->
      <!-- ========================================= -->

      <div
        v-if="cart.length === 0"
        class="rounded-2xl bg-white px-6 py-20 text-center shadow-sm"
      >
        <div class="text-6xl text-gray-300">🛒</div>

        <h2 class="mt-5 text-2xl font-bold text-gray-900">
          Your cart is empty
        </h2>

        <p class="mx-auto mt-2 max-w-md text-gray-500">
          You haven't added any products to your cart yet. Explore our products
          and start shopping.
        </p>

        <NuxtLink
          to="/Product"
          class="mt-6 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Start Shopping
        </NuxtLink>
      </div>

      <!-- ========================================= -->
      <!-- CART -->
      <!-- ========================================= -->

      <div v-else class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <!-- ======================================= -->
        <!-- Cart Items -->
        <!-- ======================================= -->

        <div class="space-y-4 lg:col-span-2">
          <!-- Cart Header -->

          <div
            class="flex items-center justify-between rounded-xl bg-white px-5 py-4 shadow-sm"
          >
            <div>
              <h2 class="font-bold text-gray-900">Cart Items</h2>

              <p class="text-sm text-gray-500">
                {{ cartCount }}

                {{ cartCount === 1 ? "item" : "items" }}
              </p>
            </div>

            <!-- Clear Cart -->

            <button
              @click="clearCart"
              class="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
            >
              Clear Cart
            </button>
          </div>

          <!-- ======================================= -->
          <!-- Cart Product -->
          <!-- ======================================= -->

          <div
            v-for="item in cart"
            :key="`${item.product.id}-${item.size}`"
            class="flex flex-col gap-5 rounded-xl bg-white p-5 shadow-sm sm:flex-row"
          >
            <!-- Product Image -->

            <NuxtLink
              :to="`/Product/${item.product.id}`"
              class="h-32 w-full shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:w-32"
            >
              <img
                :src="item.product.image"
                :alt="item.product.name"
                class="h-full w-full object-cover transition duration-300 hover:scale-105"
              />
            </NuxtLink>

            <!-- Product Info -->

            <div class="flex-1">
              <!-- Top -->

              <div class="flex justify-between gap-4">
                <div>
                  <!-- Brand -->

                  <p
                    class="text-xs font-bold uppercase tracking-wider text-gray-400"
                  >
                    {{ item.product.brand }}
                  </p>

                  <!-- Name -->

                  <NuxtLink :to="`/Product/${item.product.id}`">
                    <h2
                      class="mt-1 text-lg font-bold text-gray-900 transition hover:text-blue-600"
                    >
                      {{ item.product.name }}
                    </h2>
                  </NuxtLink>

                  <!-- Category -->

                  <p class="mt-1 text-sm text-gray-500">
                    {{ item.product.category }}
                  </p>

                  <p class="mt-1 text-sm font-semibold text-gray-700">
                    Size: {{ item.size }}
                  </p>
                </div>

                <!-- Delete -->

                <button
                  @click="removeFromCart(item.product.id, item.size)"
                  class="flex h-9 w-9 items-center justify-center rounded-lg text-red-500 transition hover:bg-red-50 hover:text-red-700"
                  title="Remove item"
                >
                  🗑
                </button>
              </div>

              <!-- Bottom -->

              <div
                class="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <!-- Quantity -->

                <div
                  class="flex w-fit items-center overflow-hidden rounded-lg border border-gray-200"
                >
                  <!-- Minus -->

                  <button
                    @click="decreaseQuantity(item.product.id, item.size)"
                    :disabled="item.quantity <= 1"
                    class="px-4 py-2 text-lg text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    −
                  </button>

                  <!-- Quantity -->

                  <span
                    class="min-w-12 border-x border-gray-200 px-4 py-2 text-center font-semibold text-gray-900"
                  >
                    {{ item.quantity }}
                  </span>

                  <!-- Plus -->

                  <button
                    @click="increaseQuantity(item.product.id, item.size)"
                    :disabled="item.quantity >= item.product.stock"
                    class="px-4 py-2 text-lg text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    +
                  </button>
                </div>

                <!-- Price -->

                <div class="text-right">
                  <p class="text-xl font-bold text-gray-900">
                    $
                    {{ (item.product.price * item.quantity).toFixed(2) }}
                  </p>

                  <p class="text-xs text-gray-400">
                    ${{ item.product.price.toFixed(2) }}
                    each
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- ======================================= -->
          <!-- Continue Shopping -->
          <!-- ======================================= -->

          <div class="pt-4">
            <NuxtLink
              to="/Product"
              class="inline-flex items-center gap-2 font-medium text-blue-600 transition hover:text-blue-800"
            >
              ← Continue Shopping
            </NuxtLink>
          </div>
        </div>

        <!-- ======================================= -->
        <!-- Order Summary -->
        <!-- ======================================= -->

        <div class="lg:col-span-1">
          <div class="sticky top-24 rounded-xl bg-white p-6 shadow-sm">
            <h2 class="mb-6 text-xl font-bold text-gray-900">Order Summary</h2>

            <!-- Subtotal -->

            <div class="mb-4 flex justify-between text-gray-600">
              <span> Subtotal </span>

              <span> ${{ subtotal.toFixed(2) }} </span>
            </div>

            <!-- Shipping -->

            <div class="mb-4 flex justify-between text-gray-600">
              <span> Shipping </span>

              <span> ${{ shipping.toFixed(2) }} </span>
            </div>

            <!-- Discount -->

            <div class="mb-4 flex justify-between text-green-600">
              <span> Discount </span>

              <span> -${{ discount.toFixed(2) }} </span>
            </div>

            <!-- Total -->

            <div class="mt-4 border-t pt-4">
              <div class="flex items-center justify-between">
                <span class="text-lg font-semibold text-gray-900"> Total </span>

                <span class="text-2xl font-bold text-blue-600">
                  ${{ total.toFixed(2) }}
                </span>
              </div>
            </div>

            <!-- ===================================== -->
            <!-- Promo -->
            <!-- ===================================== -->

            <div class="mt-6">
              <label class="mb-2 block text-sm font-medium text-gray-700">
                Promo Code
              </label>

              <div class="flex">
                <input
                  v-model="promoCode"
                  type="text"
                  placeholder="Enter code"
                  class="w-full rounded-l-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  @click="applyPromo"
                  class="rounded-r-lg bg-gray-900 px-4 py-2 text-white transition hover:bg-gray-800"
                >
                  Apply
                </button>
              </div>

              <p
                v-if="promoMessage"
                class="mt-2 text-sm"
                :class="promoApplied ? 'text-green-600' : 'text-red-500'"
              >
                {{ promoMessage }}
              </p>
            </div>

            <!-- ===================================== -->
            <!-- Checkout -->
            <!-- ===================================== -->

            <button
              @click="checkout"
              class="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Proceed to Checkout
            </button>

            <p class="mt-4 text-center text-xs text-gray-400">
              Secure checkout · Safe payment
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { navigateTo } from "#app/composables/router";

// ===============================================
// Cart
// ===============================================

import { useCart } from "~/composables/useCart";

const {
  cart,
  cartCount,
  subtotal,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = useCart();

// ===============================================
// Shipping
// ===============================================

const shipping = computed(() => {
  if (subtotal.value === 0) {
    return 0;
  }

  return subtotal.value >= 100 ? 0 : 5;
});

// ===============================================
// Promo
// ===============================================

const promoCode = ref("");

const promoApplied = ref(false);

const promoMessage = ref("");

// ===============================================
// Discount
// ===============================================

const discount = computed(() => {
  if (!promoApplied.value) {
    return 0;
  }

  return subtotal.value * 0.1;
});

// ===============================================
// Total
// ===============================================

const total = computed(() => {
  return subtotal.value + shipping.value - discount.value;
});

// ===============================================
// Apply Promo
// ===============================================

const applyPromo = () => {
  if (promoCode.value.trim().toUpperCase() === "SPORT10") {
    promoApplied.value = true;

    promoMessage.value = "Promo code applied! 10% discount.";
  } else {
    promoApplied.value = false;

    promoMessage.value = "Invalid promo code.";
  }
};

// ===============================================
// Checkout
// ===============================================

const checkout = () => {
  navigateTo("/Order");
};
</script>
