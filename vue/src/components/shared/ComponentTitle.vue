<script setup lang="ts">
const props = defineProps({
  title: String,
  subContent: String,
  path: String,
  link: String
});
</script>

// ===============================|| Component title ||=============================== //
<template>
  <v-row class="pb-5 mt-n3">
    <v-col cols="12" md="12">
      <v-card elevation="0" variant="text">
        <v-row gap="0" class="align-center">
          <v-col sm="12">
            <h2 class="mb-2 font-weight-bold">{{ props.title }}</h2>
            <h6 class="text-lightText mb-2">{{ props.subContent }}</h6>
            <div class="d-flex align-center mb-2 text-label-small text-lightText">
              <svg class="pc-icon mr-2" style="width: 14px; height: 14px">
                <use xlink:href="/assets/svg/sprite.svg#custom-code"></use>
              </svg>
              <span>{{ props.path }}</span>
            </div>
            <v-btn
              :href="props.link"
              class="d-inline-flex align-center font-weight-medium"
              variant="tonal"
              color="secondary"
              rounded="md"
              target="_"
            >
              <svg class="pc-icon mr-2" style="width: 16px; height: 16px">
                <use xlink:href="/assets/svg/sprite.svg#custom-link1"></use>
              </svg>
              Reference
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
