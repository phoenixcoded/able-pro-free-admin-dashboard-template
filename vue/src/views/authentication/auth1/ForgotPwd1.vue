<script setup lang="ts">
import AuthForgotPwd from '../authForms/AuthForgotPwd.vue';
</script>

<template>
  <v-row class="bg-containerBg position-relative" no-gutters>
    <div class="bg-blur">
      <div class="round-1"></div>
      <div class="round-2"></div>
    </div>
    <!---Forgot pwd Part-->
    <v-col cols="12" class="d-flex align-center">
      <v-container>
        <div class="d-flex align-center justify-center" style="min-height: calc(100vh - 148px)">
          <v-row justify="center">
            <v-col cols="12" lg="12">
              <v-card elevation="0" variant="outlined" rounded="lg" class="loginBox bg-surface">
                <v-card-text class="pa-sm-10 pa-4">
                  <div class="d-flex justify-space-between align-center">
                    <h3 class="text-h3 text-center mb-0">Forgot Password</h3>
                    <router-link to="/auth/login1" class="text-primary text-decoration-none">Back to Login</router-link>
                  </div>

                  <!---Forgot pwd Form-->
                  <AuthForgotPwd />
                  <!---Forgot pwd Form-->
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
    <!---Forgot pwd Part-->
  </v-row>
</template>
<style lang="scss">
.loginBox {
  max-width: 475px;
  margin: 0 auto;
}
</style>
