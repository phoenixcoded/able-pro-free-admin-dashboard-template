'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var total_line_1_chart_options = {
      chart: {
        type: 'line',
        height: 60,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#2ca87f'],
      stroke: {
        curve: 'straight',
        lineCap: 'round',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [20, 10, 18, 12, 25, 10, 20]
        }
      ],
      yaxis: {
        min: 0,
        max: 30
      },
      tooltip: {
        theme: 'dark',
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
    var chart = new ApexCharts(document.querySelector('#total-line-1-chart'), total_line_1_chart_options);
    chart.render();
  }, 500);
});
