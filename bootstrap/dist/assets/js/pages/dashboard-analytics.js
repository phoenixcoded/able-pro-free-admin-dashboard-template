'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    floatchart();
  }, 500);
});

function floatchart() {
  (function () {
    var options1 = {
      chart: { type: 'bar', height: 80, sparkline: { enabled: true } },
      colors: ['#4680FF'],
      plotOptions: { bar: { columnWidth: '80%' } },
      series: [
        {
          data: [
            10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25
          ]
        }
      ],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart = new ApexCharts(document.querySelector('#new-orders-graph'), options1);
    chart.render();
    var options2 = {
      chart: { type: 'area', height: 80, sparkline: { enabled: true } },
      colors: ['#2CA87F'],
      stroke: {
        curve: 'straight',
        width: 2
      },
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
      series: [
        {
          data: [
            1, 1, 60, 1, 1, 50, 1, 1, 40, 1, 1, 25, 0
          ]
        }
      ],
      tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart = new ApexCharts(document.querySelector('#new-users-graph'), options2);
    chart.render();
    var options3 = {
      series: [{
        data: [{
          x: '',
          y: [1, 6]
        }, {
          x: '',
          y: [3, 7]
        }, {
          x: '',
          y: [4, 8]
        }, {
          x: '',
          y: [5, 9]
        }, {
          x: '',
          y: [4, 8]
        }, {
          x: '',
          y: [4, 7]
        }, {
          x: '',
          y: [2, 5]
        }]
      }],
      chart: {
        type: 'rangeBar',
        height: 80,
        sparkline: { enabled: true },
        toolbar: {
          show: false,
        }
      },
      colors: ['#E58A00'],
      plotOptions: {
        bar: {
          columnWidth: '30%',
          borderRadius: 5,
          horizontal: false
        }
      },
      yaxis: {
        tickAmount: 2,
        min: 0,
        max: 10,
      },
      grid: {
        show: false,
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        }
      },
      dataLabels: {
        enabled: false
      }
    };
    var chart = new ApexCharts(document.querySelector('#visitors-graph'), options3);
    chart.render();
    var options4 = {
      chart: {
        height: 250,
        type: 'bar',
        toolbar:{
          show: false,
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 4,
          borderRadiusApplication: 'end',
        }
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left', 
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
        opacity: [1 , 0.5]
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
    var chart = new ApexCharts(document.querySelector("#overview-chart-1"), options4);
    chart.render();
    var chart1 = new ApexCharts(document.querySelector("#overview-chart-3"), options4);
    chart1.render();
    var options5 = {
      chart: {
        height: 250,
        type: 'bar',
        toolbar:{
          show: false,
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 4,
          borderRadiusApplication: 'end',
        }
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left', 
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
        opacity: [1 , 0.5]
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
    var chart = new ApexCharts(document.querySelector("#overview-chart-2"), options5);
    chart.render();
    var chart1 = new ApexCharts(document.querySelector("#overview-chart-4"), options5);
    chart1.render();
    var options6 = {
      chart: { type: 'bar', height: 80, sparkline: { enabled: true } },
      colors: ['#2CA87F'],
      plotOptions: { bar: { columnWidth: '80%' } },
      series: [
        {
          data: [
            10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25
          ]
        }
      ],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart = new ApexCharts(document.querySelector('#income-graph'), options6);
    chart.render();
    var options7 = {
      chart: { type: 'area', height: 130, sparkline: { enabled: true } },
      colors: ['#1890ff'],
      plotOptions: { bar: { columnWidth: '80%' } },
      series: [
        {
          data: [100, 140, 100, 250, 115, 125, 90, 100, 140, 100, 230, 115, 215, 90, 190, 100, 120, 180]
        }
      ],
      xaxis: { crosshairs: { width: 1 } },
      stroke: {
        // curve: 'straight',
        width: 1.5
      },
      tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        y: {
          title: {
            formatter: function (seriesName) {
              return '';
            }
          }
        },
        marker: { show: false }
      }
    };
    var chart = new ApexCharts(document.querySelector("#languages-graph"), options7);
    chart.render();
    var options8 = {
      chart: {
        height: 350,
        type: 'pie'
      },
      labels: ['Components', 'Widgets', 'Pages', 'Forms', 'Other', 'Apps'],
      series: [40, 20, 10, 15, 5, 10],
      colors: ['#4680FF', '#4680FF', '#212529', '#212529', '#212529', '#212529'],
      fill:{
        opacity : [1, 0.6, 0.4, 0.6, 0.8, 1]
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
              height: 250,
            },
            dataLabels: {
              enabled: false,
            }
          }
        }
      ]
    };
    var chart = new ApexCharts(document.querySelector('#overview-product-graph'), options8);
    chart.render();
    var options9 = {
      series: [30],
      chart: {
        height: 150,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '60%',
            background: 'transparent',
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
          },
          track: {
            background: '#4680FF50',
            strokeWidth: '50%',
          },

          dataLabels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              offsetY: 7,
              color: '#4680FF',
              fontSize: '20px',
              fontWeight: '700',
              show: true,
            }
          }
        }
      },
      colors: ['#4680FF'],
      fill: {
        type: 'solid',
      },
      stroke: {
        lineCap: 'round'
      },
    };
    var chart = new ApexCharts(document.querySelector("#total-earning-graph-1"), options9);
    chart.render();
    var options10 = {
      series: [30],
      chart: {
        height: 150,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '60%',
            background: 'transparent',
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
          },
          track: {
            background: '#DC262650',
            strokeWidth: '50%',
          },

          dataLabels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              offsetY: 7,
              color: '#DC2626',
              fontSize: '20px',
              fontWeight: '700',
              show: true,
            }
          }
        }
      },
      colors: ['#DC2626'],
      fill: {
        type: 'solid',
      },
      stroke: {
        lineCap: 'round'
      },
    };
    var chart = new ApexCharts(document.querySelector("#total-earning-graph-2"), options10);
    chart.render();
  })();
}
