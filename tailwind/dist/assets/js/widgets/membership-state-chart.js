'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var membership_state_chart_option = {
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
            size: '40%'
          },
          track: {
            background: '#4680ff25',
            strokeWidth: '97%',
            margin: 10
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
    var chart = new ApexCharts(document.querySelector('#membership-state-chart'), membership_state_chart_option);
    chart.render();
  }, 500);
});
