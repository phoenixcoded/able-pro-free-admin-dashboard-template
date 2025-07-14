'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options10 = {
      chart: { type: 'area', height: 80, sparkline: { enabled: true } },
      colors: ['#2CA87F'],
      stroke: {
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
      dataLabels: {
        enabled: false
      },
      series: [
        {
          data: [1, 1, 60, 1, 1, 50, 1, 1, 40, 1, 1, 25, 0]
        }
      ],
      tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart = new ApexCharts(document.querySelector('#new-users-graph'), options10);
    chart.render();
  }, 500);
});
