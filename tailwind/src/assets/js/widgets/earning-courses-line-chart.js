'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var earning_courses_line_chart_options = {
      chart: {
        type: 'line',
        height: 230,
        toolbar: {
          show: false
        }
      },
      colors: ['#e58a00', '#4680ff'],
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 1,
        colors: ['#fff', '#fff', '#fff'],
        strokeColors: ['#e58a00', '#4680ff'],
        strokeWidth: 1,
        shape: 'circle',
        hover: {
          size: 4
        }
      },
      stroke: {
        width: 3
      },
      grid: {
        strokeDashArray: 4
      },
      series: [
        {
          name: 'Last Month',
          data: [200, 320, 275, 400, 300, 440]
        }
      ],
      xaxis: {
        labels: {
          hideOverlappingLabels: true
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#earning-courses-line-chart'), earning_courses_line_chart_options);
    chart.render();
  }, 500);
});
