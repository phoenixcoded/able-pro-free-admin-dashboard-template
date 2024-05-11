import { useState } from 'react';

// material-ui
import Chip from '@mui/material/Chip';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';

// project-imports
import RepeatCustomerChart from './RepeatCustomerChart';
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import MoreIcon from 'components/@extended/MoreIcon';

// ==============================|| CHART - REPEAT CUSTOMER RATE ||============================== //

export default function RepeatCustomerRate() {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MainCard>
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
        <Typography variant="h5">Repeat customer rate</Typography>
        <IconButton
          color="secondary"
          id="wallet-button"
          aria-controls={open ? 'wallet-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{ transform: 'rotate(90deg)' }}
        >
          <MoreIcon />
        </IconButton>
        <Menu
          id="wallet-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'wallet-button',
            sx: { p: 1.25, minWidth: 150 }
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          <ListItemButton onClick={handleClose}>Today</ListItemButton>
          <ListItemButton onClick={handleClose}>Weekly</ListItemButton>
          <ListItemButton onClick={handleClose}>Monthly</ListItemButton>
        </Menu>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={0.5} sx={{ mt: 1 }}>
        <Typography variant="subtitle1">5.44%</Typography>
        <Chip color="success" variant="filled" label="+2.6%" size="small" sx={{ bgcolor: 'success.main', borderRadius: 1 }} />
      </Stack>
      <RepeatCustomerChart />
    </MainCard>
  );
}
