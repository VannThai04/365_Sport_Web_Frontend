<script setup lang="ts">
import { ref } from "vue";

definePageMeta({
  layout: "user"
});

/* =========================
   FORM
========================= */

const form = ref({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: ""
});

const submitted = ref(false);
const loading = ref(false);

const submitForm = () => {
  if (
    !form.value.name ||
    !form.value.email ||
    !form.value.subject ||
    !form.value.message
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  loading.value = true;

  setTimeout(() => {
    console.log("Contact form:", form.value);

    loading.value = false;
    submitted.value = true;

    form.value = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    };

    setTimeout(() => {
      submitted.value = false;
    }, 5000);
  }, 1000);
};
</script>

<template>
  <div class="min-h-screen bg-gray-50">

    <!-- =========================
         HERO
    ========================== -->
    <section class="relative overflow-hidden bg-black text-white">

      <div class="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800"></div>

      <div class="relative mx-auto max-w-7xl px-6 py-20 text-center lg:py-24">

        <span
          class="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-200"
        >
          365 Sport Support
        </span>

        <h1 class="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          Contact Us
        </h1>

        <p class="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
          Have a question about our products, orders, delivery or services?
          Our team is here to help.
        </p>

      </div>

    </section>


    <!-- =========================
         CONTACT CARDS
    ========================== -->
    <section class="mx-auto -mt-8 max-w-6xl px-6">

      <div class="grid gap-4 md:grid-cols-3">

        <!-- Email -->
        <div
          class="rounded-2xl border bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
        >

          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-xl"
          >
            ✉️
          </div>

          <h3 class="mt-5 text-lg font-bold">
            Email Us
          </h3>

          <p class="mt-2 text-sm text-gray-500">
            Send us an email anytime.
          </p>

          <a
            href="mailto:support@365sport.com"
            class="mt-4 block text-sm font-semibold hover:underline"
          >
            support@365sport.com
          </a>

        </div>


        <!-- Phone -->
        <div
          class="rounded-2xl border bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
        >

          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-xl"
          >
            📞
          </div>

          <h3 class="mt-5 text-lg font-bold">
            Call Us
          </h3>

          <p class="mt-2 text-sm text-gray-500">
            Talk with our support team.
          </p>

          <a
            href="tel:+85512345678"
            class="mt-4 block text-sm font-semibold hover:underline"
          >
            +855 12 345 678
          </a>

        </div>


        <!-- Location -->
        <div
          class="rounded-2xl border bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
        >

          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-xl"
          >
            📍
          </div>

          <h3 class="mt-5 text-lg font-bold">
            Visit Us
          </h3>

          <p class="mt-2 text-sm text-gray-500">
            Come visit our store.
          </p>

          <p class="mt-4 text-sm font-semibold">
            Phnom Penh, Cambodia
          </p>

        </div>

      </div>

    </section>


    <!-- =========================
         MAIN CONTACT SECTION
    ========================== -->
    <section class="mx-auto max-w-7xl px-6 py-16 lg:py-20">

      <div class="grid gap-8 lg:grid-cols-5">

        <!-- =========================
             LEFT INFORMATION
        ========================== -->
        <div class="rounded-3xl bg-black p-8 text-white lg:col-span-2 lg:p-10">

          <span class="text-sm font-semibold uppercase tracking-wider text-gray-400">
            Get in touch
          </span>

          <h2 class="mt-3 text-3xl font-bold">
            We're here to help.
          </h2>

          <p class="mt-4 leading-7 text-gray-400">
            Whether you need help choosing football boots, checking an
            order, or asking about delivery, feel free to contact us.
          </p>


          <!-- Contact details -->
          <div class="mt-10 space-y-7">

            <!-- Email -->
            <div class="flex gap-4">

              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10"
              >
                ✉️
              </div>

              <div>
                <p class="text-xs uppercase tracking-wider text-gray-500">
                  Email
                </p>

                <p class="mt-1 text-sm font-medium">
                  support@365sport.com
                </p>
              </div>

            </div>


            <!-- Phone -->
            <div class="flex gap-4">

              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10"
              >
                📞
              </div>

              <div>
                <p class="text-xs uppercase tracking-wider text-gray-500">
                  Phone
                </p>

                <p class="mt-1 text-sm font-medium">
                  +855 12 345 678
                </p>
              </div>

            </div>


            <!-- Address -->
            <div class="flex gap-4">

              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10"
              >
                📍
              </div>

              <div>
                <p class="text-xs uppercase tracking-wider text-gray-500">
                  Address
                </p>

                <p class="mt-1 text-sm font-medium">
                  Phnom Penh, Cambodia
                </p>
              </div>

            </div>


            <!-- Hours -->
            <div class="flex gap-4">

              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10"
              >
                🕐
              </div>

              <div>
                <p class="text-xs uppercase tracking-wider text-gray-500">
                  Opening Hours
                </p>

                <p class="mt-1 text-sm font-medium">
                  Mon - Sat: 8:00 AM - 8:00 PM
                </p>

                <p class="mt-1 text-sm text-gray-400">
                  Sunday: 9:00 AM - 6:00 PM
                </p>
              </div>

            </div>

          </div>


          <!-- Social -->
          <div class="mt-10 border-t border-white/10 pt-8">

            <p class="text-sm font-semibold">
              Follow 365 Sport
            </p>

            <div class="mt-4 flex gap-3">

              <a
                href="#"
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm font-bold transition hover:bg-white hover:text-black"
              >
                f
              </a>

              <a
                href="#"
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm font-bold transition hover:bg-white hover:text-black"
              >
                IG
              </a>

              <a
                href="#"
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm font-bold transition hover:bg-white hover:text-black"
              >
                T
              </a>

              <a
                href="#"
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm font-bold transition hover:bg-white hover:text-black"
              >
                in
              </a>

            </div>

          </div>

        </div>


        <!-- =========================
             CONTACT FORM
        ========================== -->
        <div
          class="rounded-3xl border bg-white p-8 shadow-sm lg:col-span-3 lg:p-10"
        >

          <div>
            <span
              class="text-sm font-semibold uppercase tracking-wider text-gray-400"
            >
              Send a message
            </span>

            <h2 class="mt-2 text-3xl font-bold text-gray-900">
              How can we help?
            </h2>

            <p class="mt-3 text-sm leading-6 text-gray-500">
              Fill out the form below and our support team will get back
              to you as soon as possible.
            </p>
          </div>


          <!-- Success -->
          <div
            v-if="submitted"
            class="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700"
          >
            <div class="flex items-center gap-3">

              <span class="text-lg">
                ✓
              </span>

              <div>
                <p class="font-semibold">
                  Message sent successfully!
                </p>

                <p class="mt-1 text-xs">
                  Thank you for contacting 365 Sport.
                </p>
              </div>

            </div>
          </div>


          <form
            class="mt-8 space-y-5"
            @submit.prevent="submitForm"
          >

            <!-- Name + Email -->
            <div class="grid gap-5 sm:grid-cols-2">

              <!-- Name -->
              <div>

                <label
                  class="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Full Name
                  <span class="text-red-500">*</span>
                </label>

                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Enter your name"
                  class="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-1 focus:ring-black"
                />

              </div>


              <!-- Email -->
              <div>

                <label
                  class="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email
                  <span class="text-red-500">*</span>
                </label>

                <input
                  v-model="form.email"
                  type="email"
                  placeholder="you@example.com"
                  class="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-1 focus:ring-black"
                />

              </div>

            </div>


            <!-- Phone + Subject -->
            <div class="grid gap-5 sm:grid-cols-2">

              <!-- Phone -->
              <div>

                <label
                  class="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Phone
                </label>

                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="+855 12 345 678"
                  class="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-1 focus:ring-black"
                />

              </div>


              <!-- Subject -->
              <div>

                <label
                  class="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Subject
                  <span class="text-red-500">*</span>
                </label>

                <select
                  v-model="form.subject"
                  class="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-black focus:ring-1 focus:ring-black"
                >

                  <option value="" disabled>
                    Select a subject
                  </option>

                  <option value="Product Question">
                    Product Question
                  </option>

                  <option value="Order Support">
                    Order Support
                  </option>

                  <option value="Delivery">
                    Delivery
                  </option>

                  <option value="Return & Refund">
                    Return & Refund
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>

            </div>


            <!-- Message -->
            <div>

              <label
                class="mb-2 block text-sm font-semibold text-gray-700"
              >
                Message
                <span class="text-red-500">*</span>
              </label>

              <textarea
                v-model="form.message"
                rows="6"
                placeholder="Tell us how we can help..."
                class="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-1 focus:ring-black"
              ></textarea>

              <p class="mt-2 text-xs text-gray-400">
                Please provide as much detail as possible.
              </p>

            </div>


            <!-- Submit -->
            <button
              type="submit"
              :disabled="loading"
              class="flex w-full items-center justify-center gap-2 rounded-xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
            >

              <span v-if="loading">
                Sending...
              </span>

              <span v-else>
                Send Message
              </span>

              <span v-if="!loading">
                →
              </span>

            </button>

          </form>

        </div>

      </div>

    </section>


    <!-- =========================
         MAP
    ========================== -->
    <section class="mx-auto max-w-7xl px-6 pb-16">

      <div class="overflow-hidden rounded-3xl border bg-white shadow-sm">

        <div class="p-6 sm:p-8">

          <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <div>
              <span
                class="text-xs font-semibold uppercase tracking-wider text-gray-400"
              >
                Find Us
              </span>

              <h2 class="mt-1 text-2xl font-bold">
                Our Location
              </h2>

              <p class="mt-1 text-sm text-gray-500">
                Phnom Penh, Cambodia
              </p>
            </div>

            <a
              href="https://www.google.com/maps"
              target="_blank"
              class="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Open Google Maps
            </a>

          </div>

        </div>


        <!-- Map -->
        <div class="h-[350px] w-full bg-gray-200">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4667.214145069196!2d104.88799717573434!3d11.562217244207105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095152b9b9b9b9%3A0x123456789abcdef0!2sPhnom%20Penh%2C%20Cambodia!5e0!3m2!1sen!2sKH!4v1720000000000"
            class="h-full w-full border-0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>

      </div>

    </section>


    <!-- =========================
         FAQ
    ========================== -->
    <section class="bg-white">

      <div class="mx-auto max-w-4xl px-6 py-16">

        <div class="text-center">

          <span
            class="text-xs font-semibold uppercase tracking-wider text-gray-400"
          >
            FAQ
          </span>

          <h2 class="mt-2 text-3xl font-bold">
            Frequently Asked Questions
          </h2>

          <p class="mt-3 text-sm text-gray-500">
            Quick answers to common questions.
          </p>

        </div>


        <div class="mt-10 space-y-4">

          <details
            class="group rounded-2xl border bg-gray-50 p-5"
          >

            <summary
              class="flex cursor-pointer list-none items-center justify-between font-semibold"
            >
              How can I check my order?

              <span class="text-xl transition group-open:rotate-45">
                +
              </span>
            </summary>

            <p class="mt-4 text-sm leading-6 text-gray-500">
              You can check your order from your account's order history
              after logging into 365 Sport.
            </p>

          </details>


          <details
            class="group rounded-2xl border bg-gray-50 p-5"
          >

            <summary
              class="flex cursor-pointer list-none items-center justify-between font-semibold"
            >
              How long does delivery take?

              <span class="text-xl transition group-open:rotate-45">
                +
              </span>
            </summary>

            <p class="mt-4 text-sm leading-6 text-gray-500">
              Delivery time depends on your location and selected delivery
              method. Our support team can provide more information about
              your order.
            </p>

          </details>


          <details
            class="group rounded-2xl border bg-gray-50 p-5"
          >

            <summary
              class="flex cursor-pointer list-none items-center justify-between font-semibold"
            >
              Can I return a product?

              <span class="text-xl transition group-open:rotate-45">
                +
              </span>
            </summary>

            <p class="mt-4 text-sm leading-6 text-gray-500">
              Yes. Please contact our support team with your order number
              and details about the product you want to return.
            </p>

          </details>


          <details
            class="group rounded-2xl border bg-gray-50 p-5"
          >

            <summary
              class="flex cursor-pointer list-none items-center justify-between font-semibold"
            >
              How can I choose the correct football boot size?

              <span class="text-xl transition group-open:rotate-45">
                +
              </span>
            </summary>

            <p class="mt-4 text-sm leading-6 text-gray-500">
              Check the size information available on each product detail
              page. If you are still unsure, contact our support team
              before placing your order.
            </p>

          </details>

        </div>

      </div>

    </section>

  </div>
</template>