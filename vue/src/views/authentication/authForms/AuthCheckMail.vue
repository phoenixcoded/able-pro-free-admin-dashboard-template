<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const valid = ref(false);
const logform = ref();

const router = useRouter();

function validate() {
  logform.value.validate();
  if (logform.value) {
    router.push('/auth/login1');
  }
}
</script>

<template>
  <h3 class="text-h3">Hi, Check Your Mail</h3>
  <p class="text-lightText text-h6">We have sent a password recover instructions to your email.</p>
  <v-form ref="logform" lazy-validation v-model="valid" action="/auth/login" @submit.prevent="validate" class="mt-7 loginForm">
    <v-btn color="primary" block class="mt-2" variant="flat" rounded="md" size="large" :disabled="valid" type="submit">Sign in </v-btn>
  </v-form>
</template>
