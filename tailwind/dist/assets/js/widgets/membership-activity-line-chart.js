'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var activity_line_chart_options = {
      chart: {
        type: 'line',
        height: 150,
        toolbar: {
          show: false
        }
      },
      colors: ['#2ca87f', '#2ca87f'],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        position: 'top'
      },
      markers: {
        size: 1,
        colors: ['#fff', '#fff'],
        strokeColors: ['#2ca87f', '#2ca87f'],
        strokeWidth: 1,
        shape: 'circle',
        hover: {
          size: 4
        }
      },
      fill: {
        opacity: [1, 0.3]
      },
      stroke: {
        width: 3,
        curve: 'smooth'
      },
      grid: {
        show: false
      },
      series: [
        {
          name: 'Active',
          data: [20, 90, 65, 85, 20, 80, 30]
        },
        {
          name: 'Inactive',
          data: [70, 30, 40, 15, 60, 40, 95]
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
    var chart = new ApexCharts(document.querySelector('#activity-line-chart'), activity_line_chart_options);
    chart.render();
  }, 500);
});
