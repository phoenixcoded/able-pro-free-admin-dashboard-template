'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var student_states_chart_options = {
      chart: {
        height: 250,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%'
          }
        }
      },
      labels: ['Total Signups', 'Active Student'],
      series: [76.7, 30],
      legend: {
        show: true,
        position: 'bottom'
      },
      fill: {
        opacity: [1, 0.5]
      },
      colors: ['#4680ff', '#4680ff']
    };
    var chart = new ApexCharts(document.querySelector('#student-states-chart'), student_states_chart_options);
    chart.render();
  }, 500);
});
