// material-ui
import { Grid, Typography, Button, Stack, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project import
import MainCard from 'components/MainCard';

//asset
import cardBack from 'assets/images/widget/img-dropbox-bg.svg';

import WelcomeImage from 'assets/images/analytics/welcome-banner.png';

// ==============================|| ANALYTICS - WELCOME ||============================== //

const WelcomeBanner = () => {
  const theme = useTheme();

  return (
    <MainCard
      sx={{
        color: 'common.white',
        bgcolor: 'primary.darker',
        border: 'none',
        '&:after': {
          content: '""',
          backgroundImage: `url(${cardBack})`,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          opacity: 0.5,
          backgroundPosition: 'bottom right',
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat'
        }
      }}
    >
      <Grid container>
        <Grid item md={6} sm={6} xs={12}>
          <Stack spacing={2} sx={{ padding: 3 }}>
            <Typography variant="h2" color={theme.palette.background.paper}>
              Explore Redesigned Able Pro
            </Typography>
            <Typography variant="h6" color={theme.palette.background.paper}>
              The Brand new User Interface with power of Material-UI Components. Explore the Endless possibilities with Able Pro.
            </Typography>
            <Box>
              <Button
                variant="outlined"
                color="secondary"
                href="https://1.envato.market/OrJ5nn"
                sx={{ color: 'background.paper', borderColor: theme.palette.background.paper, zIndex: 2 }}
                target="_blank"
              >
                Exclusive on Themeforest
              </Button>
            </Box>
          </Stack>
        </Grid>
        <Grid item sm={6} xs={12} sx={{ display: { xs: 'none', sm: 'initial' } }}>
          <Stack sx={{ position: 'relative', pr: { sm: 3, md: 8 }, zIndex: 2 }} justifyContent="center" alignItems="flex-end">
            <img src={WelcomeImage} alt="Welcome" width="200px" />
          </Stack>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default WelcomeBanner;
