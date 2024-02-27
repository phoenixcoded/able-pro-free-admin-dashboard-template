<script setup lang="ts">
import SvgSprite from '@/components/shared/SvgSprite.vue';

type Breadcrumb = {
  title: string;
  disabled: boolean;
  href: string;
};

const props = defineProps({
  title: String,
  breadcrumbs: Array as () => Breadcrumb[],
  icon: String
});
</script>

// ===============================|| Theme Breadcrumb ||=============================== //
<template>
  <v-row class="page-breadcrumb mb-0 mt-n2">
    <v-col cols="12" md="12">
      <v-card elevation="0" variant="text">
        <v-row no-gutters class="align-center">
          <v-col sm="12">
            <v-breadcrumbs :items="props.breadcrumbs" class="text-h6 pa-1 mb-0">
              <template v-slot:divider>
                <div class="d-flex align-center">
                  <SvgSprite name="custom-chevron-outline" style="width: 12px; height: 12px" />
                </div>
              </template>
              <template v-slot:prepend>
                <router-link to="/" class="text-darkText text-h6 text-decoration-none"> Home </router-link>
                <div class="d-flex align-center px-2">
                  <SvgSprite name="custom-chevron-outline" style="width: 12px; height: 12px" />
                </div>
              </template>
            </v-breadcrumbs>
            <h2 class="text-h2 font-weight-bold mb-0">{{ props.title }}</h2>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss">
.page-breadcrumb {
  .v-toolbar {
    background: transparent;
  }
}
</style>
