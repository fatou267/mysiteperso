<script setup lang="ts">
defineProps<{
  interests: string[];
  strengths: string[];
}>();
</script>

<template>
  <div>
    <!-- Section Centres d'intérêts -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Centres d'intérêts</h2>
      <div class="flex flex-wrap gap-4">
        <div
          v-for="interest in interests"
          :key="interest"
          class="px-4 py-2 bg-gray-100 rounded-md shadow-sm text-gray-800 font-medium"
        >
          {{ interest }}
        </div>
      </div>
    </section>

    <!-- Section Atouts -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Atouts</h2>
      <div class="flex flex-wrap gap-4">
        <div
          v-for="strength in strengths"
          :key="strength"
          class="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-md shadow-sm font-medium"
        >
          {{ strength }}
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
section {
  margin-bottom: 1.5rem;
}
</style>
