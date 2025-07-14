'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var options12 = {
      chart: {
        height: 250,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 4,
          borderRadiusApplication: 'end'
        }
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left'
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#4680FF', '#4680FF'],
      stroke: {
        show: true,
        width: 3,
        colors: ['transparent']
      },
      fill: {
        colors: ['#4680FF', '#4680FF'],
        opacity: [1, 0.5]
      },
      grid: {
        strokeDashArray: 4
      },
      series: [
        {
          name: 'Net Profit',
          data: [76, 85, 101, 98, 87, 105, 91]
        },
        {
          name: 'Revenue',
          data: [44, 55, 57, 56, 61, 58, 63]
        }
      ],
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands';
          }
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#overview-chart-1'), options12);
    chart.render();
    var chart1 = new ApexCharts(document.querySelector('#overview-chart-3'), options12);
    chart1.render();
    var options13 = {
      chart: {
        height: 250,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 4,
          borderRadiusApplication: 'end'
        }
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left'
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#4680FF', '#4680FF'],
      stroke: {
        show: true,
        width: 3,
        colors: ['transparent']
      },
      fill: {
        colors: ['#4680FF', '#4680FF'],
        opacity: [1, 0.5]
      },
      grid: {
        strokeDashArray: 4
      },
      series: [
        {
          name: 'Net Profit',
          data: [98, 87, 105, 91, 76, 85, 101]
        },
        {
          name: 'Revenue',
          data: [56, 61, 58, 63, 44, 55, 57]
        }
      ],
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands';
          }
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#overview-chart-2'), options13);
    chart.render();
    var chart1 = new ApexCharts(document.querySelector('#overview-chart-4'), options13);
    chart1.render();
  }, 500);
});
