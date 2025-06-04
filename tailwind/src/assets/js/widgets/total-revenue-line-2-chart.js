'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var total_revenue_line_2_chart_options = {
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
      colors: ['#dc2626'],
      stroke: {
        curve: 'straight',
        lineCap: 'round',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [20, 10, 25, 18, 18, 10, 12]
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
    var chart = new ApexCharts(document.querySelector('#total-revenue-line-2-chart'), total_revenue_line_2_chart_options);
    chart.render();
  }, 500);
});
