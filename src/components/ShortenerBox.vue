<template>
  <div class="bg-white rounded-2xl border shadow-x1 p-10 max-w-lg">
    <div class="flex flex-col items-center space-y-4">
      <h1 class="font-bold text-2xl text-gray-700 w-5/6 text-center">
        URL Shortener 🎯
      </h1>
      <p class="text-sm text-gray-500 text-center w-6/6">
        Hello, are you ready to shorten your URLs?
      </p>
      <form @submit.prevent="shorten">
        <input
          type="url"
          placeholder="Paste your looooong URL..."
          class="border-2 rounded-lg w-full h-12 px-4"
          v-model="url"
        />
      
        <button
          class="bg-emerald-400 text-white rounded-md hover:bg-emerald-500 font-semibold px-4 py-3 mt-3 w-full"
          :class="{ 'opacity-50 cursor-not-allowed': !url }"
          :disabled="!url"
        >
          Do the magic!
        </button>
      </form>

      <div class="response w-full">
        <div v-if="shortenedLink && !hasRequestError">
          <div class="bg-gray-100 border-2 rounded-lg px-4 py-2 mt-5 flex justify-between items-center">
            {{ shortenedLink }}
            <span class="text-blue-600">Copy</span>
          </div>
        </div>
        <p v-if="hasRequestError" class="error">
          An error occurred!
        </p>
      </div>
    </div>
  </div>
  <div class="py-10 px-5 text-sm">
    Made with
    <span class="py-0.5 px-2 ml-1 border rounded">Vite</span>
    <span class="py-0.5 px-2 ml-2 border rounded">Vue 3</span>
    <span class="py-0.5 px-2 ml-2 border rounded">Tailwind</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from "../services/axios"

const url = ref('')
const shortenedLink = ref('')
const hasRequestError = ref(false)

const shorten = async () => {
  try {
    const { data } = await axios.post('/shorten', {
      long_url: url.value.trim()
    })
    console.log('RESPONSE: ', data)
    url.value = ''
    shortenedLink.value = data.link
  } catch {
    console.error(error)
    hasRequestError.value = true
  }
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
