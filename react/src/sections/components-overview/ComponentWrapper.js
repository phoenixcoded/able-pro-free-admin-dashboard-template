// material-ui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// ==============================|| COMPONENTS - WRAPPER ||============================== //

const ComponentWrapper = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(8),
  paddingTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('xl')]: {
    padding: theme.spacing(3),
    paddingRight: 0
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2)
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5)
  }
}));

export default ComponentWrapper;
