import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// project-imports
import getColors from 'utils/getColors';

// ==============================|| DOT - EXTENDED ||============================== //

const Dot = ({ color, sx, componentDiv }) => {
  const theme = useTheme();
  const colors = getColors(theme, color || 'primary');
  const { main } = colors;

  return (
    <Box
      component={componentDiv ? 'div' : 'span'}
      sx={{
        width: 8,
        height: 8,
        borderRadius: '50%',
        bgcolor: main,
        ...sx
      }}
    />
  );
};

Dot.propTypes = {
  sx: PropTypes.object,
  color: PropTypes.string,
  componentDiv: PropTypes.bool
};

export default Dot;
