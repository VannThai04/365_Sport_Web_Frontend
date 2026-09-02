<script setup lang="ts">
definePageMeta({
  layout: "user",
})
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900">

    <!-- ================= HERO ================= -->
    <section class="relative overflow-hidden bg-gray-950 text-white">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211"
          alt="Sports athletes"
          class="h-full w-full object-cover opacity-30"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/30"></div>
      </div>

      <div class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div class="max-w-3xl">

          <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
            <span class="h-2 w-2 rounded-full bg-blue-500"></span>
            ABOUT 365 SPORT
          </div>

          <h1 class="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            Gear Up.
            <span class="text-blue-500">Play Hard.</span>
            <br />
            Stay Active.
          </h1>

          <p class="mt-6 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
            365 Sport is your trusted destination for quality sports
            equipment, clothing, shoes, and accessories designed for
            athletes and sports lovers.
          </p>

          <div class="mt-9 flex flex-col gap-4 sm:flex-row">
            <NuxtLink
              to="/Product"
              class="rounded-xl bg-blue-600 px-7 py-3.5 text-center font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700 hover:-translate-y-1"
            >
              Shop Now →
            </NuxtLink>

            <NuxtLink
              to="/Contact"
              class="rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-center font-bold backdrop-blur-sm transition hover:bg-white/10"
            >
              Contact Us
            </NuxtLink>
          </div>

        </div>
      </div>
    </section>


    <!-- ================= STATS ================= -->
    <section class="border-b border-gray-200 bg-white">
      <div class="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gray-200 sm:grid-cols-4">

        <div class="px-5 py-8 text-center">
          <h3 class="text-3xl font-black text-blue-600 sm:text-4xl">500+</h3>
          <p class="mt-2 text-sm font-medium text-gray-500">Products</p>
        </div>

        <div class="px-5 py-8 text-center">
          <h3 class="text-3xl font-black text-blue-600 sm:text-4xl">10K+</h3>
          <p class="mt-2 text-sm font-medium text-gray-500">Customers</p>
        </div>

        <div class="px-5 py-8 text-center">
          <h3 class="text-3xl font-black text-blue-600 sm:text-4xl">20+</h3>
          <p class="mt-2 text-sm font-medium text-gray-500">Categories</p>
        </div>

        <div class="px-5 py-8 text-center">
          <h3 class="text-3xl font-black text-blue-600 sm:text-4xl">24/7</h3>
          <p class="mt-2 text-sm font-medium text-gray-500">Support</p>
        </div>

      </div>
    </section>


    <!-- ================= WHO WE ARE ================= -->
    <section class="py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div class="grid items-center gap-14 lg:grid-cols-2">

          <!-- Image -->
          <div class="relative">

            <div class="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5"
                alt="Athlete running"
                class="h-[450px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <!-- Floating Card -->
            <div
              class="absolute -bottom-6 -right-4 rounded-2xl bg-white p-5 shadow-xl sm:-right-6"
            >
              <div class="flex items-center gap-4">

                <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl">
                  🏆
                </div>

                <div>
                  <p class="text-2xl font-black text-gray-900">
                    365
                  </p>
                  <p class="text-sm text-gray-500">
                    Sport For Everyone
                  </p>
                </div>

              </div>
            </div>

          </div>


          <!-- Content -->
          <div>

            <p class="font-bold uppercase tracking-widest text-blue-600">
              Who We Are
            </p>

            <h2 class="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Your Trusted
              <span class="text-blue-600">Sports Partner</span>
            </h2>

            <div class="mt-6 space-y-5 text-gray-600 leading-7">

              <p>
                At 365 Sport, we believe sports are more than just
                competition. Sports build confidence, improve health,
                develop discipline, and bring people together.
              </p>

              <p>
                Our goal is to make quality sports products accessible
                to everyone. Whether you're a professional athlete,
                fitness enthusiast, or just beginning your journey,
                we're here to support you.
              </p>

            </div>

            <!-- Features -->
            <div class="mt-8 space-y-4">

              <div class="flex items-center gap-4">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  ✓
                </div>
                <p class="font-semibold text-gray-800">
                  High-quality sports products
                </p>
              </div>

              <div class="flex items-center gap-4">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  ✓
                </div>
                <p class="font-semibold text-gray-800">
                  Affordable and competitive prices
                </p>
              </div>

              <div class="flex items-center gap-4">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  ✓
                </div>
                <p class="font-semibold text-gray-800">
                  Fast and reliable delivery
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>


    <!-- ================= WHY CHOOSE US ================= -->
    <section class="bg-gray-50 py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div class="mx-auto max-w-2xl text-center">

          <p class="font-bold uppercase tracking-widest text-blue-600">
            Why Choose Us
          </p>

          <h2 class="mt-3 text-3xl font-black sm:text-4xl">
            Why 365 Sport?
          </h2>

          <p class="mt-4 leading-7 text-gray-500">
            Everything we do is focused on helping you enjoy a better
            sports and shopping experience.
          </p>

        </div>


        <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <!-- Card 1 -->
          <div
            class="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
          >
            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl transition group-hover:bg-blue-600 group-hover:text-white"
            >
              ✓
            </div>

            <h3 class="mt-6 text-xl font-bold">
              Quality Products
            </h3>

            <p class="mt-3 leading-7 text-gray-500">
              We carefully select reliable and high-quality sports
              products for our customers.
            </p>
          </div>


          <!-- Card 2 -->
          <div
            class="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
          >
            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl transition group-hover:bg-green-600 group-hover:text-white"
            >
              $
            </div>

            <h3 class="mt-6 text-xl font-bold">
              Best Prices
            </h3>

            <p class="mt-3 leading-7 text-gray-500">
              Get great value with competitive prices across our
              sports collection.
            </p>
          </div>


          <!-- Card 3 -->
          <div
            class="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-200 hover:shadow-xl"
          >
            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-2xl transition group-hover:bg-purple-600 group-hover:text-white"
            >
              🚚
            </div>

            <h3 class="mt-6 text-xl font-bold">
              Fast Delivery
            </h3>

            <p class="mt-3 leading-7 text-gray-500">
              Fast and reliable delivery helps you receive your gear
              when you need it.
            </p>
          </div>


          <!-- Card 4 -->
          <div
            class="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
          >
            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-2xl transition group-hover:bg-orange-600 group-hover:text-white"
            >
              ♥
            </div>

            <h3 class="mt-6 text-xl font-bold">
              Customer First
            </h3>

            <p class="mt-3 leading-7 text-gray-500">
              Your satisfaction is our priority from ordering to
              delivery and beyond.
            </p>
          </div>

        </div>
      </div>
    </section>


    <!-- ================= FIND US ================= -->
    <section class="py-10 lg:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div class="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <p class="font-bold uppercase tracking-widest text-blue-600">
              Visit Us
            </p>

            <h2 class="mt-2 text-3xl font-black sm:text-4xl">
              Find Us
            </h2>

            <p class="mt-3 text-gray-500">
              Come and visit us at our location.
            </p>
          </div>

          <div class="flex items-center gap-3 text-gray-600">
            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              📍
            </div>

            <span class="font-medium">
              ETEC Center
            </span>
          </div>

        </div>


        <div class="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4667.214145069196!2d104.88799717573434!3d11.562217244207105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951adb4d4041d%3A0x8a90e729f62ad800!2sETEC%20Center!5e1!3m2!1sen!2skh!4v1788167345842!5m2!1sen!2skh"
            class="h-[350px] w-full sm:h-[450px] lg:h-[500px]"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>

        </div>

      </div>
    </section>


    <!-- ================= CTA ================= -->
    <section class="bg-blue-600">
      <div class="mx-auto max-w-7xl px-4 py-16 text-center text-white sm:px-6 lg:px-8 lg:py-20">

        <h2 class="text-3xl font-black sm:text-4xl lg:text-5xl">
          Ready to Start Your
          <span class="text-blue-200">Sports Journey?</span>
        </h2>

        <p class="mx-auto mt-5 max-w-2xl text-lg leading-7 text-blue-100">
          Find the right equipment, clothing, shoes, and accessories
          for your favorite sport.
        </p>

        <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <NuxtLink
            to="/Product"
            class="rounded-xl bg-white px-8 py-3.5 font-bold text-blue-600 transition hover:bg-gray-100 hover:-translate-y-1"
          >
            Shop 365 Sport →
          </NuxtLink>

          <NuxtLink
            to="/Contact"
            class="rounded-xl border border-white/40 px-8 py-3.5 font-bold transition hover:bg-blue-700"
          >
            Contact Us
          </NuxtLink>

        </div>

      </div>
    </section>

  </div>
</template>