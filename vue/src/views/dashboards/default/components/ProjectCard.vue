<script setup lang="ts">
import { shallowRef } from 'vue';
import SvgSprite from '@/components/shared/SvgSprite.vue';
import CardHeader from '@/components/shared/CardHeader.vue';

const projectitems = shallowRef([
  {
    color: 'warning',
    name: 'Horizontal Layout',
    task: '2'
  },
  {
    color: 'warning',
    name: 'Invoice Generator'
  },
  {
    color: 'primary',
    name: 'Package Upgrades'
  },
  {
    color: 'success',
    name: 'Figma Auto layout'
  }
]);
</script>
<template>
  <CardHeader title="Project - Able Pro" class="overflow-hidden">
    <div class="pa-6">
      <div class="d-flex justify-space-between mb-2">
        <p class="text-body-1 mb-0">Release v1.2.0</p>
        <p class="text-body-1 mb-0">72%</p>
      </div>
      <v-progress-linear aria-label="progressbar" rounded color="primary" model-value="72" height="6"></v-progress-linear>
      <v-list class="py-5" aria-busy="true" aria-label="project list">
        <v-list-item v-for="(item, index) in projectitems" :key="index" :value="index" rounded="md">
          <template v-slot:prepend>
            <v-avatar size="8" :color="item.color"></v-avatar>
          </template>
          <span class="text-body-1">{{ item.name }}</span>
          <template v-slot:append>
            <v-chip size="small" rounded="md" v-if="item.task">
              <template v-slot:prepend>
                <SvgSprite name="custom-link1" class="mr-1" style="width: 12px; height: 12px" />
              </template>
              {{ item.task }}
            </v-chip>
          </template>
        </v-list-item>
      </v-list>
      <v-btn color="primary" variant="flat" rounded="md" block>
        <template v-slot:prepend>
          <SvgSprite name="custom-plus" style="width: 18px; height: 18px" />
        </template>
        Add Task
      </v-btn>
    </div>
  </CardHeader>
</template>
