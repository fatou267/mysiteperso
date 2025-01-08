<script setup lang="ts">
import { Code2 } from 'lucide-vue-next'

const navItems = [
  { name: 'Accueil', path: '/' },
 
  { name: 'CV', path: '/resume' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

</script>

<template>
  <nav class="bg-white shadow-lg fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <Code2 class="h-8 w-8 text-blue-600" />&nbsp;
          <router-link to="/" class="text-xl font-bold text-primary">NIANG Fatou</router-link>
        </div>
        <div class="flex items-center">
          <div class="hidden md:block">
            <div class="flex items-baseline space-x-4">
              <router-link v-for="item in navItems" 
                :key="item.name"
                :to="item.path"
                class="px-3 py-2 rounded-md text-sm font-medium hover:text-primary transition-colors"
                :class="[$route.path === item.path ? 'text-primary' : 'text-gray-600']"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>