import { useState } from 'react';

// material-ui
import AvatarGroup from '@mui/material/AvatarGroup';
import Grid from '@mui/material/Grid';
import ListItemButton from '@mui/material/ListItemButton';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project-imports
import Avatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';
import MoreIcon from 'components/@extended/MoreIcon';
import MainCard from 'components/MainCard';

// assets
import { Add, Profile } from 'iconsax-reactjs';

import avatar1 from '/src/assets/images/users/avatar-1.png';
import avatar2 from '/src/assets/images/users/avatar-2.png';
import avatar3 from '/src/assets/images/users/avatar-3.png';
import avatar4 from '/src/assets/images/users/avatar-4.png';
import avatar5 from '/src/assets/images/users/avatar-5.png';

// ===========================|| STATISTICS - ASSIGN USERS ||=========================== //

export default function AssignUsers() {
  const [show, setShow] = useState(false);
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
      <Grid container spacing={3}>
        <Grid size={12}>
          <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Stack direction="row" sx={{ gap: 2, alignItems: 'center' }}>
              <Avatar variant="rounded">
                <Profile variant="Bold" />
              </Avatar>
              <Stack>
                <Typography variant="subtitle1">Able pro</Typography>
                <Typography variant="caption">@ableprodevelop</Typography>
              </Stack>
            </Stack>
            <IconButton
              color="secondary"
              id="wallet-button"
              aria-controls={open ? 'wallet-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MoreIcon />
            </IconButton>
            <Menu
              id="wallet-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{ list: { 'aria-labelledby': 'wallet-button', sx: { p: 1.25, minWidth: 150 } } }}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <ListItemButton onClick={handleClose}>Today</ListItemButton>
              <ListItemButton onClick={handleClose}>Weekly</ListItemButton>
              <ListItemButton onClick={handleClose}>Monthly</ListItemButton>
            </Menu>
          </Stack>
        </Grid>
        <Grid size={12}>
          <Stack direction="row" sx={{ gap: 3, alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ width: 186 }}>
              <Tooltip
                open={show}
                placement="top-end"
                title={
                  <AvatarGroup max={10}>
                    <Avatar alt="Agnes Walker" src={avatar4} />
                    <Avatar alt="Trevor Henderson" src={avatar5} />
                  </AvatarGroup>
                }
              >
                <AvatarGroup
                  sx={{
                    '& .MuiAvatarGroup-avatar': { bgcolor: 'primary.main', cursor: 'pointer' },
                    justifyContent: 'start',
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      fontSize: '0.875rem',
                      bgcolor: 'primary.lighter',
                      color: 'primary.main',
                      ml: -1.25
                    }
                  }}
                  max={4}
                  slotProps={{
                    surplus: {
                      onMouseEnter: () => {
                        setShow(true);
                      },
                      onMouseLeave: () => {
                        setShow(false);
                      }
                    }
                  }}
                >
                  <Avatar alt="Remy Sharp" src={avatar1} />
                  <Avatar alt="Travis Howard" src={avatar2} />
                  <Avatar alt="Cindy Baker" src={avatar3} />
                  <Avatar alt="Agnes Walker" src={avatar4} />
                  <Avatar alt="Trevor Henderson" src={avatar5} />
                </AvatarGroup>
              </Tooltip>
            </Box>
            <IconButton shape="rounded" variant="contained">
              <Add />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </MainCard>
  );
}
