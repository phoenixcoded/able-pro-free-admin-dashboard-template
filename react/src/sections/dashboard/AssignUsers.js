import { useState } from 'react';

// material-ui
import { AvatarGroup, Box, Grid, ListItemButton, Menu, Stack, Tooltip, Typography } from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';

// assets
import { Add, More, Profile } from 'iconsax-react';

const avatarImage = require.context('assets/images/users', true);

// ===========================|| STATISTICS - ASSIGN USERS ||=========================== //

const AssignUsers = () => {
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
        <Grid item xs={12}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack direction="row" alignItems="center" spacing={2}>
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
              <More style={{ transform: 'rotate(90deg)' }} />
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
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={3}>
            <Box sx={{ width: 186 }}>
              <Tooltip
                open={show}
                placement="top-end"
                title={
                  <AvatarGroup max={10}>
                    <Avatar alt="Agnes Walker" src={avatarImage(`./avatar-4.png`)} />
                    <Avatar alt="Trevor Henderson" src={avatarImage(`./avatar-5.png`)} />
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
                  componentsProps={{
                    additionalAvatar: {
                      onMouseEnter: () => {
                        setShow(true);
                      },
                      onMouseLeave: () => {
                        setShow(false);
                      }
                    }
                  }}
                >
                  <Avatar alt="Remy Sharp" src={avatarImage(`./avatar-1.png`)} />
                  <Avatar alt="Travis Howard" src={avatarImage(`./avatar-2.png`)} />
                  <Avatar alt="Cindy Baker" src={avatarImage(`./avatar-3.png`)} />
                  <Avatar alt="Agnes Walker" src={avatarImage(`./avatar-4.png`)} />
                  <Avatar alt="Trevor Henderson" src={avatarImage(`./avatar-5.png`)} />
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
};

export default AssignUsers;
