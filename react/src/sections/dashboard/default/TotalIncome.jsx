import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import ListItemButton from '@mui/material/ListItemButton';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// third-party
import ReactApexChart from 'react-apexcharts';

// project-imports
import Dot from 'components/@extended/Dot';
import IconButton from 'components/@extended/IconButton';
import MoreIcon from 'components/@extended/MoreIcon';
import MainCard from 'components/MainCard';
import { GRID_COMMON_SPACING } from 'config';
import useConfig from 'hooks/useConfig';

// assets
import { ArrowDown, ArrowUp } from 'iconsax-reactjs';

// chart options
const pieChartOptions = {
  chart: { type: 'donut', background: 'transparent', height: 320 },
  labels: ['Total income', 'Total rent', 'Download', 'Views'],
  legend: { show: false },
  dataLabels: { enabled: false }
};

const incomeCards = [
  { id: 'item01', label: 'Total Income', value: 23876, change: 76343 },
  { id: 'item02', label: 'Views', value: 23876, change: 76343, dotColor: 'error', isProfit: false },
  { id: 'item03', label: 'Total Rent', value: 23876, change: 76343, dotColor: 'warning' },
  { id: 'item04', label: 'Download', value: 23876, change: 76343, dotColor: 'success' }
];

// ==============================|| CHART ||============================== //

function ApexDonutChart() {
  const theme = useTheme();
  const {
    state: { fontFamily }
  } = useConfig();

  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [series] = useState([31, 26, 23, 20]);
  const [options, setOptions] = useState(pieChartOptions);

  const primaryMain = theme.vars.palette.primary.main;
  const errorMain = theme.vars.palette.error.main;
  const warningMain = theme.vars.palette.warning.main;
  const successMain = theme.vars.palette.success.main;
  const backgroundPaper = theme.vars.palette.background.paper;

  useEffect(() => {
    setOptions({
      ...pieChartOptions,
      chart: { ...pieChartOptions.chart, fontFamily: fontFamily },
      colors: [primaryMain, warningMain, successMain, errorMain],
      stroke: { colors: [backgroundPaper] },
      theme: { mode: 'light' }
    });
  }, [fontFamily, backgroundPaper, primaryMain, warningMain, successMain, errorMain]);

  return <ReactApexChart options={options} series={series} type="donut" height={downSM ? 280 : 320} />;
}

// ==============================|| CHART WIDGETS - TOTAL INCOME ||============================== //

export default function TotalIncome() {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MainCard>
      <Grid container spacing={GRID_COMMON_SPACING}>
        <Grid size={12}>
          <Stack direction="row" sx={{ gap: 1, alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h5">Total Income</Typography>
            <IconButton
              color="secondary"
              id="wallet-button"
              aria-controls={open ? 'wallet-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MoreIcon />
            </IconButton>
            <Menu
              id="wallet-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{ list: { 'aria-labelledby': 'wallet-button', sx: { p: 1.25, minWidth: 150 } } }}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <ListItemButton onClick={handleClose}>Today</ListItemButton>
              <ListItemButton onClick={handleClose}>Weekly</ListItemButton>
              <ListItemButton onClick={handleClose}>Monthly</ListItemButton>
            </Menu>
          </Stack>
        </Grid>
        <Grid size={12} sx={{ '.apexcharts-active': { color: 'common.white' } }}>
          <ApexDonutChart />
        </Grid>
        {incomeCards.map((item, index) => (
          <Grid size={{ xs: 12, sm: 6 }} key={index}>
            <MainCard content={false} border={false} sx={{ bgcolor: 'secondary.lighter', boxShadow: 'none' }}>
              <Stack sx={{ gap: 0.5, alignItems: 'flex-start', p: 2 }}>
                <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
                  <Dot componentDiv sx={{ bgcolor: `${item.dotColor || 'primary'}.main` }} />
                  <Typography>{item.label}</Typography>
                </Stack>

                <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  ${item.value}
                  <Typography
                    variant="caption"
                    sx={{ color: 'text.secondary', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 0.25 }}
                  >
                    {item.isProfit !== false ? <ArrowUp size={14} /> : <ArrowDown size={14} />} +${item.change}
                  </Typography>
                </Typography>
              </Stack>
            </MainCard>
          </Grid>
        ))}
      </Grid>
    </MainCard>
  );
}
