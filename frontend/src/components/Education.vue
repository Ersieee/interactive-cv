<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

// Declare skills as a ref
const skills = ref([]);

// Fetch skills from the API
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills');
    skills.value = response.data;
  } catch (error) {
    console.error(error);
  }
});

// Education history data
const educationHistory = [
  { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Teknik Informatika' },
  { id: 2, period: '2020 - 2023', institution: 'SMK Dinamika Pembangunan 1 Jakarta', major: 'Teknik Komputer dan Jaringan' }
];
</script>

<template>
  <section id="pendidikan" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />
      <div class="relative">
        <div class="absolute h-full border-r-2 border-gray-300" style="left: 50%;"></div>
        
        <!-- Loop through the educationHistory -->
        <div v-for="(edu, index) in educationHistory" :key="edu.id" class="mb-8 flex justify-between items-center w-full">
          
          <!-- For even indexes (left side) -->
          <div v-if="index % 2 === 0" class="w-full flex">
            <div class="w-1/2 pr-8 text-right">
              <p class="font-semibold text-blue-600">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-gray-800">{{ edu.institution }}</h3>
              <p class="text-gray-600">{{ edu.major }}</p>
            </div>
            <div class="w-1/2 flex justify-start">
              <div class="w-4 h-4 bg-blue-600 rounded-full z-10"></div>
            </div>
          </div>

          <!-- For odd indexes (right side) -->
          <div v-else class="w-full flex">
            <div class="w-1/2 flex justify-end">
              <div class="w-4 h-4 bg-blue-600 rounded-full z-10"></div>
            </div>
            <div class="w-1/2 pl-8 text-left">
              <p class="font-semibold text-blue-600">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-gray-800">{{ edu.institution }}</h3>
              <p class="text-gray-600">{{ edu.major }}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
