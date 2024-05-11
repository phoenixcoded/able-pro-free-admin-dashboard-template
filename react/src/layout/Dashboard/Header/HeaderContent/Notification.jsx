import { useRef, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project-imports
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';
import Transitions from 'components/@extended/Transitions';

// assets
import { Gift, MessageText1, Notification, Setting2 } from 'iconsax-react';

const actionSX = {
  mt: '6px',
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// ==============================|| HEADER CONTENT - NOTIFICATION ||============================== //

export default function NotificationPage() {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

  const anchorRef = useRef(null);
  const [read] = useState(2);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const iconBackColorOpen = 'secondary.200';
  const iconBackColor = 'secondary.100';

  return (
    <Box sx={{ flexShrink: 0, ml: 0.5 }}>
      <IconButton
        color="secondary"
        variant="light"
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        size="large"
        sx={{ color: 'secondary.main', bgcolor: open ? iconBackColorOpen : iconBackColor, p: 1 }}
      >
        <Badge badgeContent={read} color="success" sx={{ '& .MuiBadge-badge': { top: 2, right: 4 } }}>
          <Notification variant="Bold" />
        </Badge>
      </IconButton>
      <Popper
        placement={matchesXs ? 'bottom' : 'bottom-end'}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{ modifiers: [{ name: 'offset', options: { offset: [matchesXs ? -5 : 0, 9] } }] }}
      >
        {({ TransitionProps }) => (
          <Transitions type="grow" position={matchesXs ? 'top' : 'top-right'} sx={{ overflow: 'hidden' }} in={open} {...TransitionProps}>
            <Paper
              sx={{
                boxShadow: theme.customShadows.z1,
                borderRadius: 1.5,
                width: '100%',
                minWidth: 285,
                maxWidth: 420,
                [theme.breakpoints.down('md')]: { maxWidth: 285 }
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard elevation={0} border="false">
                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="h5">Notifications</Typography>
                    <Link href="#" variant="h6" color="primary">
                      Mark all read
                    </Link>
                  </Stack>
                  <List
                    component="nav"
                    sx={{
                      '& .MuiListItemButton-root': {
                        p: 1.5,
                        my: 1.5,
                        border: `1px solid ${theme.palette.divider}`,
                        '&:hover': { bgcolor: 'primary.lighter', borderColor: theme.palette.primary.light },
                        '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
                      }
                    }}
                  >
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar type="filled">
                          <Gift size={20} variant="Bold" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant="h6">
                            It&apos;s{' '}
                            <Typography component="span" variant="subtitle1">
                              Cristina danny&apos;s
                            </Typography>{' '}
                            birthday today.
                          </Typography>
                        }
                        secondary="2 min ago"
                      />
                      <ListItemSecondaryAction>
                        <Typography variant="caption" noWrap>
                          3:00 AM
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar type="outlined">
                          <MessageText1 size={20} variant="Bold" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant="h6">
                            <Typography component="span" variant="subtitle1">
                              Aida Burg
                            </Typography>{' '}
                            commented your post.
                          </Typography>
                        }
                        secondary="5 August"
                      />
                      <ListItemSecondaryAction>
                        <Typography variant="caption" noWrap>
                          6:00 PM
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar>
                          <Setting2 size={20} variant="Bold" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant="h6">
                            Your Profile is Complete &nbsp;
                            <Typography component="span" variant="subtitle1">
                              60%
                            </Typography>{' '}
                          </Typography>
                        }
                        secondary="7 hours ago"
                      />
                      <ListItemSecondaryAction>
                        <Typography variant="caption" noWrap>
                          2:45 PM
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar type="combined">C</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant="h6">
                            <Typography component="span" variant="subtitle1">
                              Cristina Danny
                            </Typography>{' '}
                            invited to join{' '}
                            <Typography component="span" variant="subtitle1">
                              Meeting.
                            </Typography>
                          </Typography>
                        }
                        secondary="Daily scrum meeting time"
                      />
                      <ListItemSecondaryAction>
                        <Typography variant="caption" noWrap>
                          9:10 PM
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItemButton>
                  </List>
                  <Stack direction="row" justifyContent="center">
                    <Link href="#" variant="h6" color="primary">
                      View all
                    </Link>
                  </Stack>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </Box>
  );
}
