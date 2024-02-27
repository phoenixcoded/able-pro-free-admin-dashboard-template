<script setup lang="ts">
import { ref, computed, shallowRef } from 'vue';
import SvgSprite from '@/components/shared/SvgSprite.vue';
import { useTheme } from 'vuetify';
import { getPrimary, getDarkText } from '../../../forms/charts/apex-chart/UpdateColors';

const theme = useTheme();
const warningColor = theme.current.value.colors.warning;
const successColor = theme.current.value.colors.success;

const menulist = ref(['Today', 'Weekly', 'Monthly']);

const overviewList = shallowRef([
  {
    color: 'primary',
    name: 'Item01',
    subcontent: '$23,876',
    price: '$76,343'
  },
  {
    color: 'primary200',
    name: 'Item02',
    subcontent: '$23,876',
    price: '$76,343'
  },
  {
    color: 'warning',
    name: 'Item03',
    subcontent: '$23,876',
    price: '$76,343'
  },
  {
    color: 'success',
    name: 'Item04',
    subcontent: '$23,876',
    price: '$76,343'
  }
]);

const chartOptions = computed(() => {
  return {
    chart: {
      type: 'donut',
      height: 300,
      width: 300,
      fontFamily: `inherit`,
      foreColor: getDarkText.value
    },
    labels: ['Total income', 'Total rent', 'Download', 'Views'],
    colors: [getPrimary.value, warningColor, successColor, getPrimary.value],
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: [1, 1, 1, 0.3]
    },
    legend: {
      show: false
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            width: 250,
            height: 250
          },
          legend: {
            show: false
          }
        }
      },
      {
        breakpoint: 960,
        options: {
          legend: {
            show: false
          }
        }
      },
      {
        breakpoint: 1280,
        options: {
          legend: {
            show: false
          }
        }
      },
      {
        breakpoint: 1550,
        chart: {
          width: 300,
          height: 300
        },
        options: {
          legend: {
            show: false
          }
        }
      }
    ]
  };
});
const pieChart = {
  series: [31, 26, 23, 20]
};
</script>
<template>
  <v-card variant="outlined" class="bg-surface" rounded="lg">
    <v-card-text>
      <div class="d-flex justify-space-between align-center">
        <h5 class="text-h5 mb-0">Total Income</h5>
        <v-menu width="150" location="start">
          <template v-slot:activator="{ props }">
            <v-btn icon color="secondary" aria-label="menu" variant="text" rounded="md" size="small" v-bind="props">
              <SvgSprite name="custom-more-outline" style="width: 20px; height: 20px; transform: rotate(90deg)" />
            </v-btn>
          </template>
          <v-list elevation="24" class="pa-3" rounded="md" aria-label="menu" aria-busy="true">
            <v-list-item density="compact" rounded="md" color="secondary" v-for="(item, index) in menulist" :key="index" :value="index">
              <v-list-item-title class="text-h6 text-lightText">{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-card-text>
    <v-card-item class="pt-0">
      <div class="apexchart-center">
        <apexchart type="donut" height="300" :options="chartOptions" :series="pieChart.series"> </apexchart>
      </div>
      <v-row class="mt-2">
        <v-col cols="12" sm="6" v-for="(item, index) in overviewList" :key="index">
          <v-sheet rounded="lg" class="pa-4" color="containerBg">
            <p class="text-body-1 mb-0">
              <v-avatar size="8" :color="item.color" variant="flat" class="mr-2"> </v-avatar>
              {{ item.name }}
            </p>
            <h6 class="text-subtitle-1 mb-0">
              {{ item.subcontent }}
              <span class="text-lightText text-caption" style="font-weight: 600">
                <SvgSprite name="custom-rise-outline" style="width: 14px; height: 14px" />
                {{ item.price }}
              </span>
            </h6>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>
</template>
