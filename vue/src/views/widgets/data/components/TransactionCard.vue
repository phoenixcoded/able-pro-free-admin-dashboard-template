<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import SvgSprite from '@/components/shared/SvgSprite.vue';

const menulist = ref(['Today', 'Weekly', 'Monthly']);

const tab = ref(null);

const transactionData = shallowRef([
  {
    title: 'Apple Inc.',
    avatarVariant: 'outlined',
    avatarColor: 'borderLight',
    avatarName: 'AI',
    icon: 'custom-fall-down-outline',
    subcontent: '#ABLE-PRO-T00232',
    price: '$210,000',
    percentage: '10.6',
    color: 'error'
  },
  {
    title: 'Spotify Music',
    avatarVariant: 'outlined',
    avatarColor: 'borderLight',
    avatarName: 'SM',
    icon: 'custom-rise-outline',
    subcontent: '#ABLE-PRO-T00233',
    price: '-10,000',
    percentage: '30.6',
    color: 'success'
  },
  {
    title: 'Medium',
    avatarVariant: 'tonal',
    avatarColor: 'primary',
    avatarName: 'MD',
    icon: 'custom-bidirectional',
    subcontent: '06:30 pm',
    price: '-26',
    percentage: '5',
    color: 'warning'
  },
  {
    title: 'Uber',
    avatarVariant: 'outlined',
    avatarColor: 'borderLight',
    avatarName: 'U',
    icon: 'custom-rise-outline',
    subcontent: '08:40 pm',
    price: '+2,10,000',
    percentage: '10.6',
    color: 'success'
  },
  {
    title: 'Ola Cabs',
    avatarVariant: 'tonal',
    avatarColor: 'warning',
    avatarName: 'OC',
    icon: 'custom-rise-outline',
    subcontent: '07:40 pm',
    price: '+2,10,000',
    percentage: '10.6',
    color: 'success'
  }
]);

const transactionData1 = shallowRef([
  {
    title: 'Uber',
    avatarVariant: 'outlined',
    avatarColor: 'borderLight',
    avatarName: 'U',
    icon: 'custom-rise-outline',
    subcontent: '08:40 pm',
    price: '+2,10,000',
    percentage: '10.6',
    color: 'success'
  },
  {
    title: 'Ola Cabs',
    avatarVariant: 'tonal',
    avatarColor: 'warning',
    avatarName: 'OC',
    icon: 'custom-rise-outline',
    subcontent: '07:40 pm',
    price: '+2,10,000',
    percentage: '10.6',
    color: 'success'
  },
  {
    title: 'Apple Inc.',
    avatarVariant: 'outlined',
    avatarColor: 'borderLight',
    avatarName: 'AI',
    icon: 'custom-fall-down-outline',
    subcontent: '#ABLE-PRO-T00232',
    price: '$210,000',
    percentage: '10.6',
    color: 'error'
  },
  {
    title: 'Spotify Music',
    avatarVariant: 'outlined',
    avatarColor: 'borderLight',
    avatarName: 'SM',
    icon: 'custom-rise-outline',
    subcontent: '#ABLE-PRO-T00233',
    price: '-10,000',
    percentage: '30.6',
    color: 'success'
  },
  {
    title: 'Medium',
    avatarVariant: 'tonal',
    avatarColor: 'primary',
    avatarName: 'MD',
    icon: 'custom-bidirectional',
    subcontent: '06:30 pm',
    price: '-26',
    percentage: '5',
    color: 'warning'
  }
]);

