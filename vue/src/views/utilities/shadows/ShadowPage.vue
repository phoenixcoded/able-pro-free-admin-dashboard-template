<script setup lang="ts">
import { ref } from 'vue';
import ComponentTitle from '@/components/shared/ComponentTitle.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';

// component content
const page = ref({ title: 'Shadows' });
const subContent = ref({ content: 'Add or remove shadows to elements with box-shadow utilities.' });
const path = ref({ filepath: 'src/views/utilities/shadows' });
const link = ref({ filelink: 'https://vuetifyjs.com/en/styles/elevation/' });

const colorShadow = ref(['primary', 'secondary', 'info', 'success', 'warning', 'error']);
</script>

<template>
  <ComponentTitle :title="page.title" :subContent="subContent.content" :path="path.filepath" :link="link.filelink"></ComponentTitle>
  <v-row>
    <v-col cols="12" md="12">
      <UiParentCard title="Basic Shadow">
        <v-row justify="center">
          <v-col v-for="n in 25" :key="n" cols="auto">
            <v-card height="100" width="100" class="mb-5" :class="['d-flex justify-center align-center flex-column', `elevation-${n}`]">
              <h6 class="text-h6">elevation</h6>
              <div>{{ n - 1 }}</div>
            </v-card>
          </v-col>
        </v-row>
      </UiParentCard>
    </v-col>
    <v-col cols="12" md="12">
      <UiParentCard title="Color Shadow">
        <v-row>
          <v-col cols="6" lg="2" md="3" sm="4" v-for="color in colorShadow" :key="color">
            <v-card :class="`${color}-shadow bg-${color} px-4 py-6 text-center text-subtitle-1`">
              {{ color }}
            </v-card>
          </v-col>
        </v-row>
        <v-row class="mt-3">
          <v-col cols="6" lg="2" md="3" sm="4" v-for="color in colorShadow" :key="color">
            <v-card :class="`${color}-outline-shadow text-${color} px-4 py-6 text-center text-subtitle-1`">
              {{ color }}
            </v-card>
          </v-col>
        </v-row>
      </UiParentCard>
    </v-col>
  </v-row>
</template>
