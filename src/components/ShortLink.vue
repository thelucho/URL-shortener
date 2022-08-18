<template>
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
</template>

<script setup>
import { computed, onUnmounted, ref } from 'vue'

const props = defineProps({
  shortenedLink: String
})

const copied = ref(false)
const copyStatus = computed(() => copied.value === true ? 'Copied' : 'Copy')

const copyUrl = async () => {
  copied.value = true
  try {
    await navigator.clipboard.writeText(props.shortenedLink);
  } catch($e) {
    console.error($e);
  }
}

onUnmounted(() => copied.value === false)
</script>