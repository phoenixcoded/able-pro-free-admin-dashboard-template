<script setup lang="ts">
import { ref } from 'vue';
import SvgSprite from '@/components/shared/SvgSprite.vue';
const menulist = ref(['Today', 'Weekly', 'Monthly']);
</script>
<template>
  <v-card variant="outlined" class="bg-surface" rounded="lg">
    <v-card-item>
      <v-list rounded="lg" class="py-0" aria-busy="true" aria-label="user content">
        <v-list-item class="px-0">
          <template v-slot:prepend>
            <v-avatar variant="tonal" color="primary" rounded="md">
              <SvgSprite name="custom-user-fill" style="width: 20px; height: 20px" />
            </v-avatar>
          </template>
          <h6 class="text-subtitle-1 mb-0">Able pro</h6>
          <span class="text-caption">@ableprodevelop</span>
          <template v-slot:append>
            <v-menu width="150">
              <template v-slot:activator="{ props }">
                <v-btn icon color="secondary" aria-label="menu" variant="text" rounded="md" size="small" v-bind="props">
                  <SvgSprite name="custom-more-outline" style="width: 20px; height: 20px; transform: rotate(90deg)" />
                </v-btn>
              </template>
              <v-list elevation="24" class="pa-3" rounded="md" aria-label="menu" aria-busy="true">
                <v-list-item density="compact" rounded="md" color="secondary" v-for="(item, index) in menulist" :key="index" :value="index">
                  <v-list-item-title class="text-h6 text-lightText">{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-list-item>
        <v-list-item class="px-0 pb-0 pt-4">
          <div class="d-flex justify-space-between">
            <div class="d-flex align-center justify-center flex-wrap flex-row-reverse">
              <v-avatar size="35" variant="tonal" color="primary" class="ml-n2 cursor-pointer">
                +2
                <v-tooltip activator="parent" location="top" aria-label="tooltip">
                  <div class="d-flex align-center justify-center flex-wrap flex-row-reverse">
                    <v-avatar size="40" variant="outlined" color="surface" class="ml-n2">
                      <img src="@/assets/images/users/avatar-5.png" width="40" alt="vector" />
                    </v-avatar>
                    <v-avatar size="40" variant="outlined" color="surface">
                      <img src="@/assets/images/users/avatar-4.png" width="40" alt="vector" />
                    </v-avatar>
                  </div>
                </v-tooltip>
              </v-avatar>
              <v-avatar size="35" variant="outlined" color="surface" class="ml-n2 cursor-pointer">
                <img src="@/assets/images/users/avatar-3.png" width="35" alt="vector" />
              </v-avatar>
              <v-avatar size="35" variant="outlined" color="surface" class="ml-n2 cursor-pointer">
                <img src="@/assets/images/users/avatar-2.png" width="35" alt="vector" />
              </v-avatar>
              <v-avatar size="35" variant="outlined" class="cursor-pointer" color="surface">
                <img src="@/assets/images/users/avatar-1.png" width="35" alt="vector" />
              </v-avatar>
            </div>
            <v-btn icon color="primary" aria-label="add" variant="flat" size="small">
              <SvgSprite name="custom-plus" style="width: 20px; height: 20px" />
            </v-btn>
          </div>
        </v-list-item>
      </v-list>
    </v-card-item>
  </v-card>
</template>
