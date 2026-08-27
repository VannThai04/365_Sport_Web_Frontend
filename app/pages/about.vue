<script setup lang="ts"> 
definePageMeta({
    layout: "user"
})
</script>
<template>
  <div class="min-h-screen bg-gray-50">

    <!-- Hero Section -->
    <section class="bg-gray-900 text-white">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
      >
        <div class="max-w-3xl">
          <p class="text-blue-400 font-semibold uppercase tracking-wider mb-4">
            About 365 Sport
          </p>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Everything You Need
            <span class="text-blue-500"> For Sport.</span>
          </h1>

          <p class="mt-6 text-lg text-gray-300 leading-relaxed">
            365 Sport is an online sports store dedicated to providing
            high-quality sports equipment, clothing, shoes, and accessories
            for athletes and sports lovers.
          </p>

          <div class="mt-8 flex flex-col sm:flex-row gap-4">
            <NuxtLink
              to="/Product"
              class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition"
            >
              Shop Now
            </NuxtLink>

            <NuxtLink
              to="/Contact"
              class="border border-gray-600 hover:bg-gray-800 px-6 py-3 rounded-lg font-semibold text-center transition"
            >
              Contact Us
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>


    <!-- About Us -->
    <section class="py-16 lg:py-20">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <!-- Image -->
          <div class="h-96 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211"
              alt="Athletes running"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Content -->
          <div>
            <p class="text-blue-600 font-semibold uppercase tracking-wide">
              Who We Are
            </p>

            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Your Trusted Sports Partner
            </h2>

            <p class="text-gray-600 mt-6 leading-relaxed">
              At 365 Sport, we believe that sports are more than just a
              competition. They are a way to build confidence, improve
              health, and bring people together.
            </p>

            <p class="text-gray-600 mt-4 leading-relaxed">
              Our goal is to make quality sports products accessible to
              everyone. Whether you are a professional athlete, a fitness
              enthusiast, or simply starting your sports journey, we have
              products for you.
            </p>

            <div class="grid grid-cols-2 gap-6 mt-8">

              <div>
                <h3 class="text-3xl font-bold text-blue-600">
                  500+
                </h3>
                <p class="text-gray-500 mt-1">
                  Products
                </p>
              </div>

              <div>
                <h3 class="text-3xl font-bold text-blue-600">
                  10K+
                </h3>
                <p class="text-gray-500 mt-1">
                  Happy Customers
                </p>
              </div>

              <div>
                <h3 class="text-3xl font-bold text-blue-600">
                  20+
                </h3>
                <p class="text-gray-500 mt-1">
                  Sports Categories
                </p>
              </div>

              <div>
                <h3 class="text-3xl font-bold text-blue-600">
                  24/7
                </h3>
                <p class="text-gray-500 mt-1">
                  Customer Support
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- Why Choose Us -->
    <section class="bg-white py-16 lg:py-20">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >

        <div class="text-center max-w-2xl mx-auto mb-12">
          <p class="text-blue-600 font-semibold uppercase tracking-wide">
            Why Choose Us
          </p>

          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Why 365 Sport?
          </h2>

          <p class="text-gray-500 mt-4">
            We focus on quality products and a great shopping experience.
          </p>
        </div>


        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <!-- Feature 1 -->
          <div
            class="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition"
          >
            <div
              class="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl"
            >
              ✓
            </div>

            <h3 class="text-xl font-bold text-gray-900 mt-5">
              Quality Products
            </h3>

            <p class="text-gray-500 mt-3 leading-relaxed">
              We provide reliable and high-quality sports products.
            </p>
          </div>


          <!-- Feature 2 -->
          <div
            class="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition"
          >
            <div
              class="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl"
            >
              $
            </div>

            <h3 class="text-xl font-bold text-gray-900 mt-5">
              Best Prices
            </h3>

            <p class="text-gray-500 mt-3 leading-relaxed">
              Competitive prices so you can enjoy your favorite sports.
            </p>
          </div>


          <!-- Feature 3 -->
          <div
            class="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition"
          >
            <div
              class="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-2xl"
            >
              🚚
            </div>

            <h3 class="text-xl font-bold text-gray-900 mt-5">
              Fast Delivery
            </h3>

            <p class="text-gray-500 mt-3 leading-relaxed">
              Fast and reliable delivery directly to your door.
            </p>
          </div>


          <!-- Feature 4 -->
          <div
            class="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition"
          >
            <div
              class="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-2xl"
            >
              ♥
            </div>

            <h3 class="text-xl font-bold text-gray-900 mt-5">
              Customer First
            </h3>

            <p class="text-gray-500 mt-3 leading-relaxed">
              Your satisfaction is our priority from order to delivery.
            </p>
          </div>

        </div>
      </div>
    </section>


    <!-- Mission Section -->
    <section class="py-16 lg:py-20">
      <div
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >

        <p class="text-blue-600 font-semibold uppercase tracking-wide">
          Our Mission
        </p>

        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
          Inspire People To Stay Active
        </h2>

        <p class="text-gray-600 text-lg leading-relaxed mt-6">
          Our mission is to encourage people of all ages and skill levels
          to enjoy sports and live a healthier lifestyle by providing the
          products they need to perform their best.
        </p>

        <div class="mt-8">
          <NuxtLink
            to="/Product"
            class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Explore Our Products
          </NuxtLink>
        </div>

      </div>
    </section>


    <!-- CTA -->
    <section class="bg-blue-600">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center text-white"
      >
        <h2 class="text-3xl sm:text-4xl font-bold">
          Ready to Start Your Sports Journey?
        </h2>

        <p class="mt-4 text-blue-100">
          Find the right equipment and gear for your favorite sport.
        </p>

        <NuxtLink
          to="/Product"
          class="inline-block mt-7 bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition"
        >
          Shop 365 Sport
        </NuxtLink>
      </div>
    </section>

  </div>
</template>