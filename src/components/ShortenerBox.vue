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
          <h1 class="font-bold text-2xl text-gray-700 w-4/6 text-center">
            URL Shortener
          </h1>
          <p class="text-sm text-gray-500 text-center w-5/6">
            Hello, please enter the URL you want to shorten.
          </p>
          <input
            type="url"
            placeholder="Paste your long URL..."
            class="border-2 rounded-lg w-full h-12 px-4"
          />
          <button
            class="bg-red-400 text-white rounded-md hover:bg-red-500 font-semibold px-4 py-3 w-full"
          >
            Make your magic!
          </button>
        </div>
      </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
