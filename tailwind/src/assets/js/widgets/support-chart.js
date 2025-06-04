'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options1 = {
      chart: {
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#3ec9d6'],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [
        {
          name: 'series1',
          data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
        }
      ],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    new ApexCharts(document.querySelector('#support-chart'), options1).render();
  }, 500);
});
