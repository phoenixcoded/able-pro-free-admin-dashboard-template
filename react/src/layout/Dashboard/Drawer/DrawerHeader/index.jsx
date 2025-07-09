import PropTypes from 'prop-types';

// project-imports
import DrawerHeaderStyled from './DrawerHeaderStyled';
import Logo from 'components/logo';
import { HEADER_HEIGHT } from 'config';

// ==============================|| DRAWER HEADER ||============================== //

export default function DrawerHeader({ open }) {
  return (
    <DrawerHeaderStyled
      open={open}
      sx={{
        minHeight: HEADER_HEIGHT,
        width: 'initial',
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: open ? '24px' : 0
      }}
    >
      <Logo isIcon={!open} sx={{ width: open ? 'auto' : 52, height: 'auto' }} />
    </DrawerHeaderStyled>
  );
}

DrawerHeader.propTypes = { open: PropTypes.bool };
