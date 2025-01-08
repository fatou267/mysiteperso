<script setup lang="ts">
defineProps<{
  category: string
  skills: string[]
}>()
</script>

<template>
  <div class="mb-6 last:mb-0">
    <h3 class="text-lg font-semibold text-gray-800 mb-3">{{ category }}</h3>
    <div class="flex flex-wrap gap-2">
      <span v-for="skill in skills" 
            :key="skill"
            class="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-medium shadow-sm">
        {{ skill }}
      </span>
    </div>
  </div>
</template>