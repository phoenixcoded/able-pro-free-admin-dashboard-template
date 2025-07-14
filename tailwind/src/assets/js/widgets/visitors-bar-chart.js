'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var visitors_bar_chart_options = {
      chart: {
        type: 'bar',
        height: 220,
        toolbar: {
          show: false
        }
      },
      colors: ['#2ca87f'],
      dataLabels: {
        enabled: false
      },
      grid: {
        strokeDashArray: 4
      },
      yaxis: {
        tickAmount: 3
      },
      states: {
        normal: {
          filter: {
            type: 'lighten',
            value: 0.5
          }
        },
        hover: {
          filter: {
            type: 'lighten',
            value: 0
          }
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 2,
          columnWidth: '50%'
        }
      },
      labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
      series: [
        {
          data: [20, 15, 22, 25, 32, 50]
        }
      ]
    };
    var chart = new ApexCharts(document.querySelector('#visitors-bar-chart'), visitors_bar_chart_options);
    chart.render();
  }, 500);
});
