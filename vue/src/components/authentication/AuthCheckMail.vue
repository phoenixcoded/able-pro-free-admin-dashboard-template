<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const valid = ref(false);
const logform = ref();

const router = useRouter();

function validate() {
  logform.value.validate();
  if (logform.value) {
    router.push('/login1');
  }
}
</script>

<template>
  <h3>Hi, Check Your Mail</h3>
  <h6 class="text-lightText">We have sent a password recover instructions to your email.</h6>
  <v-form ref="logform" lazy-validation v-model="valid" action="/auth/login" @submit.prevent="validate" class="mt-7 loginForm">
    <v-btn color="primary" block class="mt-2" variant="flat" rounded="md" size="large" :disabled="valid" type="submit">Sign in </v-btn>
  </v-form>
</template>
