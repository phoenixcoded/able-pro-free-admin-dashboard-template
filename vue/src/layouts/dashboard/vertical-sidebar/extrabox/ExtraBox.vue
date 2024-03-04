<script setup lang="ts">
import SvgSprite from '@/components/shared/SvgSprite.vue';

// assets
import avatarGroup from '@/assets/images/welcome-banner.png';
</script>

<template>
  <v-sheet rounded="md" color="containerBg" class="pa-4 ExtraBox hide-menu text-center pb-6" border>
    <div class="d-flex align-center flex-column">
      <v-img :src="avatarGroup" alt="book" class="mb-3" width="169px" cover></v-img>
      <div class="px-3">
        <h5 class="text-h5 mb-1 line-height-none">Able Pro</h5>
        <small class="text-lightText text-h6">Checkout pro features</small>
      </div>
    </div>
    <div class="mt-5">
      <v-btn href="https://1.envato.market/B0JAPW" target="_blank" variant="flat" color="primary" class="primary-shadow rounded-md">
        <template v-slot:prepend>
          <SvgSprite name="custom-logout-1" style="width: 18px; height: 18px" />
        </template>
        Upgrade to pro
      </v-btn>
    </div>
  </v-sheet>
</template>
<style lang="scss">
.ExtraBox {
  position: relative;
  overflow: hidden;
}
.line-height-none {
  line-height: normal;
}
</style>
