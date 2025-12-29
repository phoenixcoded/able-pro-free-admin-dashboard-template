import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// project-imports
import useConfig from 'hooks/useConfig';

// chart options
const areaChartOptions = {
  chart: {
    type: 'area',
    background: 'transparent',
    toolbar: { show: false }
  },
  xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] },
  dataLabels: { enabled: false },
  stroke: { width: 1 },
  plotOptions: { bar: { columnWidth: '45%', borderRadius: 4 } },
  grid: { strokeDashArray: 4 }
};

// ==============================|| CHART - REPEAT CUSTOMER CHART ||============================== //

export default function RepeatCustomerChart() {
  const theme = useTheme();

  const {
    state: { fontFamily }
  } = useConfig();

  const textSecondary = theme.vars.palette.text.secondary;
  const line = theme.vars.palette.divider;
  const primaryMain = theme.vars.palette.primary.main;
  const primary700 = theme.vars.palette.primary[700];

  const backgroundPaper = theme.vars.palette.background.paper;

  const [options, setOptions] = useState(areaChartOptions);
  const [series] = useState([{ name: 'Page Views', data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65] }]);

  useEffect(() => {
    setOptions({
      ...areaChartOptions,
      chart: { ...areaChartOptions.chart, fontFamily: fontFamily },
      colors: [primaryMain, primary700],
      fill: {
        gradient: {
          colorStops: [
            [
              { offset: 0, color: primaryMain, opacity: 0.2 },
              { offset: 100, color: backgroundPaper, opacity: 0.1 }
            ]
          ]
        }
      },
      xaxis: {
        ...areaChartOptions.xaxis,
        labels: { ...areaChartOptions.xaxis, style: { colors: textSecondary } },
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: { labels: { style: { colors: [textSecondary] } } },
      grid: { ...areaChartOptions.grid, borderColor: line },
      theme: { mode: 'light' }
    });
  }, [backgroundPaper, fontFamily, primaryMain, primary700, textSecondary, line]);

  return <ReactApexChart options={options} series={series} type="area" height={284} />;
}
