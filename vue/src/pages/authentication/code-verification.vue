<script setup lang="ts">
import AuthCodeVerification from '@/components/authentication/AuthCodeVerification.vue';
</script>

<template>
  <v-row class="bg-containerBg position-relative" gap="0">
    <div class="bg-blur">
      <div class="round-1"></div>
      <div class="round-2"></div>
    </div>
    <!---Code verification Part-->
    <v-col cols="12" class="d-flex align-center">
      <v-container>
        <div class="d-flex align-center justify-center" style="min-height: calc(100vh - 148px)">
          <v-row justify="center">
            <v-col cols="12" lg="10" xl="6" md="7">
              <v-card elevation="0" variant="outlined" rounded="md" class="loginBox bg-surface">
                <v-card-text class="pa-sm-9 pa-6">
                  <h3 class="mb-2">Enter Verification Code</h3>
                  <h6 class="text-lightText">We send you on mail.</h6>

                  <!---Code verification Form-->
                  <AuthCodeVerification />
                  <!---Code verification Form-->
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
    <!---Code verification Part-->
  </v-row>
</template>
<style lang="scss">
.loginBox {
  max-width: 475px;
  margin: 0 auto;
}
</style>
