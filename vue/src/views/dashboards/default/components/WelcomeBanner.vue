<script setup lang="ts">
// assets
import Banner from '@/assets/images/analytics/welcome-banner.png';
</script>

<template>
  <v-card class="welcomeBanner text-surface overflow-hidden" elevation="0" rounded="lg">
    <v-card-text class="py-5 px-md-12 px-6">
      <v-row>
        <v-col cols="12" xl="6" md="7" sm="10">
          <div class="pb-md-8 pt-md-7 pt-5 pb-6">
            <h2 class="text-sm-h2 text-h3">Explore Redesigned Able Pro</h2>
            <p class="text-h6 mb-7">
              The Brand new User Interface with power of Vuetify Components. Explore the Endless possibilities with Able Pro.
            </p>
            <v-btn
              color="white"
              href="https://codedthemes.com/item/able-pro-dashboard-templates/"
              class="text-none"
              target="_blank"
              variant="outlined"
              rounded="md"
              >Download now</v-btn
            >
          </div>
        </v-col>
        <v-col cols="12" xl="6" md="5" class="d-md-block d-none">
          <div class="pe-8">
            <v-img :src="Banner" cover class="ms-auto" width="200" alt="welcome banner" />
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<style lang="scss">
.welcomeBanner {
  background: rgb(var(--v-theme-darkprimary));
  position: relative;
  &::after {
    content: '';
    background-image: url(@/assets/images/analytics/img-dropbox-bg.svg);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.5;
    background-position: bottom right;
    background-size: 100%;
    background-repeat: no-repeat;
  }
}
</style>
