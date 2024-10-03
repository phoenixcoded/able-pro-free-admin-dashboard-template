// material-ui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

// ==============================|| COMPONENTS - WRAPPER ||============================== //

const ComponentWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('xl')]: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5)
  }
}));

export default ComponentWrapper;
