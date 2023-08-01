export class ChartDB {
  static earningChart = {
    chart: { type: 'bar', height: 50, sparkline: { enabled: true } },

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
          formatter: function () {
            return '';
          }
        }
      },
      marker: { show: false }
    }
  };
  static pageViewChart = {
    chart: { type: 'bar', height: 50, sparkline: { enabled: true } },
    colors: ['#E58A00'],
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
          formatter: function () {
            return '';
          }
        }
      },
      marker: { show: false }
    }
  };
  static totalTaskChart = {
    chart: { type: 'bar', height: 50, sparkline: { enabled: true } },
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
          formatter: function () {
            return '';
          }
        }
      },
      marker: { show: false }
    }
  };
  static downloadChart = {
    chart: { type: 'bar', height: 50, sparkline: { enabled: true } },
    colors: ['#DC2626'],
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
          formatter: function () {
            return '';
          }
        }
      },
      marker: { show: false }
    }
  };
  static monthlyRevenueChart = {
    chart: {
      fontFamily: 'Inter var, sans-serif',
      type: 'area',
      height: 370,
      toolbar: {
        show: false
      }
    },

    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        type: 'vertical',
        inverseColors: false,
        opacityFrom: 0.2,
        opacityTo: 0
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 3
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        borderRadius: 4
      }
    },
    grid: {
      show: true,
      borderColor: '#F3F5F7',
      strokeDashArray: 2
    },
    series: [
      {
        name: 'Income',
        data: [20, 70, 40, 70, 70, 90, 50, 55, 45, 60, 50, 65]
      },
      {
        name: 'Expense',
        data: [10, 40, 20, 40, 50, 70, 80, 30, 15, 32, 90, 30]
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
  static totalTasksChart = {
    chart: {
      type: 'area',
      height: 60,
      stacked: true,
      sparkline: { enabled: true }
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
    colors: ['#4680FF'],
    stroke: { curve: 'smooth', width: 2 },
    series: [{ data: [5, 25, 3, 10, 4, 50, 0] }]
  };
  static pendingTasksChart = {
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
  static totalIncomeChart = {
    chart: {
      height: 320,
      type: 'donut'
    },
    series: [27, 23, 20, 17],

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
}
