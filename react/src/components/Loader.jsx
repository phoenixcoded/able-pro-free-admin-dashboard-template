// material-ui
import { styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';

// loader style
const LoaderWrapper = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 2001,
  width: '100%',
  '& > * + *': { marginTop: theme.spacing(2) }
}));

// ==============================|| Loader ||============================== //

export default function Loader() {
  return (
    <LoaderWrapper>
      <LinearProgress color="primary" sx={{ height: 2 }} />
    </LoaderWrapper>
  );
}
