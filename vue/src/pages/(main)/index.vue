<script setup lang="ts">
// imported components
import WelcomeBanner from '@/components/dashboards/default/ProjectCard.vue';
import ChartCards from '@/components/widgets/chart/ChartCards.vue';
import RepeatCustomer from '@/components/widgets/chart/RepeatCustomer.vue';
import ProjectOverview from '@/components/widgets/chart/ProjectOverview.vue';
import UserCard from '@/components/widgets/statistics/UserCard.vue';
import ProjectCard from '@/components/dashboards/default/ProjectCard.vue';
import TransactionCard from '@/components/widgets/data/TransactionCard.vue';
import TotalIncome from '@/components/widgets/chart/TotalIncome.vue';
</script>

<template>
  <!-- -------------------------------------------------------------------- -->
  <!-- welcome banner -->
  <!-- -------------------------------------------------------------------- -->
  <v-row>
    <v-col cols="12">
      <WelcomeBanner />
    </v-col>
    <v-col cols="12">
      <!-- -------------------------------------------------------------------- -->
      <!-- Chart widgets -->
      <!-- -------------------------------------------------------------------- -->
      <ChartCards />
    </v-col>
    <v-col cols="12" xl="9" md="8">
      <v-row>
        <!-- -------------------------------------------------------------------- -->
        <!-- Repeat customer -->
        <!-- -------------------------------------------------------------------- -->
        <v-col cols="12">
          <RepeatCustomer />
        </v-col>

        <!-- -------------------------------------------------------------------- -->
        <!-- Project overview -->
        <!-- -------------------------------------------------------------------- -->
        <v-col cols="12">
          <ProjectOverview />
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" xl="3" md="4">
      <v-row>
        <!-- -------------------------------------------------------------------- -->
        <!-- Project -->
        <!-- -------------------------------------------------------------------- -->
        <v-col cols="12">
          <ProjectCard />
        </v-col>

        <!-- -------------------------------------------------------------------- -->
        <!-- User card -->
        <!-- -------------------------------------------------------------------- -->
        <v-col cols="12">
          <UserCard />
        </v-col>
      </v-row>
    </v-col>
    <!-- -------------------------------------------------------------------- -->
    <!-- Transactions -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" md="6">
      <TransactionCard />
    </v-col>

    <!-- -------------------------------------------------------------------- -->
    <!-- Total income -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" md="6">
      <TotalIncome />
    </v-col>
  </v-row>
</template>
