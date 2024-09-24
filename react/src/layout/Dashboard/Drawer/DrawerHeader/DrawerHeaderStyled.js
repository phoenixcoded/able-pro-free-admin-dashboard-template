// material-ui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const DrawerHeaderStyled = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme }) => ({
  ...theme.mixins.toolbar,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: theme.spacing(open ? 3 : 0),

  variants: [
    {
      props: ({ open }) => open,

      style: {
        justifyContent: 'flex-start'
      }
    }
  ]
}));

export default DrawerHeaderStyled;
