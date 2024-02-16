'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    floatchart();
  }, 500);
});
function floatchart() {
  (function () {
    var options1 = {
      chart: { type: 'bar', height: 50, sparkline: { enabled: true } },
      colors: ['#4680FF'],
      plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
      series: [
        {
          data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]
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
    var chart = new ApexCharts(document.querySelector('#all-earnings-graph'), options1);
    chart.render();
    var options2 = {
      chart: { type: 'bar', height: 50, sparkline: { enabled: true } },
      colors: ['#E58A00'],
      plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
      series: [
        {
          data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]
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
    var chart = new ApexCharts(document.querySelector('#page-views-graph'), options2);
    chart.render();
    var options3 = {
      chart: { type: 'bar', height: 50, sparkline: { enabled: true } },
      colors: ['#2CA87F'],
      plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
      series: [
        {
          data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]
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
    var chart = new ApexCharts(document.querySelector('#total-task-graph'), options3);
    chart.render();
    var options4 = {
      chart: { type: 'bar', height: 50, sparkline: { enabled: true } },
      colors: ['#DC2626'],
      plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
      series: [
        {
          data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]
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
    var chart = new ApexCharts(document.querySelector('#download-graph'), options4);
    chart.render();
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
    var options6 = {
      chart: {
        type: 'area',
        height: 60,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#4680FF'],
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
      stroke: { curve: 'smooth', width: 2 },
      series: [{ data: [5, 25, 3, 10, 4, 50, 0] }]
    };
    var chart = new ApexCharts(document.querySelector('#total-tasks-graph'), options6);
    chart.render();
    var options7 = {
      chart: {
        type: 'area',
        height: 60,
        stacked: true,
        sparkline: { enabled: true }
      },
      colors: ['#DC2626'],
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
      stroke: { curve: 'smooth', width: 2 },
      series: [{ data: [0, 50, 4, 10, 3, 25, 5] }]
    };
    var chart = new ApexCharts(document.querySelector('#pending-tasks-graph'), options7);
    chart.render();
    var options8 = {
      chart: {
        height: 320,
        type: 'donut'
      },
      series: [27, 23, 20, 17],
      colors: ['#4680FF', '#E58A00', '#2CA87F', '#4680FF'],
      labels: ['Total income', 'Total rent', 'Download', 'Views'],
      fill: {
        opacity: [1, 1, 1, 0.3]
      },
      legend: {
        show: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            labels: {
              show: true,
              name: {
                show: true
              },
              value: {
                show: true
              }
            }
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      responsive: [
        {
          breakpoint: 575,
          options: {
            chart: {
              height: 250
            },
            plotOptions: {
              pie: {
                donut: {
                  size: '65%',
                  labels: {
                    show: false
                  }
                }
              }
            }
          }
        }
      ]
    };
    var chart = new ApexCharts(document.querySelector('#total-income-graph'), options8);
    chart.render();
    var options9 = {
      chart: { type: 'bar', height: 80, sparkline: { enabled: true } },
      colors: ['#4680FF'],
      plotOptions: { bar: { borderRadius: 4, columnWidth: '80%' } },
      series: [
        {
          data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]
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
    var chart = new ApexCharts(document.querySelector('#new-orders-graph'), options9);
    chart.render();
    var options10 = {
      chart: { type: 'area', height: 80, sparkline: { enabled: true } },
      colors: ['#2CA87F'],
      stroke: {
        width: 1
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
          data: [1, 1, 60, 1, 1, 50, 1, 1, 40, 1, 1, 25, 0]
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
    var chart = new ApexCharts(document.querySelector('#new-users-graph'), options10);
    chart.render();
    var options11 = {
      series: [
        {
          data: [
            {
              x: '',
              y: [1, 6]
            },
            {
              x: '',
              y: [3, 7]
            },
            {
              x: '',
              y: [4, 8]
            },
            {
              x: '',
              y: [5, 9]
            },
            {
              x: '',
              y: [4, 8]
            },
            {
              x: '',
              y: [4, 7]
            },
            {
              x: '',
              y: [2, 5]
            }
          ]
        }
      ],
      chart: {
        type: 'rangeBar',
        height: 80,
        sparkline: { enabled: true },
        toolbar: {
          show: false
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
        max: 10
      },
      grid: {
        show: false,
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      xaxis: {
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      }
    };
    var chart = new ApexCharts(document.querySelector('#visitors-graph'), options11);
    chart.render();
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
    var options14 = {
      chart: { type: 'bar', height: 80, sparkline: { enabled: true } },
      colors: ['#2CA87F'],
      plotOptions: { bar: { columnWidth: '80%' } },
      series: [
        {
          data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25]
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
    var chart = new ApexCharts(document.querySelector('#income-graph'), options14);
    chart.render();
    var options15 = {
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
    var chart = new ApexCharts(document.querySelector('#languages-graph'), options15);
    chart.render();
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
    var options18 = {
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
            background: '#DC262650',
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
              color: '#DC2626',
              fontSize: '20px',
              fontWeight: '700',
              show: true
            }
          }
        }
      },
      colors: ['#DC2626'],
      fill: {
        type: 'solid'
      },
      stroke: {
        lineCap: 'round'
      }
    };
    var chart = new ApexCharts(document.querySelector('#total-earning-graph-2'), options18);
    chart.render();
    var options19 = {
      series: [
        {
          name: 'Deals',
          data: [44, 55, 41, 67, 52, 53, 13, 23, 20, 8, 13, 27]
        },
        {
          name: 'Income Report',
          data: [13, 23, 20, 8, 13, 27, 21, 7, 25, 13, 22, 8]
        },
        {
          name: 'Customer',
          data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14]
        },
        {
          name: 'Profits',
          data: [21, 7, 25, 13, 22, 3, 44, 55, 41, 67, 22, 12]
        }
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: false
        }
      },
      colors: ['#4680FF', '#4680FF', '#4680FF', '#E58A00'],
      fill: {
        opacity: [1, 0.7, 0.4, 0.3]
      },
      grid: {
        strokeDashArray: 4
      },
      dataLabels: {
        enabled: false
      },
      // responsive: [{
      //   breakpoint: 480,
      //   options: {

      //   }
      // }],
      plotOptions: {
        bar: {
          horizontal: false
          // dataLabels: {
          //   total: {
          //     enabled: true,
          //     style: {
          //       fontSize: '13px',
          //       fontWeight: 900
          //     }
          //   }
          // }
        }
      },
      xaxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
      },
      legend: {
        show: false
      }
    };
    var chart = new ApexCharts(document.querySelector('#monthly-report-graph'), options19);
    chart.render();
    var options20 = {
      chart: {
        type: 'bar',
        height: 430,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '40%',
          borderRadius: 4
        }
      },
      stroke: {
        show: true,
        width: 8,
        colors: ['transparent']
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        show: true,
        fontFamily: `'Public Sans', sans-serif`,
        offsetX: 10,
        offsetY: 10,
        labels: {
          useSeriesColors: false
        },
        markers: {
          width: 10,
          height: 10,
          radius: '50%',
          offsexX: 2,
          offsexY: 2
        },
        itemMargin: {
          horizontal: 15,
          vertical: 5
        }
      },
      colors: ['#E58A00', '#4680FF'],
      series: [
        {
          name: 'Net Profit',
          data: [180, 90, 135, 114, 120, 145]
        },
        {
          name: 'Revenue',
          data: [120, 45, 78, 150, 168, 99]
        }
      ],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      }
    };
    var chart = new ApexCharts(document.querySelector('#sales-report-chart'), options20);
    chart.render();
    var options21 = {
      chart: {
        type: 'bar',
        height: 250,
        stacked: true,
        toolbar: {
          show: false
        }
      },
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'left',
        offsetX: 10,
        markers: {
          width: 8,
          height: 8,
          radius: '50%'
        }
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        show: false
      },
      stroke: {
        colors: ['transparent'],
        width: 1
      },
      colors: ['#0F172A', '#4680FF', '#4680FF'],
      fill: {
        opacity: [1, 0.6, 1]
      },
      series: [
        {
          name: 'Direct',
          data: [21, 17, 15, 13, 15, 13, 16, 13, 8, 14, 11, 9, 7, 5, 3, 3, 7]
        },
        {
          name: 'Referral',
          data: [28, 30, 20, 26, 18, 27, 22, 28, 20, 21, 15, 14, 12, 10, 8, 18, 16]
        },
        {
          name: 'Social',
          data: [50, 51, 60, 54, 53, 48, 55, 40, 44, 42, 44, 44, 42, 40, 42, 32, 16]
        }
      ],
      xaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector('#acquisition-chart'), options21);
    chart.render();
  })();
}
