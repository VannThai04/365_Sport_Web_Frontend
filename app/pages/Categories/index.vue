<script setup lang="ts">

const props = defineProps<{
  selectedCategory: string
}>()

const emit = defineEmits<{
  (e: "select", category: string): void
}>()

const categories = [
  {
    name: "All",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211"
  },
  {
    name: "Football",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55"
  },
  {
    name: "Running",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5"
  },
  {
    name: "Basketball",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc"
  },
  {
    name: "Training",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
  },
  {
    name: "Clothing",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
  }
]

</script>


<template>

  <section class="bg-white border-b border-gray-200">

    <div class="px-5 sm:px-8 py-7">

      <!-- Header -->
      <div class="mb-5">

        <p class="text-sm font-semibold text-blue-600 uppercase tracking-wider">
          Explore
        </p>

        <h2 class="text-2xl font-bold text-gray-900">
          Shop By Category
        </h2>

        <p class="text-sm text-gray-500 mt-1">
          Find the perfect gear for your sport
        </p>

      </div>


      <!-- Category Slider -->
      <div
        class="flex gap-5 overflow-x-auto pb-3 snap-x snap-mandatory category-scroll"
      >

        <button
          v-for="category in categories"
          :key="category.name"
          @click="emit('select', category.name)"
          class="relative min-w-[190px] h-[150px] overflow-hidden rounded-2xl snap-start group"
          :class="
            props.selectedCategory === category.name
              ? 'ring-4 ring-blue-500'
              : ''
          "
        >

          <!-- Image -->
          <img
            :src="category.image"
            :alt="category.name"
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />


          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"
          ></div>


          <!-- Name -->
          <div
            class="absolute inset-0 flex items-center justify-center"
          >

            <h3
              class="text-xl font-black text-white drop-shadow-lg"
            >
              {{ category.name }}
            </h3>

          </div>


          <!-- Selected -->
          <span
            v-if="props.selectedCategory === category.name"
            class="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full"
          >
            Selected
          </span>

        </button>

      </div>

    </div>

  </section>

</template>


<style scoped>

.category-scroll {
  scrollbar-width: none;
}

.category-scroll::-webkit-scrollbar {
  display: none;
}

</style>