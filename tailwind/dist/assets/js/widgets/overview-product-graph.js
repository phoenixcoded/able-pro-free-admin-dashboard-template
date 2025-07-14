'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options16 = {
      chart: {
        height: 350,
        type: 'pie'
      },
      labels: ['Components', 'Widgets', 'Pages', 'Forms', 'Other', 'Apps'],
      series: [40, 20, 10, 15, 5, 10],
      colors: ['#4680FF', '#4680FF', '#212529', '#212529', '#212529', '#212529'],
      fill: {
        opacity: [1, 0.6, 0.4, 0.6, 0.8, 1]
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: true,
        dropShadow: {
          enabled: false
        }
      },
      responsive: [
        {
          breakpoint: 575,
          options: {
            chart: {
              height: 250
            },
            dataLabels: {
              enabled: false
            }
          }
        }
      ]
    };
    var chart = new ApexCharts(document.querySelector('#overview-product-graph'), options16);
    chart.render();
  }, 500);
});
