<script setup lang="ts">
defineProps<{
  title: string
  company: string
  period: string
  description: string[]
}>()
</script>

<template>
  <div class="mb-6 last:mb-0">
    <div class="flex flex-wrap justify-between items-start mb-2">
      <div>
        <h3 class="text-xl font-semibold text-gray-800">{{ title }}</h3>
        <p class="text-lg text-primary">{{ company }}</p>
      </div>
      <span class="text-sm font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
        {{ period }}
      </span>
    </div>
    <ul class="mt-3 space-y-2">
      <li v-for="(item, index) in description" 
          :key="index" 
          class="flex items-start">
        <span class="text-primary mr-2">▹</span>
        <span class="text-gray-600">{{ item }}</span>
      </li>
    </ul>
  </div>
</template>