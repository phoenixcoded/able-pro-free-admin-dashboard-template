import PropTypes from 'prop-types';

// material-ui
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// project-imports
import AuthCard from './AuthCard';

// assets
import AuthBackground from 'assets/images/auth/AuthBackground';

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

export default function AuthWrapper({ children }) {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AuthBackground />
      <Grid container direction="column" sx={{ justifyContent: 'center', minHeight: '100vh' }}>
        <Grid size={12}>
          <Grid
            size={12}
            container
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: { xs: 'calc(100vh - 210px)', sm: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' }
            }}
          >
            <Grid>
              <AuthCard>{children}</AuthCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

AuthWrapper.propTypes = { children: PropTypes.node };
