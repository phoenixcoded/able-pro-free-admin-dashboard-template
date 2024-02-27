<script setup lang="ts">
import { ref, computed } from 'vue';
import SvgSprite from '@/components/shared/SvgSprite.vue';
import { getPrimary, getLightBorder, getLightText } from '../../../forms/charts/apex-chart/UpdateColors';

const menulist = ref(['Today', 'Weekly', 'Monthly']);

const chartOptions = computed(() => {
  return {
    chart: {
      type: 'area',
      height: 260,
      fontFamily: `inherit`,
      foreColor: getLightText.value,
      toolbar: false
    },
    colors: [getPrimary.value],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 1
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        type: 'vertical',
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0
      }
    },
    grid: {
      borderColor: getLightBorder.value,
      strokeDashArray: 4
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    legend: {
      show: true
    }
  };
});

const areaChart = {
  series: [
    {
      name: 'Page Views',
      data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65]
    }
  ]
};
</script>
<template>
  <v-card variant="outlined" class="bg-surface" rounded="lg">
    <v-card-text class="pb-2">
      <div class="d-flex justify-space-between align-center">
        <h5 class="text-h5 mb-0">Repeat customer rate</h5>
        <v-menu width="150" location="start">
          <template v-slot:activator="{ props }">
            <v-btn icon color="secondary" aria-label="menu" variant="text" rounded="md" size="small" v-bind="props">
              <SvgSprite name="custom-more-outline" style="width: 20px; height: 20px" />
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
      <div class="text-right">
        <h6 class="text-subtitle-1">
          5.44%
          <v-chip color="success" variant="flat" size="small" rounded="md">+2.6%</v-chip>
        </h6>
      </div>
      <apexchart type="area" height="260" :options="chartOptions" :series="areaChart.series"> </apexchart>
    </v-card-item>
  </v-card>
</template>
