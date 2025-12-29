import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// third-party
import ReactApexChart from 'react-apexcharts';

// project-imports
import useConfig from 'hooks/useConfig';

// chart options
const areaChartOptions = {
  chart: {
    id: 'new-stack-chart',
    type: 'bar',
    background: 'transparent',
    sparkline: { enabled: true },
    toolbar: { show: false },
    offsetX: -2
  },
  dataLabels: { enabled: false },
  plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
  xaxis: { crosshairs: { width: 1 } },
  tooltip: { fixed: { enabled: false }, x: { show: false } }
};

// ==============================|| CHART - ECOMMERCE DATA CHART ||============================== //

export default function EcommerceDataChart({ color, height }) {
  const {
    state: { fontFamily }
  } = useConfig();

  const [options, setOptions] = useState(areaChartOptions);
  const [series] = useState([{ name: 'Users', data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25] }]);

  useEffect(() => {
    setOptions({
      ...areaChartOptions,
      chart: { ...areaChartOptions.chart, fontFamily: fontFamily },
      colors: [color],
      theme: { mode: 'light' }
    });
  }, [color, fontFamily]);

  return <ReactApexChart options={options} series={series} type="bar" height={height ? height : 50} />;
}

EcommerceDataChart.propTypes = { color: PropTypes.string, height: PropTypes.number };
