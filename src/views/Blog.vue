<template>
  <div class="min-h-screen pt-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-center mb-12">Blog</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Article sur Keepzy -->
        <article class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="../assets/blog1.png" alt="Keepzy - Étude Blockchain et IA" class="w-full h-48 object-cover">
          <div class="p-6">
            <div class="text-sm text-gray-500 mb-2">7 Janvier 2025</div>
            <h2 class="text-xl font-semibold mb-3">
              Systèmes d’Intelligence Artificielle pour l’authentification des documents locatifs
            </h2>
            <p class="text-gray-600 mb-4">
              Étude bibliographique menée dans le cadre de la spécialité Data Science à l'École d’Ingénieurs du Littoral Côte d’Opale. Découvrez comment la blockchain et l’IA peuvent sécuriser les documents locatifs.
            </p>
            <a
              href="/projet_biblio.pdf"
              target="_blank"
              class="text-primary hover:text-secondary"
            >
              Lire la suite (PDF) →
            </a>
          </div>
        </article>
        <article class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="../assets/blog2.png" alt="Reconnaissance d'objets - Applications et perspectives" class="w-full h-48 object-cover">
          <div class="p-6">
            <div class="text-sm text-gray-500 mb-2">22 Mars 2024</div>
            <h2 class="text-xl font-semibold mb-3">
              La reconnaissance d’objets : Applications et perspectives
            </h2>
            <p class="text-gray-600 mb-4">
              La reconnaissance d’objets est une technologie clé dans de nombreux domaines. Découvrez comment l'IA et la machine learning révolutionnent des secteurs tels que la sécurité, la santé, et la logistique.
            </p>
            <a
              href="/Classification _objets.pdf"
              target="_blank"
              class="text-primary hover:text-secondary"
            >
              Lire la suite (PDF) →
            </a>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Aucune logique avancée nécessaire ici.
</script>

<style>
/* Ajoutez des styles spécifiques si nécessaire */
</style>
