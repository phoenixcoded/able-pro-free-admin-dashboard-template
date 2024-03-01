<script setup lang="ts">
const props = defineProps({
  title: String
});
</script>

// ===============================|| Ui Parent Card||=============================== //
<template>
  <v-card variant="outlined" elevation="0" class="bg-surface" rounded="lg">
    <v-card-item class="pa-5">
      <div class="d-sm-flex align-center justify-space-between">
        <v-card-title class="text-subtitle-1" style="line-height: 1.57">{{ props.title }}</v-card-title>
        <slot name="action"></slot>
      </div>
    </v-card-item>
    <v-divider></v-divider>
    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>
