import PropTypes from 'prop-types';
import { cloneElement } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

// project-imports
import Navigation from './DrawerContent/Navigation';

import { HEADER_HEIGHT } from 'config';
import { withAlpha } from 'utils/colorUtils';
import useConfig from 'hooks/useConfig';

// ==============================|| HORIZONTAL MENU LIST ||============================== //

function ElevationScroll({ children, window }) {
  const theme = useTheme();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window
  });

  theme.shadows[4] = theme.vars.customShadows.z1;
  theme.shadows[1] = theme.vars.customShadows.z2;

  return cloneElement(children, {
    elevation: trigger ? 4 : 1
  });
}

// ==============================|| HORIZONTAL MENU ||============================== //

export default function CustomAppBar() {
  const {
    state: { container }
  } = useConfig();

  return (
    <ElevationScroll>
      <AppBar
        sx={(theme) => ({
          top: HEADER_HEIGHT,
          height: HEADER_HEIGHT,
          bgcolor: withAlpha(theme.vars.palette.background.default, 0.8),
          backdropFilter: 'blur(8px)',
          width: '100%',
          justifyContent: 'center',
          borderTop: `1px solid ${theme.vars.palette.divider}`,
          zIndex: 1098,
          color: 'secondary.main'
        })}
      >
        <Container maxWidth={container ? 'xl' : false}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Navigation />
          </Box>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
}

ElevationScroll.propTypes = { children: PropTypes.node, window: PropTypes.any };
