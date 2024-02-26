<script setup lang="ts">
import { ref } from 'vue';

const valid = ref(false);
const logform = ref();
const otp = ref('');
</script>

<template>
  <p class="text-h6 my-6">We’ve send you code on jone.****@company.com</p>
  <v-form ref="logform" lazy-validation v-model="valid" class="mt-7 loginForm">
    <v-otp-input type="number" v-model="otp" length="4" class="mb-5" rounded="md" single-line height="46"></v-otp-input>
    <v-btn color="primary" block class="mt-2" variant="flat" rounded="md" size="large" type="submit">Continue </v-btn>
  </v-form>
  <div class="d-sm-flex align-start justify-space-between mt-6">
    <div class="text-subtitle-1 font-weight-regular">Not received Code?</div>
    <v-btn variant="text" color="primary" to="/#" class="text-capitalize mr-n2 mt-2 mt-sm-0">Resend Code</v-btn>
  </div>
</template>

<style lang="scss">
.loginForm {
  .v-otp-input {
    padding: 0;
    .v-otp-input__content {
      max-width: 100%;
      padding: 0;
    }
    .v-otp-input__field {
      font-size: 13px;
    }
  }
}
</style>
