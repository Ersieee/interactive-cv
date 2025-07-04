<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

// Declare the 'skills' variable as a ref
const skills = ref([]);

// Fetch skills from the API on component mount
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills');
    skills.value = response.data;
  } catch (error) {
    console.error(error);
  }
});

// Sample projects data
const projects = [
  { 
    title: 'Website Toko Online', 
    image: 'https://via.placeholder.com/500x300?text=Proyek+1', 
    description: 'Platform e-commerce dengan fitur keranjang belanja.', 
    tech: ['Vue.js', 'Express.js', 'PostgreSQL'], 
    link: '#'
  },
  { 
    title: 'Aplikasi Manajemen Tugas', 
    image: 'https://via.placeholder.com/500x300?text=Proyek+2', 
    description: 'Aplikasi untuk melacak progres tugas harian.', 
    tech: ['React', 'Firebase'], 
    link: '#'
  }
];
</script>

<template>
  <section id="proyek" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />
      <div class="grid md:grid-cols-2 gap-12">
        <div v-for="project in projects" :key="project.title" class="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
          <!-- Fixing image class, added space between w-full and h-56 -->
          <img :src="project.image" alt="Gambar Proyek" class="w-full h-56 object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="mb-4">
              <!-- Fixing spacing in span tag classes -->
              <span v-for="t in project.tech" :key="t" class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">{{ t }}</span>
            </div>
            <a :href="project.link" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold hover:underline">Lihat Detail &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

