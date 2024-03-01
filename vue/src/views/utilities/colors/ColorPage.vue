<script setup lang="ts">
import { ref } from 'vue';
import ComponentTitle from '@/components/shared/ComponentTitle.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';

// component content
const page = ref({ title: 'Color' });
const subContent = ref({ content: 'Convey meaning through color. Out of the box you get access to all colors in the vuetify guidelines.' });
const path = ref({ filepath: 'src/views/utilities/colors' });
const link = ref({ filelink: 'https://vuetifyjs.com/en/styles/colors/' });

const colors = ref([
  'primary',
  'lightprimary',
  'secondary',
  'lightsecondary',
  'info',
  'lightinfo',
  'success',
  'lightsuccess',
  'warning',
  'lightwarning',
  'error',
  'lighterror',
  'darkText',
  'lightText',
  'borderLight',
  'inputBorder',
  'containerBg'
]);
</script>

<template>
  <ComponentTitle :title="page.title" :subContent="subContent.content" :path="path.filepath" :link="link.filelink"></ComponentTitle>
  <v-row>
    <v-col cols="12" md="12">
      <UiParentCard title="Color Palette">
        <v-row>
          <v-col md="3" cols="12" v-for="(color, index) in colors" :key="index">
            <v-sheet rounded="md" class="align-center justify-center d-flex" height="100" width="100%" :color="color"
              >class: {{ color }}
            </v-sheet>
          </v-col>
        </v-row>
      </UiParentCard>
    </v-col>
  </v-row>
</template>