const transactionData2 = shallowRef([
  {
    title: 'Spotify Music',
    avatarVariant: 'outlined',
    avatarColor: 'borderLight',
    avatarName: 'SM',
    icon: 'custom-rise-outline',
    subcontent: '#ABLE-PRO-T00233',
    price: '-10,000',
    percentage: '30.6',
    color: 'success'
  },
  {
    title: 'Medium',
    avatarVariant: 'tonal',
    avatarColor: 'primary',
    avatarName: 'MD',
    icon: 'custom-bidirectional',
    subcontent: '06:30 pm',
    price: '-26',
    percentage: '5',
    color: 'warning'
  },
  {
    title: 'Uber',
    avatarVariant: 'outlined',
    avatarColor: 'borderLight',
    avatarName: 'U',
    icon: 'custom-rise-outline',
    subcontent: '08:40 pm',
    price: '+2,10,000',
    percentage: '10.6',
    color: 'success'
  },
  {
    title: 'Apple Inc.',
    avatarVariant: 'outlined',
    avatarColor: 'borderLight',
    avatarName: 'AI',
    icon: 'custom-fall-down-outline',
    subcontent: '#ABLE-PRO-T00232',
    price: '$210,000',
    percentage: '10.6',
    color: 'error'
  },
  {
    title: 'Ola Cabs',
    avatarVariant: 'tonal',
    avatarColor: 'warning',
    avatarName: 'OC',
    icon: 'custom-rise-outline',
    subcontent: '07:40 pm',
    price: '+2,10,000',
    percentage: '10.6',
    color: 'success'
  }
]);
</script>
<template>
  <v-card variant="outlined" class="bg-surface" rounded="lg">
    <v-card-text class="pb-2">
      <div class="d-flex justify-space-between align-center">
        <h5 class="text-h5 mb-0">Transactions</h5>
        <v-menu width="150">
          <template v-slot:activator="{ props }">
            <v-btn icon color="secondary" aria-label="menu" variant="text" rounded="md" size="small" v-bind="props">
              <SvgSprite name="custom-more-outline" style="width: 20px; height: 20px; transform: rotate(90deg)" />
            </v-btn>
          </template>
          <v-list elevation="24" class="pa-3" rounded="md" aria-busy="true" aria-label="menu">
            <v-list-item density="compact" rounded="md" color="secondary" v-for="(item, index) in menulist" :key="index" :value="index">
              <v-list-item-title class="text-h6 text-lightText">{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-card-text>
    <v-tabs v-model="tab" color="primary" class="px-6">
      <v-tab value="one" class="font-weight-medium"> All transaction </v-tab>
      <v-tab value="two" class="font-weight-medium"> Success </v-tab>
      <v-tab value="three" class="font-weight-medium">Pending</v-tab>
    </v-tabs>
    <v-divider></v-divider>
    <v-card-item class="pa-0">
      <v-window v-model="tab">
        <v-window-item value="one">
          <v-list border rounded="lg" class="py-0" aria-busy="true" aria-label="transaction data">
            <v-list-item class="py-4 px-6" v-for="(item, i) in transactionData" :key="i">
              <template v-slot:prepend>
                <v-avatar size="40" v-if="item.avatarVariant == 'tonal'" :color="item.avatarColor" variant="tonal" rounded="md">
                  <span class="text-h5">
                    {{ item.avatarName }}
                  </span>
                </v-avatar>
                <v-avatar v-else size="40" :color="item.avatarColor" variant="outlined" rounded="md">
                  <span class="text-darkText text-h5">
                    {{ item.avatarName }}
                  </span>
                </v-avatar>
              </template>
              <h6 class="text-subtitle-1 mb-0">{{ item.title }}</h6>
              <span class="text-caption text-lightText">{{ item.subcontent }}</span>
              <template v-slot:append>
                <div class="text-right">
                  <h6 class="text-subtitle-1 mb-0">{{ item.price }}</h6>
                  <p :class="'text-body-1 mb-0 text-' + item.color">
                    <SvgSprite
                      :name="item.icon || ''"
                      style="width: 14px; height: 14px; vertical-align: -2px"
                      :style="item.icon == 'custom-bidirectional' ? '' : 'transform:rotate(45deg)'"
                    />
                    {{ item.percentage }}%
                  </p>
                </div>
              </template>
            </v-list-item>
          </v-list>
        </v-window-item>
        <v-window-item value="two">
          <v-list border rounded="lg" class="py-0">
            <v-list-item class="py-4 px-6" v-for="(item, i) in transactionData1" :key="i">
              <template v-slot:prepend>
                <v-avatar size="40" v-if="item.avatarVariant == 'tonal'" :color="item.avatarColor" variant="tonal" rounded="md">
                  <span class="text-h5">
                    {{ item.avatarName }}
                  </span>
                </v-avatar>
                <v-avatar v-else size="40" :color="item.avatarColor" variant="outlined" rounded="md">
                  <span class="text-darkText text-h5">
                    {{ item.avatarName }}
                  </span>
                </v-avatar>
              </template>
              <h6 class="text-subtitle-1 mb-0">{{ item.title }}</h6>
              <span class="text-caption text-lightText">{{ item.subcontent }}</span>
              <template v-slot:append>
                <div class="text-right">
                  <h6 class="text-subtitle-1 mb-0">{{ item.price }}</h6>
                  <p :class="'text-body-1 mb-0 text-' + item.color">
                    <SvgSprite
                      :name="item.icon || ''"
                      style="width: 14px; height: 14px; vertical-align: -2px"
                      :style="item.icon == 'custom-bidirectional' ? '' : 'transform:rotate(45deg)'"
                    />
                    {{ item.percentage }}%
                  </p>
                </div>
              </template>
            </v-list-item>
          </v-list>
        </v-window-item>
        <v-window-item value="three">
          <v-list border rounded="lg" class="py-0">
            <v-list-item class="py-4 px-6" v-for="(item, i) in transactionData2" :key="i">
              <template v-slot:prepend>
                <v-avatar size="40" v-if="item.avatarVariant == 'tonal'" :color="item.avatarColor" variant="tonal" rounded="md">
                  <span class="text-h5">
                    {{ item.avatarName }}
                  </span>
                </v-avatar>
                <v-avatar v-else size="40" :color="item.avatarColor" variant="outlined" rounded="md">
                  <span class="text-darkText text-h5">
                    {{ item.avatarName }}
                  </span>
                </v-avatar>
              </template>
              <h6 class="text-subtitle-1 mb-0">{{ item.title }}</h6>
              <span class="text-caption text-lightText">{{ item.subcontent }}</span>
              <template v-slot:append>
                <div class="text-right">
                  <h6 class="text-subtitle-1 mb-0">{{ item.price }}</h6>
                  <p :class="'text-body-1 mb-0 text-' + item.color">
                    <SvgSprite
                      :name="item.icon || ''"
                      style="width: 14px; height: 14px; vertical-align: -2px"
                      :style="item.icon == 'custom-bidirectional' ? '' : 'transform:rotate(45deg)'"
                    />
                    {{ item.percentage }}%
                  </p>
                </div>
              </template>
            </v-list-item>
          </v-list>
        </v-window-item>
      </v-window>
      <v-divider></v-divider>
      <div class="pa-6">
        <v-row>
          <v-col cols="12" sm="6" class="pb-sm-3 pb-0">
            <v-btn color="secondary" variant="outlined" rounded="md" block>Transaction History</v-btn>
          </v-col>
          <v-col cols="12" sm="6">
            <v-btn color="primary" variant="flat" rounded="md" block>Create new Transaction</v-btn>
          </v-col>
        </v-row>
      </div>
    </v-card-item>
  </v-card>
</template>
