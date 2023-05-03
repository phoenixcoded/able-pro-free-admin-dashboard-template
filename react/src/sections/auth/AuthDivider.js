import PropTypes from 'prop-types';

// material-ui
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// ==============================|| AUTHENTICATION - CARD ||============================== //

const AuthDivider = ({ children }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        '&:after': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: 0,
          width: '100%',
          height: '1px',
          zIndex: 1,
          background: theme.palette.divider
        },
        '& .MuiTypography-root': {
          background: theme.palette.background.paper,
          position: 'relative',
          padding: '8px 20px',
          margin: '0 auto',
          zIndex: 5
        }
      }}
    >
      {children}
    </Box>
  );
};

AuthDivider.propTypes = {
  children: PropTypes.node
};

export default AuthDivider;
