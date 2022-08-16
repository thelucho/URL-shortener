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
          ref="myinput"
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

      <div class="response text-center w-full">
        <div v-if="loading && shortenedLink == '' && !hasRequestError" class="flex justify-center">
          <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-emerald-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
        <div v-if="shortenedLink && !hasRequestError">
          <div class="bg-gray-100 border-2 rounded-lg px-4 py-2 mt-5 flex justify-between items-center">
            {{ shortenedLink }}
            <span
              class="text-blue-600 hover:underline cursor-pointer"
              :class="{ 'text-green-600 hover:no-underline': copied }"
              @click="copyUrl"
            >
              {{ copyStatus }}
            </span>
          </div>
          <div
            class="mt-4 text-base text-slate-400 hover:text-slate-600 cursor-pointer flex justify-center align-center"
            @click="clearResult"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-x text-rose-500" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" fill="red"></path> </svg>
             Clear result
          </div>
        </div>
        <p v-if="hasRequestError" class="text-red-500">
          An error occurred!
        </p>
      </div>
    </div>
  </div>
  <div class="py-10 px-5 text-sm">
    Made with
    <span class="py-0.5 px-2 ml-1 border rounded text-violet-500">Vite</span>
    <span class="py-0.5 px-2 ml-2 border rounded text-teal-600">Vue 3</span>
    <span class="py-0.5 px-2 ml-2 border rounded text-sky-600">Tailwind</span>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import axios from '../services/axios'

const url = ref('')
const shortenedLink = ref('')
const hasRequestError = ref(false)
const loading = ref(false)
const myinput = ref(null)
const copied = ref(false)

const shorten = async () => {
  try {
    loading.value = !loading.value
    hasRequestError.value = false
    copied.value = false
    
    const { data } = await axios.post('/shorten', {
      long_url: url.value.trim()
    })

    url.value = ''
    shortenedLink.value = data.link
    loading.value = !loading.value
  } catch (error) {
    console.error(error)
    hasRequestError.value = true
  }
}

const copyUrl = async () => {
  copied.value = true
  try {
    await navigator.clipboard.writeText(shortenedLink.value);
  } catch($e) {
    console.error($e);
  }
}

const clearResult = async () => {
  url.value = ''
  shortenedLink.value = ''
  myinput.value.focus()
}

const copyStatus = computed(() => copied.value === true ? 'Copied' : 'Copy')
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
