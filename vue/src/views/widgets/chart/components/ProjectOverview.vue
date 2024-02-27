<script setup lang="ts">
import { ref, computed } from 'vue';
import SvgSprite from '@/components/shared/SvgSprite.vue';
import { useTheme } from 'vuetify';

const theme = useTheme();
const errorColor = theme.current.value.colors.error;
import { getPrimary, getLightText } from '../../../forms/charts/apex-chart/UpdateColors';

const menulist = ref(['Today', 'Weekly', 'Monthly']);

const chartOptions = computed(() => {
  return {
    chart: {
      type: 'area',
      height: 60,
      fontFamily: `inherit`,
      foreColor: getLightText.value,
      toolbar: false,
      stacked: true,
      sparkline: {
        enabled: true
      },
      offsetX: -20
    },
    colors: [getPrimary.value],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dataLabels: {
      enabled: false
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
    stroke: { curve: 'smooth', width: 2 },
    grid: {
      show: false
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    legend: {
      show: true
    },
    tooltip: {
      x: {
        show: false
      }
    }
  };
});

const areaChart = {
  series: [
    {
      name: 'Orders',
      data: [5, 25, 3, 10, 4, 50, 0]
    }
  ]
};

const chartOptions1 = computed(() => {
  return {
    chart: {
      type: 'area',
      height: 60,
      fontFamily: `inherit`,
      foreColor: getLightText.value,
      toolbar: false,
      stacked: true,
      sparkline: {
        enabled: true
      },
      offsetX: -20
    },
    colors: [errorColor],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dataLabels: {
      enabled: false
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
    stroke: { curve: 'smooth', width: 2 },
    grid: {
      show: false
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    legend: {
      show: true
    },
    tooltip: {
      x: {
        show: false
      }
    }
  };
});

const areaChart1 = {
  series: [
    {
      name: 'Orders',
      data: [0, 50, 4, 10, 3, 25, 5]
    }
  ]
};
</script>
<template>
  <v-card variant="outlined" class="bg-surface" rounded="lg">
    <v-card-text>
      <div class="d-flex justify-space-between align-center">
        <h5 class="text-h5 mb-0">Project overview</h5>
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
      <v-row>
        <v-col cols="12" md="4" sm="6">
          <v-row class="align-end">
            <v-col cols="6">
              <p class="text-body-1 mb-0">Total Tasks</p>
              <h5 class="text-h5 mb-0">34,686</h5>
            </v-col>
            <v-col cols="6">
              <apexchart type="area" height="60" :options="chartOptions" :series="areaChart.series"> </apexchart>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <v-row class="align-end">
            <v-col cols="6">
              <p class="text-body-1 mb-0">Pending Tasks</p>
              <h5 class="text-h5 mb-0">3,6786</h5>
            </v-col>
            <v-col cols="6">
              <apexchart type="area" height="60" :options="chartOptions1" :series="areaChart1.series"> </apexchart>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn color="primary" variant="flat" block rounded="md" size="large">
            <template v-slot:prepend>
              <SvgSprite name="custom-plus" style="width: 20px; height: 20px" />
            </template>
            Add Project
          </v-btn>
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>
</template>
