'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options3 = {
      chart: { type: 'bar', height: 50, sparkline: { enabled: true } },
      colors: ['#2CA87F'],
      plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
      series: [
        {
          data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]
        }
      ],
      xaxis: { crosshairs: { width: 1 } },
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
    var chart = new ApexCharts(document.querySelector('#total-task-graph'), options3);
    chart.render();
  }, 500);
});
