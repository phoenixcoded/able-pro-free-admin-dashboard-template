'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options15 = {
      chart: { type: 'area', height: 130, sparkline: { enabled: true } },
      colors: ['#1890ff'],
      plotOptions: { bar: { columnWidth: '80%' } },
      series: [
        {
          data: [100, 140, 100, 250, 115, 125, 90, 100, 140, 100, 230, 115, 215, 90, 190, 100, 120, 180]
        }
      ],
      xaxis: { crosshairs: { width: 1 } },
      stroke: {
        // curve: 'straight',
        width: 1.5
      },
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
    var chart = new ApexCharts(document.querySelector('#languages-graph'), options15);
    chart.render();
  }, 500);
});
