<template>
  <div v-if="message" :class="alertClass" class="p-4 rounded-lg mb-4">
    {{ message }}
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useMessageStore } from '@/store/message'

const messageStore = useMessageStore()
const { message, status } = storeToRefs(messageStore)

const alertClass = computed(() => {
  switch (status.value) {
    case 'error':
      return 'bg-red-100 text-red-700 border border-red-400'
    case 'success':
      return 'bg-green-100 text-green-700 border border-green-400'
    case 'info':
      return 'bg-blue-100 text-blue-700 border border-blue-400'
    default:
      return 'bg-gray-100 text-gray-700 border border-gray-400'
  }
})
</script>
