'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options17 = {
      series: [30],
      chart: {
        height: 150,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '60%',
            background: 'transparent',
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front'
          },
          track: {
            background: '#4680FF50',
            strokeWidth: '50%'
          },

          dataLabels: {
            show: true,
            name: {
              show: false
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              offsetY: 7,
              color: '#4680FF',
              fontSize: '20px',
              fontWeight: '700',
              show: true
            }
          }
        }
      },
      colors: ['#4680FF'],
      fill: {
        type: 'solid'
      },
      stroke: {
        lineCap: 'round'
      }
    };
    var chart = new ApexCharts(document.querySelector('#total-earning-graph-1'), options17);
    chart.render();
  }, 500);
});
