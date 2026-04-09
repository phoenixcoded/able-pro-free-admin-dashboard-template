'use client';

// material-ui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NextLink } from 'components/routes';

// ==============================|| ERROR 404 - MAIN ||============================== //

export default function Error404() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Page Not Found
      </Typography>
      <Button component={NextLink} href="/" variant="contained">
        Back to Home
      </Button>
    </Box>
  );
}
