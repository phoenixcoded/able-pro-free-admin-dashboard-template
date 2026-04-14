'use client';

import PropTypes from 'prop-types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// material-ui
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';

export default function NavItem({ item, level, isParents = false, setSelectedID }) {
  const pathname = usePathname();

  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  let itemTarget = '_self';
  if (item.target) itemTarget = '_blank';

  const Icon = item.icon;

  const itemIcon = item.icon ? (
    <Icon variant="Bulk" size={drawerOpen ? 20 : 22} style={{ ...(isParents && { fontSize: 20, stroke: '1.5' }) }} />
  ) : null;

  // ✅ Replace matchPath
  const isSelected = pathname.startsWith(item.link || item.url);

  const iconSelectedColor = 'primary.main';

  const itemHandler = () => {
    if (downLG) handlerDrawerOpen(false);
    if (isParents && setSelectedID) setSelectedID();
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <ListItemButton
        component={Link}
        href={item.url}
        target={itemTarget}
        disabled={item.disabled}
        selected={isSelected}
        onClick={itemHandler}
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
      >
        {/* ICON */}
        <ListItemIcon
          sx={{
            minWidth: 38,
            color: 'secondary.main',
            ...(isSelected && { color: iconSelectedColor })
          }}
        >
          {itemIcon}
        </ListItemIcon>

        {/* TEXT */}
        {(drawerOpen || (!drawerOpen && level !== 1)) && (
          <ListItemText
            primary={
              <Typography
                variant="h6"
                sx={{
                  color: isSelected ? iconSelectedColor : 'secondary.main',
                  fontWeight: isSelected ? 500 : 400
                }}
              >
                {item.title}
              </Typography>
            }
          />
        )}

        {/* CHIP */}
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
    </Box>
  );
}

NavItem.propTypes = {
  item: PropTypes.any,
  level: PropTypes.number,
  isParents: PropTypes.bool,
  setSelectedID: PropTypes.any
};
