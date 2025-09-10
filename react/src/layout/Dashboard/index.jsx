import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// material-ui
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

// project-imports
import Drawer from './Drawer';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from 'components/@extended/Breadcrumbs';
import Loader from 'components/Loader';

import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';
import { DRAWER_WIDTH } from 'config';

// assets
import { ShoppingCart } from 'iconsax-reactjs';

// ==============================|| MAIN LAYOUT ||============================== //

export default function MainLayout() {
  const { menuMasterLoading } = useGetMenuMaster();
  const downXL = useMediaQuery((theme) => theme.breakpoints.down('xl'));

  // set media wise responsive drawer
  useEffect(() => {
    handlerDrawerOpen(!downXL);
  }, [downXL]);

  if (menuMasterLoading) return <Loader />;

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header />
      <Drawer />

      <Box component="main" sx={{ width: `calc(100% - ${DRAWER_WIDTH}px)`, flexGrow: 1, p: { xs: 1, sm: 3 } }}>
        <Toolbar sx={{ mt: 'inherit', mb: 'inherit' }} />
        <Box
          sx={{
            ...{ px: { xs: 0, sm: 3 } },
            position: 'relative',
            minHeight: 'calc(100vh - 124px)',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Breadcrumbs />
          <Outlet />
          <Footer />
          <Link style={{ textDecoration: 'none' }} href="https://codedthemes.com/item/able-pro-mui-react-admin-template/" target="_blank">
            <Button
              variant="contained"
              color="error"
              startIcon={<ShoppingCart />}
              sx={{ zIndex: 1199, position: 'fixed', bottom: 50, right: 30 }}
            >
              Buy Now
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
