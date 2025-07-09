// material-ui
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project-imports
import MainCard from 'components/MainCard';

// assets
import WelcomeImage from 'assets/images/analytics/welcome-banner.png';
import cardBack from 'assets/images/widget/img-dropbox-bg.svg';

// ==============================|| ANALYTICS - WELCOME ||============================== //

export default function WelcomeBanner() {
  return (
    <MainCard
      border={false}
      sx={{
        color: 'background.paper',
        bgcolor: 'primary.darker',
        '&:after': {
          content: '""',
          background: `url("${cardBack}") 100% 100% / cover no-repeat`,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          opacity: 0.5
        }
      }}
    >
      <Grid container>
        <Grid size={{ md: 6, sm: 6, xs: 12 }}>
          <Stack sx={{ gap: 2, padding: 3 }}>
            <Typography variant="h2">Explore Redesigned Able Pro</Typography>
            <Typography variant="h6">
              The Brand new User Interface with power of Material-UI Components. Explore the Endless possibilities with Able Pro.
            </Typography>
            <Box sx={{ pt: 1.5 }}>
              <Button
                variant="outlined"
                color="secondary"
                href="https://1.envato.market/c/1289604/275988/4415?subId1=phoenixcoded&u=https%3A%2F%2Fthemeforest.net%2Fitem%2Fable-pro-responsive-bootstrap-4-admin-template%2F19300403"
                sx={{
                  color: 'background.paper',
                  borderColor: 'background.paper',
                  zIndex: 2,
                  '&:hover': {
                    color: 'background.paper',
                    borderColor: 'background.paper',
                    bgcolor: 'primary.main'
                  }
                }}
                target="_blank"
              >
                Exclusive on Themeforest
              </Button>
            </Box>
          </Stack>
        </Grid>
        <Grid sx={{ display: { xs: 'none', sm: 'initial' } }} size={{ sm: 6, xs: 12 }}>
          <Stack sx={{ justifyContent: 'center', alignItems: 'flex-end', position: 'relative', pr: { sm: 3, md: 8 }, zIndex: 2 }}>
            <CardMedia component="img" sx={{ width: 200 }} src={WelcomeImage} alt="Welcome" />
          </Stack>
        </Grid>
      </Grid>
    </MainCard>
  );
}
