<script setup lang="ts">
import { Code2, Menu, X } from 'lucide-vue-next'
import { ref } from 'vue'

const navItems = [
  { name: 'Accueil', path: '/' },
  { name: 'CV', path: '/resume' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

// État pour contrôler le menu mobile
const isMenuOpen = ref(false)
</script>

<template>
  <nav class="bg-white shadow-lg fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <Code2 class="h-8 w-8 text-blue-600" />&nbsp;
          <router-link to="/" class="text-xl font-bold text-primary">NIANG Fatou</router-link>
        </div>

        <!-- Menu (Desktop) -->
        <div class="hidden md:block">
          <div class="flex items-baseline space-x-4">
            <router-link 
              v-for="item in navItems" 
              :key="item.name"
              :to="item.path"
              class="px-3 py-2 rounded-md text-sm font-medium hover:text-primary transition-colors"
              :class="[$route.path === item.path ? 'text-primary' : 'text-gray-600']"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>

        <!-- Menu Hamburger (Mobile) -->
        <div class="md:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="p-2 text-gray-500 hover:text-primary focus:outline-none">
            <span class="sr-only">Ouvrir le menu</span>
            <Menu v-if="!isMenuOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Menu Mobile -->
    <div 
      v-if="isMenuOpen" 
      class="md:hidden bg-gray-50 border-t border-gray-200"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link 
          v-for="item in navItems" 
          :key="item.name"
          :to="item.path"
          class="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-gray-100 transition"
          :class="[$route.path === item.path ? 'text-primary bg-gray-100' : 'text-gray-600']"
          @click="isMenuOpen = false"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>
