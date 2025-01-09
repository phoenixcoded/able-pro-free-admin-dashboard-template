// angular import
import { Component, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';
import { ChartDB } from 'src/app/fake-data/chartDB';

// third party
import { ApexOptions, ChartComponent, NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, SharedModule, NgApexchartsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export default class DashboardComponent {
  // public props
  chart = viewChild<ChartComponent>('chart');
  earningChart: Partial<ApexOptions>;
  pageViewChart: Partial<ApexOptions>;
  totalTaskChart: Partial<ApexOptions>;
  downloadChart: Partial<ApexOptions>;
  monthlyRevenueChart: Partial<ApexOptions>;
  totalTasksChart: Partial<ApexOptions>;
  pendingTasksChart: Partial<ApexOptions>;
  totalIncomeChart: Partial<ApexOptions>;

  // eslint-disable-next-line
  chartDB: any;

  // graph color change with theme color mode change
  preset = ['#4680FF'];
  monthlyColor = ['#4680FF', '#8996a4'];
  incomeColors = ['#4680FF', '#E58A00', '#2CA87F', '#b5ccff'];

  // constructor
  constructor() {
    this.chartDB = ChartDB;
    const {
      earningChart,
      totalTaskChart,
      downloadChart,
      totalTasksChart,
      pageViewChart,
      monthlyRevenueChart,
      pendingTasksChart,
      totalIncomeChart
    } = this.chartDB;
    this.earningChart = earningChart;
    this.pageViewChart = pageViewChart;
    this.totalTaskChart = totalTaskChart;
    this.downloadChart = downloadChart;
    this.monthlyRevenueChart = monthlyRevenueChart;
    this.totalTasksChart = totalTasksChart;
    this.pendingTasksChart = pendingTasksChart;
    this.totalIncomeChart = totalIncomeChart;
  }

  // public method
  project = [
    {
      title: 'Invoice Generator'
    },
    {
      title: 'Package Upgrades'
    },
    {
      title: 'Figma Auto Layout'
    }
  ];

  List_transaction = [
    {
      icon: 'AI',
      name: 'Apple Inc.',
      time: '#ABLE-PRO-T00232',
      amount: '$210,000',
      amount_position: 'ti ti-arrow-down-left',
      percentage: '10.6%',
      amount_type: 'text-warn-500'
    },
    {
      icon: 'SM',
      tooltip: '10,000 Tracks',
      name: 'Spotify Music',
      time: '#ABLE-PRO-T10232',
      amount: '- 10,000',
      amount_position: 'ti ti-arrow-up-right',
      percentage: '30.6%',
      amount_type: 'text-success-500'
    },
    {
      icon: 'MD',
      bg: 'text-primary-500 bg-primary-50',
      tooltip: '143 Posts',
      name: 'Medium',
      time: '06:30 pm',
      amount: '-26',
      amount_position: 'ti ti-arrows-left-right',
      percentage: '5%',
      amount_type: 'text-warning-500'
    },
    {
      icon: 'U',
      tooltip: '143 Posts',
      name: 'Uber',
      time: '08:40 pm',
      amount: '+210,000',
      amount_position: 'ti ti-arrow-up-right',
      percentage: '10.6%',
      amount_type: 'text-success-500'
    },
    {
      icon: 'OC',
      bg: 'text-warning-500 bg-warning-50',
      tooltip: '143 Posts',
      name: 'Ola Cabs',
      time: '07:40 pm',
      amount: '+210,000',
      amount_position: 'ti ti-arrow-up-right',
      percentage: '10.6%',
      amount_type: 'text-success-500'
    }
  ];

  income_card = [
    {
      background: 'bg-primary-500',
      item: 'Income',
      value: '$23,876',
      number: '+$763,43'
    },
    {
      background: 'bg-warning-500',
      item: 'Rent',
      value: '$23,876',
      number: '+$763,43'
    },
    {
      background: 'bg-success-500',
      item: 'Download',
      value: '$23,876',
      number: '+$763,43'
    },
    {
      background: 'bg-primary-200',
      item: 'Views',
      value: '$23,876',
      number: '+$763,43'
    }
  ];
}
