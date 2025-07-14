'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options19 = {
      series: [
        {
          name: 'Deals',
          data: [44, 55, 41, 67, 52, 53, 13, 23, 20, 8, 13, 27]
        },
        {
          name: 'Income Report',
          data: [13, 23, 20, 8, 13, 27, 21, 7, 25, 13, 22, 8]
        },
        {
          name: 'Customer',
          data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14]
        },
        {
          name: 'Profits',
          data: [21, 7, 25, 13, 22, 3, 44, 55, 41, 67, 22, 12]
        }
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: false
        }
      },
      colors: ['#4680FF', '#4680FF', '#4680FF', '#E58A00'],
      fill: {
        opacity: [1, 0.7, 0.4, 0.3]
      },
      grid: {
        strokeDashArray: 4
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
      },
      legend: {
        show: false
      }
    };
    var chart = new ApexCharts(document.querySelector('#monthly-report-graph'), options19);
    chart.render();
  }, 500);
});
