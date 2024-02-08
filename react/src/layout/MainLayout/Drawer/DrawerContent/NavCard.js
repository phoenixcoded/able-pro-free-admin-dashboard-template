// material-ui
import { Button, Link, CardMedia, Stack, Typography } from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';

// assets
import { Logout } from 'iconsax-react';
import avatar from 'assets/images/analytics/welcome-banner.png';
import AnimateButton from 'components/@extended/AnimateButton';

// ==============================|| DRAWER CONTENT - NAV CARD ||============================== //

const NavCard = () => (
  <MainCard sx={{ bgcolor: 'secondary.lighter', m: 3 }}>
    <CardMedia component="img" image={avatar} />
    <Stack alignItems="center" spacing={2.5}>
      <Stack alignItems="center">
        <Typography variant="h5">Able Pro</Typography>
        <Typography variant="h6" color="secondary">
          Checkout pro features
        </Typography>
      </Stack>
      <AnimateButton>
        <Button
          variant="shadow"
          color="warning"
          component={Link}
          href="https://1.envato.market/OrJ5nn"
          target="_blank"
          startIcon={<Logout />}
        >
          Upgrade to Pro
        </Button>
      </AnimateButton>
    </Stack>
  </MainCard>
);

export default NavCard;
