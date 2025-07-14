'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options5 = {
      chart: {
        type: 'area',
        height: 230,
        toolbar: {
          show: false
        }
      },
      colors: ['#0d6efd'],
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
      stroke: {
        width: 1
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4
        }
      },
      grid: {
        strokeDashArray: 4
      },
      series: [
        {
          data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65]
        }
      ],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#customer-rate-graph'), options5);
    chart.render();
  }, 500);
});
