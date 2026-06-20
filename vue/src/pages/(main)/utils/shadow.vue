<script setup lang="ts">
import { ref } from 'vue';
import ComponentTitle from '@/components/shared/ComponentTitle.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';

// component content
const page = ref({ title: 'Shadows' });
const subContent = ref({
  content: 'Add or remove shadows to elements with box-shadow utilities.'
});
const path = ref({ filepath: 'src/pages/utils/shadow' });
const link = ref({ filelink: 'https://vuetifyjs.com/en/styles/elevation/' });

const colorShadow = ref(['primary', 'secondary', 'info', 'success', 'warning', 'error']);
</script>

<template>
  <ComponentTitle :title="page.title" :subContent="subContent.content" :path="path.filepath" :link="link.filelink"></ComponentTitle>
  <v-row>
    <v-col cols="12" md="12">
      <UiParentCard title="Basic Shadow">
        <v-row justify="center">
          <v-col v-for="n in 6" :key="n" lg="2" sm="3" cols="6">
            <v-sheet height="100" :class="['d-flex justify-center align-center flex-column', `elevation-${n - 1}`]">
              <h6>elevation</h6>
              <div>{{ n - 1 }}</div>
            </v-sheet>
          </v-col>
        </v-row>
      </UiParentCard>
    </v-col>
    <v-col cols="12" md="12">
      <UiParentCard title="Color Shadow">
        <v-row>
          <v-col cols="6" lg="2" md="3" sm="4" v-for="color in colorShadow" :key="color">
            <v-card :class="`${color}-shadow bg-${color} px-4 py-6 text-center text-body-large`">
              {{ color }}
            </v-card>
          </v-col>
          <v-col cols="6" lg="2" md="3" sm="4" v-for="color in colorShadow" :key="color">
            <v-card :class="`${color}-outline-shadow text-${color} px-4 py-6 text-center text-body-large`">
              {{ color }}
            </v-card>
          </v-col>
        </v-row>
      </UiParentCard>
    </v-col>
  </v-row>
</template>
