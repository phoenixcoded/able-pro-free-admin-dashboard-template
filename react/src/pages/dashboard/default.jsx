// material-ui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project-imports
import EcommerceDataCard from 'components/cards/statistics/EcommerceDataCard';
import { GRID_COMMON_SPACING } from 'config';

import WelcomeBanner from 'sections/dashboard/default/WelcomeBanner';
import ProjectRelease from 'sections/dashboard/default/ProjectRelease';
import EcommerceDataChart from 'sections/dashboard/default/EcommerceDataChart';
import TotalIncome from 'sections/dashboard/default/TotalIncome';
import RepeatCustomerRate from 'sections/dashboard/default/RepeatCustomerRate';
import ProjectOverview from 'sections/dashboard/default/ProjectOverview';
import Transactions from 'sections/dashboard/default/Transactions';
import AssignUsers from 'sections/dashboard/default/AssignUsers';

// assets
import { ArrowDown, ArrowUp, Book, Calendar, CloudChange, Wallet3 } from 'iconsax-reactjs';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export default function DashboardDefault() {
  const theme = useTheme();
  return (
    <Grid container spacing={GRID_COMMON_SPACING}>
      <Grid size={12}>
        <WelcomeBanner />
      </Grid>
      {/* row 1 */}
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <EcommerceDataCard
          title="All Earnings"
          count="$3000"
          iconPrimary={<Wallet3 />}
          percentage={
            <Typography color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <ArrowUp size={16} style={{ transform: 'rotate(45deg)' }} /> 30.6%
            </Typography>
          }
        >
          <EcommerceDataChart color={theme.palette.primary.main} />
        </EcommerceDataCard>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <EcommerceDataCard
          title="Page Views"
          count="290+"
          color="warning"
          iconPrimary={<Book />}
          percentage={
            <Typography sx={{ color: 'warning.dark', display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <ArrowDown size={16} style={{ transform: 'rotate(-45deg)' }} /> 30.6%
            </Typography>
          }
        >
          <EcommerceDataChart color={theme.palette.warning.dark} />
        </EcommerceDataCard>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <EcommerceDataCard
          title="Total Task"
          count="1,568"
          color="success"
          iconPrimary={<Calendar />}
          percentage={
            <Typography sx={{ color: 'success.darker', display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <ArrowUp size={16} style={{ transform: 'rotate(45deg)' }} /> 30.6%
            </Typography>
          }
        >
          <EcommerceDataChart color={theme.palette.success.darker} />
        </EcommerceDataCard>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <EcommerceDataCard
          title="Download"
          count="$200"
          color="error"
          iconPrimary={<CloudChange />}
          percentage={
            <Typography sx={{ color: 'error.dark', display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <ArrowDown size={16} style={{ transform: 'rotate(45deg)' }} /> 30.6%
            </Typography>
          }
        >
          <EcommerceDataChart color={theme.palette.error.dark} />
        </EcommerceDataCard>
      </Grid>
      {/* row 2 */}
      <Grid size={{ xs: 12, md: 8, lg: 9 }}>
        <Grid container spacing={GRID_COMMON_SPACING}>
          <Grid size={12}>
            <RepeatCustomerRate />
          </Grid>
          <Grid size={12}>
            <ProjectOverview />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 12, md: 4, lg: 3 }}>
        <Stack sx={{ gap: GRID_COMMON_SPACING }}>
          <ProjectRelease />
          <AssignUsers />
        </Stack>
      </Grid>
      {/* row 3 */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Transactions />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TotalIncome />
      </Grid>
    </Grid>
  );
}
