<template>
  <div class="min-h-screen pt-16">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Bienvenue sur mon Portfolio</h1>
          <p class="text-lg mb-6">
          Je suis <span class="font-semibold">Fatou Niang</span>, Ingénieure en Informatique passionnée par le développement et spécialisée en data science. 
          Mon objectif est de concevoir des solutions innovantes pour répondre aux défis modernes.
         </p>
          <router-link to="/contact" class="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Me Contacter
          </router-link>
        </div>
      </div>
    </section>


    <!-- Projects Section -->
    <section class="py-20 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-center mb-12">Mes Projets</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Projet 1 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="../assets/MKT_logo.png" alt="Site Maktech Vue.js" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Site Maktech (en cours)</h3>
          <p class="text-gray-600 mb-4">Développement d'un site de présentation des services de l'entreprise Maktech avec Vue.js.</p>
          <a href="#" class="text-primary hover:text-secondary">Voir plus →</a>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="../assets/logo.png" alt="Blog en Django" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Site culinaire</h3>
          <p class="text-gray-600 mb-4">Création d’un site web de partage de
            recettes culinaires avec Python, Django</p>
          <a href="https://github.com/fatou267/sencuisineByfa" class="text-primary hover:text-secondary">Voir plus →</a>
        </div>
      </div>
      <!-- Projet 2 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="../assets/photo_2.jpg" alt="Site couturier Symfony" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Site Couturier</h3>
          <p class="text-gray-600 mb-4">Développement d'un site de gestion pour couturiers avec Symfony.</p>
          <a href="https://github.com/fatou267/vente" class="text-primary hover:text-secondary">Voir plus →</a>
        </div>
      </div>
      <!-- Projet 3 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="../assets/portfolio.png" alt="Portfolio Vue.js" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Portfolio Vue.js</h3>
          <p class="text-gray-600 mb-4">Mon portfolio personnel développé avec Vue.js Version 1.</p>
          <a href="https://github.com/fatou267/Myportfolio" class="text-primary hover:text-secondary">Voir plus →</a>
        </div>
      </div>
      <!-- Projet 4 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="../assets/toeic.png" alt="Site TOEIC" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Site d'Entrainement pour les Tests TOEIC</h3>
          <p class="text-gray-600 mb-4">Un site interactif pour s'entraîner aux tests TOEIC, développé avec React.js.</p>
          <a href="#" class="text-primary hover:text-secondary">Voir plus →</a>
        </div>
      </div>
      <!-- Projet 2 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="../assets/appsenbio.png" alt="Application mobile Sen Bio" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Application Mobile Sen Bio</h3>
          <p class="text-gray-600 mb-4">Développement d'une application mobile pour la vente de produits locaux avec React Native.</p>
          <a href="#" class="text-primary hover:text-secondary">Voir plus →</a>
        </div>
      </div>
      <!-- Projet 3 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="../assets/logo_w.png" alt="Recommandation de Restaurants" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Projet Web de Recommandation de Restaurants</h3>
          <p class="text-gray-600 mb-4">Application web avec Angular, APIs et Firebase pour recommander des restaurants aux utilisateurs.</p>
          <a href="https://github.com/fatou267/ProjetWeb" class="text-primary hover:text-secondary">Voir plus →</a>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="../assets/logo.jpg" alt="Site d'informations pour étudiants" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Site d'Informations pour Étudiants</h3>
          <p class="text-gray-600 mb-4">Un site en PHP pour aider les étudiants avec des ressources et informations utiles.</p>
          <a href="https://github.com/fatou267/SiteService" class="text-primary hover:text-secondary">Voir plus →</a>
        </div>
      </div>
      <!-- Projet 5 -->
     
      <!-- Projet 6 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="../assets/king.png" alt="Jeu Kingdomino" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Jeu Kingdomino</h3>
          <p class="text-gray-600 mb-4">Un jeu en IA développé avec Python, intégrant des graphismes simples.</p>
          <a href="https://github.com/fatou267/kingdomino" class="text-primary hover:text-secondary">Voir plus →</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-20 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-center mb-12">Mes Certifications OpenClassrooms</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Certification 1 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="../assets/1.png" alt="Sécurisez vos applications web avec l'OWASP" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Sécurisez vos applications web avec l'OWASP</h3>
          <p class="text-gray-600 mb-4">Apprenez les bonnes pratiques pour sécuriser vos applications web.</p>
          <p class="text-sm text-gray-500 italic">Certification Obtenue.</p>
        </div>
      </div>
      <!-- Certification 2 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="../assets/2.png" alt="Construisez un site web avec Symfony 5" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Construisez un site web avec Symfony 5</h3>
          <p class="text-gray-600 mb-4">Maîtrisez le framework Symfony pour le développement web.</p>
          <p class="text-sm text-gray-500 italic">Certification Obtenue.</p>
        </div>
      </div>
      <!-- Certification 3 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="../assets/3.png" alt="Programmez en orienté objet en PHP" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Programmez en orienté objet en PHP</h3>
          <p class="text-gray-600 mb-4">Apprenez à développer en PHP avec le paradigme orienté objet.</p>
          <p class="text-sm text-gray-500 italic">Certification Obtenue.</p>
        </div>
      </div>
      <!-- Certification 4 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="../assets/4.png" alt="Découvrez le framework Django" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Découvrez le framework Django</h3>
          <p class="text-gray-600 mb-4">Développez des applications web robustes avec Django.</p>
          <p class="text-sm text-gray-500 italic">Certification Obtenue.</p>
        </div>
      </div>
      <!-- Certification 5 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="../assets/5.png" alt="Apprenez à programmer en C" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Apprenez à programmer en C</h3>
          <p class="text-gray-600 mb-4">Maîtrisez les bases de la programmation en langage C.</p>
          <p class="text-sm text-gray-500 italic">Certification Obtenue.</p>
        </div>
      </div>
      <!-- Certification 6 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="../assets/6.png" alt="Apprenez à programmer en Python" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">Apprenez à programmer en Python</h3>
          <p class="text-gray-600 mb-4">Initiez-vous à la programmation avec Python, un langage polyvalent.</p>
          <p class="text-sm text-gray-500 italic">Certification Obtenue.</p>
        </div>
      </div>
    </div>
  </div>
</section>


  </div>
</template>