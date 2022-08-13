<script setup>
//import { ref } from 'vue'

// defineProps({
//   msg: String
// })

//const count = ref(0)
</script>

<template>
  <div class="bg-white rounded-2xl border shadow-x1 p-10 max-w-lg">
    <div class="flex flex-col items-center space-y-4">
      <h1 class="font-bold text-2xl text-gray-700 w-5/6 text-center">
        URL Shortener 🎯
      </h1>
      <p class="text-sm text-gray-500 text-center w-6/6">
        Hello, are you ready to shorten your URLs?
      </p>
      <input
        type="url"
        placeholder="Paste your looooong URL..."
        class="border-2 rounded-lg w-full h-12 px-4"
      />
      <button
        class="bg-emerald-400 text-white rounded-md hover:bg-emerald-500 font-semibold px-4 py-3 w-full"
      >
        Do the magic!
      </button>
    </div>
  </div>
  <div class="py-10 px-5 text-sm">
    Made with
    <span class="py-0.5 px-2 ml-1 border rounded">Vite</span>
    <span class="py-0.5 px-2 ml-2 border rounded">Vue 3</span>
    <span class="py-0.5 px-2 ml-2 border rounded">Tailwind</span>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
