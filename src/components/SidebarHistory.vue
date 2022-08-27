<template>
  <section
    class="fixed inset-y-0 right-0 md:w-full lg:w-1/4 bg-white border-l border-indigo-100 rounded-l-3xl sidebar"
    :class="{ 'active': isSidebarOpen }"
  >
    <div class="px-4 md:py-5 lg:py-10">
      <button
        class="lg:hidden rounded px-4 py-2 mb-5 text-sm border-2 border-slate-300 text-slate-400 hover:text-slate-500 hover:border-slate-400 active:border-slate-400  duration-300 mt-8"
        @click="$emit('changeStatus')"
      >
        Close history
      </button>
      <h2 class="text-lg font-semibold mb-6">Shortened URLs history</h2>
      <ul>
        <li 
        v-for="item in historyList"
        :key="item"
        class="py-2 border-b border-teal-lighter text-left flex flex-col text-sm">
          <span class="border-l-4 border-gray-300 mb-2 pl-3 py-1 text-slate-400">
            {{ item.old }}
          </span>
          <span class="border-l-4 border-green-400 pl-3 py-1 font-medium flex align-center">
            {{ item.new }}
            <ClipboardCheckIcon class="ml-2 h-5 w-5 text-slate-300 hover:text-slate-400 cursor-pointer" />
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ClipboardCheckIcon } from '@heroicons/vue/outline'

const props = defineProps({
  historyList: Object,
  isSidebarOpen: Boolean
})
</script>

<style scoped>
.sidebar {
  overflow-wrap: break-word;
  transition: all 0.3s ease-in-out;
  transform: translateX(100%);
}
.sidebar.active {
  transform: translateX(0rem);
  transition: all 0.3s ease-in-out;
}


</style>