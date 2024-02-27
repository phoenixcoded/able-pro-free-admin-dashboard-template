<script setup>
import SvgSprite from '@/components/shared/SvgSprite.vue';
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!-- searchbar -->
  <!-- ---------------------------------------------- -->
  <v-text-field persistent-placeholder placeholder="Ctrl + k" color="primary" variant="outlined" hide-details>
    <template v-slot:prepend-inner>
      <div class="text-lightText d-flex align-center">
        <SvgSprite name="custom-search" style="width: 16px; height: 16px" />
      </div>
    </template>
  </v-text-field>
</template>
