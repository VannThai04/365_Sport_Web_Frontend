<template>
  <div class="min-h-screen bg-gray-100 py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Back Button -->

      <div class="mb-6">
        <NuxtLink
          to="/Cart"
          class="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:-translate-x-1 hover:text-blue-600"
        >
          ← Back to Cart
        </NuxtLink>
      </div>

      <!-- Header -->

      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900">Checkout</h1>

        <p class="mt-2 text-gray-600">
          Complete your order and proceed to payment
        </p>
      </div>

      <!-- Main Content -->

      <div class="grid gap-8 lg:grid-cols-3">
        <!-- Left: Shipping & Payment -->

        <div class="lg:col-span-2">
          <!-- ================================================= -->
          <!-- SHIPPING INFORMATION -->
          <!-- ================================================= -->

          <div class="mb-8 rounded-2xl bg-white p-6 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900">
              Shipping Information
            </h2>

            <form class="mt-6 space-y-4">
              <!-- Full Name -->

              <div>
                <label class="block text-sm font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  v-model="shippingInfo.fullName"
                  type="text"
                  placeholder="John Doe"
                  class="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <!-- Email -->

              <div>
                <label class="block text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  v-model="shippingInfo.email"
                  type="email"
                  placeholder="john@example.com"
                  class="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <!-- Phone -->

              <div>
                <label class="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>

                <input
                  v-model="shippingInfo.phone"
                  type="tel"
                  placeholder="+1 234 567 8900"
                  class="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <!-- Address -->

              <div>
                <label class="block text-sm font-medium text-gray-700">
                  Address
                </label>

                <input
                  v-model="shippingInfo.address"
                  type="text"
                  placeholder="123 Main Street"
                  class="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <!-- City / State / ZIP -->

              <div class="grid gap-4 sm:grid-cols-3">
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    City
                  </label>

                  <input
                    v-model="shippingInfo.city"
                    type="text"
                    placeholder="New York"
                    class="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    State
                  </label>

                  <input
                    v-model="shippingInfo.state"
                    type="text"
                    placeholder="NY"
                    class="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    ZIP Code
                  </label>

                  <input
                    v-model="shippingInfo.zipCode"
                    type="text"
                    placeholder="10001"
                    class="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <!-- Country -->

              <div>
                <label class="block text-sm font-medium text-gray-700">
                  Country
                </label>

                <input
                  v-model="shippingInfo.country"
                  type="text"
                  placeholder="United States"
                  class="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </form>
          </div>

          <!-- ================================================= -->
          <!-- PAYMENT INFORMATION -->
          <!-- ================================================= -->

          <div class="rounded-2xl bg-white p-6 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900">Payment Method</h2>

            <!-- Payment Method Tabs -->

            <div class="mt-6 flex gap-4">
              <button
                @click="paymentMethod = 'card'"
                class="flex-1 rounded-lg border-2 px-4 py-3 font-semibold transition"
                :class="
                  paymentMethod === 'card'
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                "
              >
                💳 Credit Card
              </button>

              <button
                @click="paymentMethod = 'paypal'"
                class="flex-1 rounded-lg border-2 px-4 py-3 font-semibold transition"
                :class="
                  paymentMethod === 'paypal'
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                "
              >
                🅿️ PayPal
              </button>

              <button
                @click="paymentMethod = 'bank'"
                class="flex-1 rounded-lg border-2 px-4 py-3 font-semibold transition"
                :class="
                  paymentMethod === 'bank'
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                "
              >
                🏦 Bank Transfer
              </button>
            </div>

            <!-- Card Details (shown when card is selected) -->

            <form v-if="paymentMethod === 'card'" class="mt-6 space-y-4">
              <!-- Card Number -->

              <div>
                <label class="block text-sm font-medium text-gray-700">
                  Card Number
                </label>

                <input
                  v-model="cardInfo.cardNumber"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  maxlength="19"
                  class="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 font-mono outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  @input="formatCardNumber"
                />
              </div>

              <!-- Holder Name -->

              <div>
                <label class="block text-sm font-medium text-gray-700">
                  Cardholder Name
                </label>

                <input
                  v-model="cardInfo.holderName"
                  type="text"
                  placeholder="John Doe"
                  class="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <!-- Expiry & CVC -->

              <div class="grid gap-4 sm:grid-cols-2">
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Expiry Date
                  </label>

                  <input
                    v-model="cardInfo.expiry"
                    type="text"
                    placeholder="MM/YY"
                    maxlength="5"
                    class="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 font-mono outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    @input="formatExpiry"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    CVC
                  </label>

                  <input
                    v-model="cardInfo.cvc"
                    type="text"
                    placeholder="123"
                    maxlength="4"
                    class="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 font-mono outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>
            </form>

            <!-- PayPal Message -->

            <div v-if="paymentMethod === 'paypal'" class="mt-6">
              <p class="rounded-lg bg-blue-50 px-4 py-3 text-sm text-blue-700">
                ✓ You will be redirected to PayPal to complete your payment
              </p>
            </div>

            <!-- Bank Transfer Message -->

            <div v-if="paymentMethod === 'bank'" class="mt-6">
              <p class="rounded-lg bg-blue-50 px-4 py-3 text-sm text-blue-700">
                ✓ Bank transfer details will be provided after order
                confirmation
              </p>
            </div>
          </div>
        </div>

        <!-- Right: Order Summary -->

        <div>
          <!-- Order Summary Card -->

          <div class="sticky top-20 rounded-2xl bg-white p-6 shadow-sm">
            <h3 class="text-xl font-bold text-gray-900">Order Summary</h3>

            <!-- Product Item -->

            <div v-if="orderItem" class="mt-6 border-b border-gray-100 pb-6">
              <div class="flex gap-4">
                <img
                  :src="orderItem.product.image"
                  :alt="orderItem.product.name"
                  class="h-20 w-20 rounded-lg object-cover"
                />

                <div class="flex-1">
                  <h4 class="font-semibold text-gray-900">
                    {{ orderItem.product.name }}
                  </h4>

                  <p class="mt-1 text-sm text-gray-500">
                    Size: <span class="font-medium">{{ orderItem.size }}</span>
                  </p>

                  <p class="text-sm text-gray-500">
                    Qty:
                    <span class="font-medium">{{ orderItem.quantity }}</span>
                  </p>

                  <p class="mt-2 font-semibold text-gray-900">
                    ${{
                      (orderItem.product.price * orderItem.quantity).toFixed(2)
                    }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Pricing Details -->

            <div class="space-y-3">
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Subtotal</span>

                <span class="font-medium text-gray-900">
                  ${{ subtotal.toFixed(2) }}
                </span>
              </div>

              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Shipping</span>

                <span class="font-medium text-gray-900">
                  ${{ shipping.toFixed(2) }}
                </span>
              </div>

              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Tax (10%)</span>

                <span class="font-medium text-gray-900">
                  ${{ tax.toFixed(2) }}
                </span>
              </div>

              <div class="border-t border-gray-100 pt-3">
                <div class="flex justify-between">
                  <span class="font-semibold text-gray-900">Total</span>

                  <span class="text-2xl font-bold text-blue-600">
                    ${{ total.toFixed(2) }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Checkout Button -->

            <button
              @click="handleCheckout"
              :disabled="!isFormValid"
              class="mt-6 w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-md transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              Proceed to Payment
            </button>

            <!-- Back to Cart -->

            <NuxtLink
              to="/Cart"
              class="mt-3 block w-full rounded-xl border border-gray-200 px-6 py-3 text-center font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Back to Cart
            </NuxtLink>

            <!-- Trust Badges -->

            <div
              class="mt-6 space-y-2 border-t border-gray-100 pt-6 text-center text-xs text-gray-500"
            >
              <p>🔒 Secure & Encrypted Payment</p>

              <p>✓ Money-back Guarantee</p>

              <p>📞 24/7 Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { navigateTo } from "#app/composables/router";
import { useCart } from "~/composables/useCart";

// =====================================================
// Cart
// =====================================================

const { cart } = useCart();

// =====================================================
// Shipping Information
// =====================================================

const shippingInfo = ref({
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  country: "United States",
});

// =====================================================
// Payment Method
// =====================================================

const paymentMethod = ref<"card" | "paypal" | "bank">("card");

// =====================================================
// Card Information
// =====================================================

const cardInfo = ref({
  cardNumber: "",
  holderName: "",
  expiry: "",
  cvc: "",
});

// =====================================================
// Order Item (from cart or route params)
// =====================================================

const orderItem = computed(() => {
  return cart.value[cart.value.length - 1] || null;
});

// =====================================================
// Calculations
// =====================================================

const subtotal = computed(() => {
  if (!orderItem.value) return 0;
  return orderItem.value.product.price * orderItem.value.quantity;
});

const shipping = computed(() => {
  return subtotal.value >= 100 ? 0 : 10;
});

const tax = computed(() => {
  return subtotal.value * 0.1;
});

const total = computed(() => {
  return subtotal.value + shipping.value + tax.value;
});

// =====================================================
// Form Validation
// =====================================================

const isFormValid = computed(() => {
  const { fullName, email, phone, address, city, state, zipCode, country } =
    shippingInfo.value;

  if (
    !fullName ||
    !email ||
    !phone ||
    !address ||
    !city ||
    !state ||
    !zipCode ||
    !country
  ) {
    return false;
  }

  if (paymentMethod.value === "card") {
    const { cardNumber, holderName, expiry, cvc } = cardInfo.value;

    if (!cardNumber || !holderName || !expiry || !cvc) {
      return false;
    }

    if (cardNumber.replace(/\s/g, "").length !== 16) {
      return false;
    }
  }

  return true;
});

// =====================================================
// Format Card Number
// =====================================================

const formatCardNumber = () => {
  let value = cardInfo.value.cardNumber.replace(/\s/g, "");

  if (value.length > 16) {
    value = value.slice(0, 16);
  }

  cardInfo.value.cardNumber = value.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
};

// =====================================================
// Format Expiry
// =====================================================

const formatExpiry = () => {
  let value = cardInfo.value.expiry.replace(/\D/g, "");

  if (value.length >= 2) {
    value = value.slice(0, 2) + "/" + value.slice(2, 4);
  }

  cardInfo.value.expiry = value;
};

// =====================================================
// Handle Checkout
// =====================================================

const handleCheckout = async () => {
  if (!isFormValid.value) {
    alert("Please fill in all required fields.");

    return;
  }

  // Simulate order processing
  const orderId = Math.random().toString(36).substr(2, 9).toUpperCase();

  alert(
    `Order placed successfully!\n\nOrder ID: ${orderId}\n\nThank you for your purchase!`,
  );

  // Navigate to order confirmation page
  navigateTo(`/Order/${orderId}`);
};
</script>
