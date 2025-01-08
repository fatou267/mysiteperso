<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <section class="mb-12 bg-white rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform">
    <h2 class="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">{{ title }}</h2>
    <slot></slot>
  </section>
</template>