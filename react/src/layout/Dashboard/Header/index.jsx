import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// project-imports
import AppBarStyled from './AppBarStyled';
import HeaderContent from './HeaderContent';
import IconButton from 'components/@extended/IconButton';

import { DRAWER_WIDTH } from 'config';

// assets
import { HambergerMenu } from 'iconsax-react';

// ==============================|| MAIN LAYOUT - HEADER ||============================== //

export default function Header({ open, handleDrawerToggle }) {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));
  // header content
  const headerContent = useMemo(() => <HeaderContent />, []);

  const iconBackColorOpen = 'secondary.200';
  const iconBackColor = 'secondary.100';

  // common header
  const mainHeader = (
    <Toolbar sx={{ px: { xs: 2, sm: 4.5, lg: 8 } }}>
      <IconButton
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        edge="start"
        color="secondary"
        variant="light"
        size="large"
        sx={{
          display: open && { lg: 'inline-flex', xs: 'none' },
          color: 'secondary.main',
          bgcolor: open ? iconBackColorOpen : iconBackColor,
          ml: { xs: 0, lg: -2 },
          p: 1
        }}
      >
        <HambergerMenu />
      </IconButton>
      {headerContent}
    </Toolbar>
  );

  // app-bar params
  const appBar = {
    position: 'fixed',
    elevation: 0,
    sx: {
      bgcolor: alpha(theme.palette.background.default, 0.8),
      backdropFilter: 'blur(8px)',
      zIndex: 1200,
      width: open ? `calc(100% - ${DRAWER_WIDTH}px)` : '100%'
    }
  };

  return (
    <>
      {!downLG ? (
        <AppBarStyled open={open} {...appBar}>
          {mainHeader}
        </AppBarStyled>
      ) : (
        <AppBar {...appBar}>{mainHeader}</AppBar>
      )}
    </>
  );
}

Header.propTypes = {
  open: PropTypes.bool,
  handleDrawerToggle: PropTypes.func
};
