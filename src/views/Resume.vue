<script setup lang="ts">
import CVSection from '../components/cv/CVSection.vue'
import ExperienceItem from '../components/cv/ExperienceItem.vue'
import EducationItem from '../components/cv/EducationItem.vue'
import SkillItem from '../components/cv/SkillItem.vue'
import LanguesItem from '../components/cv/LanguesItem.vue'
import InterestsAndStrengths from '../components/cv/InterestsAndStrengths.vue'

const experiences = [
  {
    title: 'Développeuse Web en Alternance',
    company: 'Keepzy France',
    period: 'Septembre 2023 - Septembre 2024',
    description: [
      'Développement d\'une plateforme de mise en location avec Django et Python.',
      'Vérification et gestion des documents soumis par les utilisateurs via une intélligence artificielle.',
      'Collaboration en équipe hybride en utilisant GitHub.'
    ]
  },
  {
    title: 'Stagiaire Développeuse Front-end',
    company: 'Ayokai France',
    period: 'Avril 2023 - Août 2023',
    description: [
      'Conception d\'un ERP en méthode Agile Scrum.',
      'Développement avec Vue.js, Tailwind CSS, et TypeScript.',
      'Gestion du projet via Jira et Bitbucket.'
    ]
  },
  {
    title: 'Stagiaire Développeuse Web',
    company: 'DefarSci, Sénégal',
    period: 'Octobre 2020 - Décembre 2020',
    description: [
      'Développement de sites web en JavaScript et Python.',
      'Reproduction de maquettes en HTML, CSS, et Bootstrap.',
      'Contribution à plusieurs projets d\'apprentissage.'
    ]
  },
  {
    title: 'Projet de fin d\'études',
    company: 'Ecole Superieure Polytechnique, NIC, Sénégal',
    period: 'Avril 2020 - Septembre 2020',
    description: [
      'Création d\'une application mobile de vente des produits locaux',
      'Développement avec React native',
      'Collaboration en équipe de trinôme Github.'
    ]
  }
]

const education = [
  {
    degree: 'Diplôme d\'Ingénieur en Informatique',
    school: 'EIL CO - École d\'Ingénieurs du Littoral Côte d\'Opale',
    period: 'Septembre 2021 - Septembre 2024',
    details: [
      'Spécialisation en développement logiciel et data science.',
      'Projet final : Contribution au développement et à la gestion d’une plateforme de mise en location.'
    ]
  },
  {
    degree: 'Diplôme Universitaire de Technologie en Informatique',
    school: 'École Supérieure Polytechnique de Dakar',
    period: 'Octobre 2018 - Novembre 2020',
    details: [
      'Formation de Technicienne Supérieure en Informatique.',
      'Projet final : Développement d\'une application mobile pour la vente de produits locaux.'
    ]
  },
  {
    degree: 'Baccalauréat, Sciences Expérimentales, Mention Bien',
    school: 'Lycée Ex-CEM Mbacké 2 Diourbel, Senegal',
    period: 'Octobre 2017 - Juillet 2018',
    details: [
      'Formation sur les bases scientifiques et mathématiques.',
      
    ]
  }
  
]

const skills = [
  {
    category: 'Développement Front-end',
    skills: ['Vue.js', 'React.js', 'Angular', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript']
  },
  {
    category: 'Développement Back-end',
    skills: ['Django', 'Symfony', 'Node.js', 'PHP', 'Python', 'Firebase', 'REST API']
  },
  {
    category: 'Outils et Méthodologies',
    skills: ['Git', 'Docker', 'Jira', 'Scrum', 'CI/CD', 'Notion', 'QlikView', 'Linux']
  }
]

const languages = [
  { name: 'Français', level: 'Natif' },
  { name: 'Anglais', level: 'Intermédiaire (A2)' },
  { name: 'Espagnol', level: 'Notions de base' },
]
const interests = [
  'Passion pour le développement logiciel',
  'Exploration de l\'intelligence artificielle',
  'Lecture et veille technologique',
  'Randonnée et photographie',
];

const strengths = [
  'Travail d\'équipe et collaboration efficace',
  'Curiosité et apprentissage continu',
  'Capacité à résoudre des problèmes complexes',
  'Adaptabilité dans des environnements changeants',
];
</script>
<template>
  <div class="min-h-screen pt-24 pb-12 bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <div class="flex flex-col items-center">
        <img 
          src="../assets/fatou.jpg" 
          alt="Fatou Niang" 
          class="w-24 h-24 rounded-full shadow-lg object-cover mb-4"
        />
        <h1 class="text-4xl font-bold text-gray-800 mb-2">Fatou Niang</h1>
        <p class="text-xl text-primary mb-6">Ingénieure en Informatique</p>
        </div>
        <div class="flex justify-center space-x-4 text-gray-600">
          <div class="flex items-center">
            <span>niangfatou040@gmail.com</span>
          </div>
          <div class="flex items-center">
            <span>+33 7 45 01 42 15</span>
          </div>
        </div>
      </div>

      <!-- Experience -->
      <CVSection title="Expérience Professionnelle">
        <ExperienceItem 
          v-for="exp in experiences"
          :key="exp.title"
          v-bind="exp"
        />
      </CVSection>

      <!-- Education -->
      <CVSection title="Formation">
        <EducationItem
          v-for="edu in education"
          :key="edu.degree"
          v-bind="edu"
        />
      </CVSection>

      <!-- Skills -->
      <CVSection title="Compétences informatiques">
        <SkillItem
          v-for="skillGroup in skills"
          :key="skillGroup.category"
          v-bind="skillGroup"
        />
      </CVSection>
      
    <CVSection title="Compétences Linguistiques">
      <LanguesItem
      v-for="language in languages"
      :key="language.name"
      v-bind="language"
    />
  </CVSection>

  <CVSection title="Mes Centres d'Intérêts et Atouts">
      <InterestsAndStrengths
        :interests="interests"
        :strengths="strengths"
      />
    </CVSection>
    </div>
  </div>
</template>
