<template>
  <div class="bg-white antialised rounded-2xl border shadow-x1 p-10 max-w-lg">
    <div class="flex flex-col items-center space-y-4">
      <Header />
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
        <Loading v-if="loading && shortenedLink == '' && !hasRequestError" />
        <div v-if="shortenedLink && !hasRequestError">
          <ShortLink :shortenedLink="shortenedLink" />
          <ClearButton @click="clearResult" />
        </div>
        <p v-if="hasRequestError" class="text-red-500">
          An error occurred!
        </p>
      </div>
    </div>

    <SidebarHistory
      :historyList="historyLink"
      :isSidebarOpen="isSidebarOpen"
      @changeStatus="changeSidebarStatus()"
    />
  </div>

  <button
    class="rounded px-4 py-2 text-sm border-2 border-slate-300 text-slate-400 hover:text-slate-500 hover:border-slate-400 active:border-slate-400  duration-300 mt-8"
    @click="isSidebarOpen = !isSidebarOpen"
  >
    {{ textOpenSidebar }} history
  </button>

  <Footer />
</template>

<script setup>
import { computed, ref } from 'vue'
import axios from '../services/axios'

import ClearButton from './ClearButton.vue'
import Footer from './Footer.vue'
import Header from './Header.vue'
import Loading from './Loading.vue'
import ShortLink from './ShortLink.vue'
import SidebarHistory from './SidebarHistory.vue'

const url = ref('')
const shortenedLink = ref('')
const hasRequestError = ref(false)
const loading = ref(false)
const myinput = ref(null)
const isSidebarOpen = ref(false)

let historyLink = new Array()
historyLink = JSON.parse(localStorage.getItem('history')) || []

const shorten = async () => {
  try {
    loading.value = !loading.value
    hasRequestError.value = false
    
    const { data } = await axios.post('/shorten', {
      long_url: url.value.trim()
    })

    saveToLocalStorage(url.value, data.link)

    url.value = ''
    shortenedLink.value = data.link
    loading.value = !loading.value
    isSidebarOpen.value = false
  } catch (error) {
    console.error(error)
    hasRequestError.value = true
  }
}

const saveToLocalStorage = (oldLink, newLink) => {
  historyLink.push({ old: oldLink, new: newLink })
  localStorage.setItem("history", JSON.stringify(historyLink));
}

const textOpenSidebar = computed(() => {
  return isSidebarOpen.value ? 'Close' : 'View'
})

const clearResult = async () => {
  url.value = ''
  shortenedLink.value = ''
  myinput.value.focus()
}

const changeSidebarStatus = () => {
  isSidebarOpen.value = false
}
</script>