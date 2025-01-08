<template>
  <div class="min-h-screen pt-20 bg-gray-50">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-lg shadow-md p-8">
        <h1 class="text-3xl font-bold text-center mb-8">Contactez-moi</h1>

        <form ref="contactForm" class="space-y-6" @submit.prevent="validateAndSend">
          <div>
            <label for="from_name" class="block text-sm font-medium text-gray-700">Nom</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              v-model="from_name"
              class="mt-1 block w-full rounded-md border-0 bg-white-100 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:bg-white focus:outline-none"
              required
            >
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              v-model="email"
              class="mt-1 block w-full rounded-md border-0 bg-white-100 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:bg-white focus:outline-none"
              required
            >
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              v-model="message"
              rows="4"
              class="mt-1 block w-full rounded-md border-0 bg-white-100 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:bg-white focus:outline-none"
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              class="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Envoyer
            </button>
          </div>
        </form>

        <div class="mt-8 pt-8 border-t border-gray-200">
          <h2 class="text-xl font-semibold mb-4">Autres moyens de contact</h2>
          <div class="space-y-2 text-gray-600">
            <p>📧 niangfatou040@gmail.com</p>
            <p>📱 +33 7 45 01 42 15</p>
            <p>📍 Charleville Mézières, France</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactView',
  data() {
    return {
      from_name: '', 
      email: '', 
      message: '', 
    };
  },
  methods: {
    validateAndSend() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.from_name || !this.email || !this.message) {
        alert('Veuillez remplir tous les champs avant de soumettre.');
        return;
      }
      if (!emailRegex.test(this.email)) {
        alert('Veuillez entrer une adresse email valide.');
        return;
      }

      const form = this.$refs.contactForm;

      emailjs
        .sendForm(
          'service_mzecu34',
          'template_hy2rvka',
          form,
          '4Gzf3XoiSbXEKjyF-'
        )
        .then((result) => {
          alert('SUCCESS! Votre message a été envoyé.');
          this.resetForm();
        })
        .catch((error) => {
          console.error('Erreur lors de l\'envoi:', error);
          alert('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.');
        });
    },
    resetForm() {
      this.from_name = '';
      this.email = '';
      this.message = '';
    },
  },
};
</script>
