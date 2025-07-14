'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var invites_goal_chart_option = {
      series: [76],
      chart: {
        type: 'radialBar',
        offsetY: -20,
        sparkline: {
          enabled: true
        }
      },
      colors: ['#4680ff'],
      plotOptions: {
        radialBar: {
          startAngle: -95,
          endAngle: 95,
          hollow: {
            margin: 15,
            size: '50%'
          },
          track: {
            background: '#eaeaea',
            strokeWidth: '97%',
            margin: 20
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: 0,
              fontSize: '20px'
            }
          }
        }
      },
      grid: {
        padding: {
          top: 10
        }
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Average Results']
    };
    var chart = new ApexCharts(document.querySelector('#invites-goal-chart'), invites_goal_chart_option);
    chart.render();
  }, 500);
});
