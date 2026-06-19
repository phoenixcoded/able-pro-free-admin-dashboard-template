<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SvgSprite from '@/components/shared/SvgSprite.vue';

const valid = ref(false);
const logform = ref();
const password = ref('');
const conpassword = ref('');
const show1 = ref(false);
const passwordRules = ref([
  (v: string) => !!v || 'Password is required',
  (v: string) => (v && v.length <= 10) || 'Password must be less than 10 characters'
]);
const confirmpasswordRules = ref([
  (v: string) => !!v || 'Password is required',
  (v: string) => (v && v.length <= 10) || 'Password must be less than 10 characters'
]);

const router = useRouter();

function validate() {
  logform.value.validate();
  if (logform.value) {
    router.push('/starter');
  }
}
</script>

<template>
  <v-form ref="logform" lazy-validation v-model="valid" action="/starter" @submit.prevent="validate" class="mt-7 loginForm">
    <div class="mb-6">
      <v-label>Password</v-label>
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        required
        placeholder="Enter password"
        variant="outlined"
        density="comfortable"
        color="primary"
        hide-details="auto"
        :type="show1 ? 'text' : 'password'"
        class="pwdInput mt-2 mb-4"
      >
        <template v-slot:append-inner>
          <v-btn color="secondary" aria-label="icon" icon rounded variant="text">
            <SvgSprite name="custom-eye-invisible" style="width: 20px; height: 20px" v-if="show1 == false" @click="show1 = !show1" />
            <SvgSprite name="custom-eye" style="width: 20px; height: 20px" v-if="show1 == true" @click="show1 = !show1" />
          </v-btn>
        </template>
      </v-text-field>
    </div>
    <div class="mb-6">
      <v-label>Confirm Password</v-label>
      <v-text-field
        v-model="conpassword"
        :rules="confirmpasswordRules"
        placeholder="Enter confirm password"
        required
        variant="outlined"
        density="comfortable"
        color="primary"
        hide-details="auto"
        class="pwdInput mt-2"
      ></v-text-field>
    </div>
    <v-btn color="primary" block class="mt-5" variant="flat" rounded="md" size="large" :disabled="valid" type="submit"
      >Reset Password
    </v-btn>
  </v-form>
</template>
