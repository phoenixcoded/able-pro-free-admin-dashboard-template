import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// project-imports
import getColors from 'utils/getColors';

// ==============================|| DOT - EXTENDED ||============================== //

export default function Dot({ color, size, variant, sx, componentDiv }) {
  const theme = useTheme();
  const colors = getColors(theme, color || 'primary');
  const { main } = colors;

  return (
    <Box
      component={componentDiv ? 'div' : 'span'}
      sx={{
        width: size || 8,
        height: size || 8,
        borderRadius: '50%',
        bgcolor: variant === 'outlined' ? '' : main,
        ...(variant === 'outlined' && { border: `1px solid `, borderColor: main }),
        ...sx
      }}
    />
  );
}

Dot.propTypes = {
  color: PropTypes.any,
  size: PropTypes.number,
  variant: PropTypes.string,
  sx: PropTypes.any,
  componentDiv: PropTypes.bool
};
