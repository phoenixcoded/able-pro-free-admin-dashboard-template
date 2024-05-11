import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

// ==============================|| AUTHENTICATION - CARD ||============================== //

export default function AuthSocButton({ children, ...other }) {
  const theme = useTheme();
  return (
    <Button
      variant="outlined"
      fullWidth
      sx={{
        bgcolor: 'secondary.100',
        borderColor: theme.palette.secondary[200],
        color: 'secondary.main',
        '&:hover,&:focus': { bgcolor: 'secondary.100', borderColor: theme.palette.primary.main }
      }}
      {...other}
    >
      {children}
    </Button>
  );
}

AuthSocButton.propTypes = { children: PropTypes.any, other: PropTypes.any };
