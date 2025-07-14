'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options21 = {
      chart: {
        type: 'bar',
        height: 250,
        stacked: true,
        toolbar: {
          show: false
        }
      },
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'left',
        offsetX: 10,
        markers: {
          width: 8,
          height: 8,
          radius: '50%'
        }
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        show: false
      },
      stroke: {
        colors: ['transparent'],
        width: 1
      },
      colors: ['#0F172A', '#4680FF', '#4680FF'],
      fill: {
        opacity: [1, 0.6, 1]
      },
      series: [
        {
          name: 'Direct',
          data: [21, 17, 15, 13, 15, 13, 16, 13, 8, 14, 11, 9, 7, 5, 3, 3, 7]
        },
        {
          name: 'Referral',
          data: [28, 30, 20, 26, 18, 27, 22, 28, 20, 21, 15, 14, 12, 10, 8, 18, 16]
        },
        {
          name: 'Social',
          data: [50, 51, 60, 54, 53, 48, 55, 40, 44, 42, 44, 44, 42, 40, 42, 32, 16]
        }
      ],
      xaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#acquisition-chart'), options21);
    chart.render();
  }, 500);
});
