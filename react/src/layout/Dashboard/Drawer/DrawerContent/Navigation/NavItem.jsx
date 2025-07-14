import PropTypes from 'prop-types';
import { matchPath, useLocation, Link } from 'react-router-dom';

// material-ui
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project-imports
import Dot from 'components/@extended/Dot';
import IconButton from 'components/@extended/IconButton';

import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';

// ==============================|| NAVIGATION - ITEM ||============================== //

export default function NavItem({ item, level, isParents = false, setSelectedID }) {
  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  const Icon = item.icon;
  const itemIcon = item.icon ? (
    <Icon variant="Bulk" size={drawerOpen ? 20 : 22} style={{ ...(isParents && { fontSize: 20, stroke: '1.5' }) }} />
  ) : (
    false
  );

  const { pathname } = useLocation();
  const isSelected = !!matchPath({ path: item?.link ? item.link : item.url, end: false }, pathname);

  const iconSelectedColor = 'primary.main';

  const itemHandler = () => {
    if (downLG) handlerDrawerOpen(false);

    if (isParents && setSelectedID) {
      setSelectedID();
    }
  };

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <ListItemButton
          component={Link}
          to={item.url}
          target={itemTarget}
          disabled={item.disabled}
          selected={isSelected}
          sx={{
            zIndex: 1201,
            pl: level === 2 ? 3.25 : drawerOpen ? (level <= 3 ? (level * 20) / 8 : (level * 20 + (level - 3) * 10) / 8) : 1.5,
            py: !drawerOpen && level === 1 ? 1.25 : 1,
            ...(drawerOpen && {
              '&:hover': { bgcolor: 'transparent' },
              '&.Mui-selected': { '&:hover': { bgcolor: 'transparent' }, bgcolor: 'transparent' }
            }),
            ...(drawerOpen &&
              level === 1 && {
                mx: 1.25,
                my: 0.5,
                borderRadius: 1,
                '&:hover': { bgcolor: 'secondary.200' }
              }),
            ...(!drawerOpen && {
              px: 2.75,
              justifyContent: 'center',
              '&:hover': { bgcolor: 'transparent' },
              '&.Mui-selected': { '&:hover': { bgcolor: 'transparent' }, bgcolor: 'transparent' }
            })
          }}
          onClick={() => itemHandler()}
        >
          {itemIcon && (
            <ListItemIcon
              sx={{
                minWidth: 38,
                color: 'secondary.main',
                ...(isSelected && { color: iconSelectedColor }),
                ...(!drawerOpen &&
                  level === 1 && {
                    borderRadius: 1,
                    width: 46,
                    height: 46,
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&:hover': { bgcolor: 'secondary.200' }
                  }),
                ...(!drawerOpen &&
                  isSelected && {
                    bgcolor: 'primary.lighter',
                    '&:hover': { bgcolor: 'primary.lighter' }
                  })
              }}
            >
              {itemIcon}
            </ListItemIcon>
          )}

          {!itemIcon && drawerOpen && (
            <ListItemIcon
              sx={{
                minWidth: 30
              }}
            >
              <Dot size={isSelected ? 6 : 5} color={isSelected ? 'primary' : 'secondary'} />
            </ListItemIcon>
          )}

          {(drawerOpen || (!drawerOpen && level !== 1)) && (
            <ListItemText
              primary={
                <Typography
                  variant="h6"
                  sx={{
                    color: 'secondary.main',
                    ...(isSelected && { color: iconSelectedColor }),
                    fontWeight: isSelected ? 500 : 400
                  }}
                >
                  {item.title}
                </Typography>
              }
            />
          )}
          {(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
            <Chip
              color={item.chip.color}
              variant={item.chip.variant}
              size={item.chip.size}
              label={item.chip.label}
              avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
            />
          )}
        </ListItemButton>

        {(drawerOpen || (!drawerOpen && level !== 1)) &&
          item?.actions &&
          item?.actions.map((action, index) => {
            const ActionIcon = action?.icon;
            const callAction = action?.function;

            return (
              <IconButton
                key={index}
                {...(action.type === NavActionType.FUNCTION && {
                  onClick: (event) => {
                    event.stopPropagation();
                    callAction();
                  }
                })}
                {...(action.type === NavActionType.LINK && {
                  component: Link,
                  to: action.url,
                  target: action.target ? '_blank' : '_self'
                })}
                color={isSelected ? 'primary' : 'secondary'}
                variant="outlined"
                sx={(theme) => ({
                  position: 'absolute',
                  top: 12,
                  right: 10,
                  zIndex: 1202,
                  width: 20,
                  height: 20,
                  p: 0.25,
                  borderColor: isSelected ? 'primary.light' : 'secondary.light',
                  '&:hover': { borderColor: isSelected ? 'primary.main' : 'secondary.main' }
                })}
              >
                <ActionIcon size={12} style={{ marginLeft: 1 }} />
              </IconButton>
            );
          })}
      </Box>
    </>
  );
}

NavItem.propTypes = { item: PropTypes.any, level: PropTypes.number, isParents: PropTypes.bool, setSelectedID: PropTypes.any };
