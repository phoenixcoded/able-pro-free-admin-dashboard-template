// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// project import
import MainCard from 'components/MainCard';

//asset
import WelcomeImage from 'assets/images/analytics/welcome-banner.png';
import cardBack from 'assets/images/widget/img-dropbox-bg.svg';

// ==============================|| ANALYTICS - WELCOME ||============================== //

export default function WelcomeBanner() {
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
                href="https://1.envato.market/c/1289604/275988/4415?subId1=phoenixcoded&u=https%3A%2F%2Fthemeforest.net%2Fitem%2Fable-pro-responsive-bootstrap-4-admin-template%2F19300403"
                sx={{
                  color: 'background.paper',
                  borderColor: theme.palette.background.paper,
                  zIndex: 2,
                  '&:hover': { color: 'background.paper', borderColor: theme.palette.background.paper, bgcolor: 'primary.main' }
                }}
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
}
