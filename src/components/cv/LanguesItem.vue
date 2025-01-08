<script setup lang="ts">
defineProps<{
  name: string;
  level: string;
}>();
</script>

<template>
  <div class="flex items-center justify-between bg-gradient-to-r from-primary to-secondary text-white rounded-lg shadow-md p-4 mb-4">
    <span class="text-md font-medium">{{ name }}</span>
    <span class="text-sm">{{ level }}</span>
  </div>
</template>
