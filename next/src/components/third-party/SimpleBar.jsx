'use client';

import PropTypes from 'prop-types';

// material-ui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

// project-imports
import { withAlpha } from 'utils/colorUtils';

// third-party
import SimpleBar from 'simplebar-react';

// root style
const RootStyle = styled(Box)({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden'
});

// scroll bar wrapper
const SimpleBarStyle = styled(SimpleBar)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: withAlpha(theme.palette.secondary.main, 0.25) // ✅ safer than theme.vars
    },
    '&.simplebar-visible:before': { opacity: 1 }
  },
  '& .simplebar-track.simplebar-vertical': { width: 10 },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': { height: 6 },
  '& .simplebar-mask': { zIndex: 'inherit' }
}));

export default function SimpleBarScroll({ children, sx, ...other }) {
  return (
    <RootStyle>
      <SimpleBarStyle clickOnTrack={false} sx={sx} data-simplebar-direction="ltr" {...other}>
        {children}
      </SimpleBarStyle>
    </RootStyle>
  );
}

SimpleBarScroll.propTypes = {
  children: PropTypes.any,
  sx: PropTypes.any,
  other: PropTypes.any
};
