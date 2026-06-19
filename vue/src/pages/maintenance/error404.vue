<script setup lang="ts"></script>

<template>
  <v-row gap="0" class="overflow-hidden bg-containerBg" style="min-height: 100vh">
    <v-col class="d-flex align-center justify-center">
      <div class="text-center">
        <div class="CardMediaWrapper">
          <img src="@/assets/images/maintenance/img-error-404.svg" alt="404" />
        </div>
        <h1 class="text-md-display-large text-display-medium mt-16">Page Not Found</h1>
        <h6 class="text-lightText">The page you are looking was moved, removed, <br />renamed, or might never exist!</h6>
        <v-btn variant="flat" color="primary" class="mt-2" rounded="md" to="/"> Back To Home</v-btn>
      </div>
    </v-col>
  </v-row>
</template>
<style lang="scss">
@use '@/scss/grid/mixins' as breakpoints;

.CardMediaWrapper {
  max-width: 720px;
  margin: 0 auto;
  position: relative;
  > img {
    @include breakpoints.min('xs') {
      width: 250px;
      height: 130px;
    }
    @include breakpoints.min('sm') {
      width: 590px;
      height: 300px;
    }
  }
}
</style>
