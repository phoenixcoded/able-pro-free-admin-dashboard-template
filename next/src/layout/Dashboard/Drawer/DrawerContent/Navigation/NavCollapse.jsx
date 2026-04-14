import PropTypes from 'prop-types';
import { useEffect, useState, Activity } from 'react';

// next
import { usePathname, useRouter } from 'next/navigation';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Collapse from '@mui/material/Collapse';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project-imports
import NavItem from './NavItem';
import Dot from 'components/@extended/Dot';
import IconButton from 'components/@extended/IconButton';
import Transitions from 'components/@extended/Transitions';
import SimpleBar from 'components/third-party/SimpleBar';

import { handlerActiveItem, useGetMenuMaster } from 'api/menu';
import { MenuOrientation } from 'config';
import useConfig from 'hooks/useConfig';
import useMenuCollapse from 'hooks/useMenuCollapse';

// assets
import { ArrowDown2, ArrowUp2, ArrowRight2, Copy } from '@wandersonalwes/iconsax-react';

// mini-menu - wrapper
const PopperStyled = styled(Popper)(({ theme }) => ({
  overflow: 'visible',
  zIndex: 1202,
  minWidth: 180,
  '&:before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 38,
    left: -5,
    width: 10,
    height: 10,
    backgroundColor: theme.vars.palette.background.paper,
    transform: 'translateY(-50%) rotate(45deg)',
    zIndex: 120,
    borderLeft: `1px solid ${theme.vars.palette.divider}`,
    borderBottom: `1px solid ${theme.vars.palette.divider}`
  }
}));

export default function NavCollapse({ menu, level, parentId, setSelectedItems, selectedItems, setSelectedLevel, selectedLevel }) {
  const theme = useTheme();
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const {
    state: { menuOrientation }
  } = useConfig();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const [anchorElCollapse, setAnchorElCollapse] = useState(null);

  const openCollapse = Boolean(anchorElCollapse);
  const handleClickCollapse = (event) => {
    setAnchorElCollapse(event.currentTarget);
  };
  const handleCloseCollapse = () => {
    setAnchorElCollapse(null);
  };

  const handleClick = (event, isRedirect) => {
    setAnchorEl(null);
    setSelectedLevel(level);
    if (drawerOpen) {
      setOpen(!open);
      setSelected(!selected ? menu.id : null);
      setSelectedItems(!selected ? menu.id : '');
      if (menu.url && isRedirect) router.push(`${menu.url}`);
    } else {
      setAnchorEl(event?.currentTarget);
    }
  };

  const handlerIconLink = () => {
    if (!drawerOpen) {
      if (menu.url) router.push(`${menu.url}`);
      setSelected(menu.id);
    }
  };

  const handleHover = (event) => {
    setAnchorEl(event?.currentTarget);
  };

  const miniMenuOpened = Boolean(anchorEl);

  const handleMiniClose = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setOpen(false);
    if (!miniMenuOpened && !menu.url) {
      setSelected(null);
    }
    setAnchorEl(null);
  };

  useEffect(() => {
    if (selected === selectedItems) {
      if (level === 1) {
        setOpen(true);
      }
    } else {
      if (level === selectedLevel) {
        setOpen(false);
        if ((!miniMenuOpened && !drawerOpen && !selected) || drawerOpen) {
          setSelected(null);
        }
      }
    }
  }, [selectedItems, level, selected, miniMenuOpened, drawerOpen, selectedLevel]);

  const pathname = usePathname();

  // menu collapse for sub-levels
  useMenuCollapse(menu, pathname, miniMenuOpened, setSelected, setOpen, setAnchorEl);

  useEffect(() => {
    if (menu.url === pathname) {
      handlerActiveItem(menu.id);
      setSelected(menu.id);
      setAnchorEl(null);
      setOpen(true);
    }
  }, [pathname, menu]);

  const navCollapse = menu.children?.map((item) => {
    switch (item.type) {
      case 'collapse':
        return (
          <NavCollapse
            key={item.id}
            setSelectedItems={setSelectedItems}
            setSelectedLevel={setSelectedLevel}
            selectedLevel={selectedLevel}
            selectedItems={selectedItems}
            menu={item}
            level={level + 1}
            parentId={parentId}
          />
        );
      case 'item':
        return <NavItem key={item.id} item={item} level={level + 1} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Collapse or Item
          </Typography>
        );
    }
  });

  const isSelected = selected === menu.id;
  const borderIcon = level === 1 ? <Copy variant="Bulk" size={drawerOpen ? 22 : 24} /> : false;
  const Icon = menu.icon;
  const menuIcon = menu.icon ? <Icon variant="Bulk" size={drawerOpen ? 22 : 24} /> : borderIcon;
  const popperId = miniMenuOpened ? `collapse-pop-${menu.id}` : undefined;
  const FlexBox = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' };

  const selectedTextColor = isSelected || anchorEl ? 'primary.main' : null;
  const lightTextColor = selectedTextColor || 'secondary.main';
  const darkTextColor = selectedTextColor || 'secondary.400';

  const arrowStyle = { size: 12, style: { marginLeft: 1 } };

  return (
    <>
      {menuOrientation !== MenuOrientation.HORIZONTAL || downLG ? (
        <>
          <ListItemButton
            id={`${menu.id}-button`}
            selected={isSelected}
            {...(!drawerOpen && { onMouseEnter: (e) => handleClick(e, true), onMouseLeave: handleMiniClose })}
            onClick={(e) => handleClick(e, true)}
            sx={(theme) => ({
              pl: level === 2 ? 3.25 : drawerOpen ? (level <= 3 ? (level * 20) / 8 : (level * 20 + (level - 3) * 10) / 8) : 1.5,
              py: !drawerOpen && level === 1 ? 1.25 : 1,
              ...(drawerOpen &&
                level === 1 && {
                  mx: 1.25,
                  my: 0.5,
                  borderRadius: 1,
                  '&:hover': { bgcolor: 'secondary.200', ...theme.applyStyles('dark', { bgcolor: 'divider' }) }
                }),
              ...(!drawerOpen && {
                px: 2.75,
                '&:hover': { bgcolor: 'transparent' },
                '&.Mui-selected': {
                  '&:hover': { bgcolor: 'transparent' },
                  bgcolor: 'transparent'
                }
              })
            })}
            {...(drawerOpen &&
              menu.isDropdown && {
                'aria-controls': openCollapse ? `${menu.id}-menu` : undefined,
                'aria-haspopup': true,
                'aria-expanded': openCollapse ? 'true' : undefined,
                onClick: handleClickCollapse
              })}
          >
            <Activity mode={menuIcon ? 'visible' : 'hidden'}>
              <ListItemIcon
                onClick={handlerIconLink}
                sx={(theme) => ({
                  minWidth: 38,
                  color: lightTextColor,
                  ...theme.applyStyles('dark', { color: darkTextColor }),
                  ...(!drawerOpen && {
                    borderRadius: 1,
                    width: 46,
                    height: 46,
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&:hover': { bgcolor: 'secondary.200', ...theme.applyStyles('dark', { bgcolor: 'divider' }) },
                    ...((isSelected || anchorEl) && {
                      bgcolor: 'primary.lighter',
                      '&:hover': { bgcolor: 'primary.lighter' },
                      ...theme.applyStyles('dark', { bgcolor: 'divider', '&:hover': { bgcolor: 'divider' } })
                    })
                  })
                })}
              >
                {menuIcon}
              </ListItemIcon>
            </Activity>

            <Activity mode={!menuIcon && drawerOpen ? 'visible' : 'hidden'}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <Dot size={isSelected || anchorEl ? 6 : 5} color={isSelected || anchorEl ? 'primary' : 'secondary'} />
              </ListItemIcon>
            </Activity>

            <Activity mode={drawerOpen || (!drawerOpen && level !== 1) ? 'visible' : 'hidden'}>
              <ListItemText
                primary={
                  <Typography
                    variant="h6"
                    sx={(theme) => ({
                      fontWeight: isSelected || anchorEl ? 500 : 400,
                      color: lightTextColor,
                      ...theme.applyStyles('dark', { color: darkTextColor })
                    })}
                  >
                    {menu.title}
                  </Typography>
                }
                secondary={
                  menu.caption && (
                    <Typography variant="caption" color="secondary">
                      {menu.caption}
                    </Typography>
                  )
                }
              />
            </Activity>
            {(drawerOpen || (!drawerOpen && level !== 1)) &&
              (menu?.url ? (
                <IconButton
                  onClick={(event) => {
                    event.stopPropagation();
                    handleClick(event, false);
                  }}
                  color="secondary"
                  variant="outlined"
                  sx={(theme) => ({
                    width: 20,
                    height: 20,
                    mr: '-5px !important',
                    p: 0.25,
                    borderColor: open ? 'primary.light' : 'secondary.light',
                    '&:hover': { borderColor: open ? 'primary.main' : 'secondary.main' },
                    color: lightTextColor,
                    ...theme.applyStyles('dark', { color: darkTextColor })
                  })}
                >
                  {miniMenuOpened || open ? (
                    <>{miniMenuOpened ? <ArrowRight2 {...arrowStyle} /> : <ArrowUp2 {...arrowStyle} />}</>
                  ) : (
                    <ArrowDown2 {...arrowStyle} />
                  )}
                </IconButton>
              ) : (
                <Box component="span" sx={(theme) => ({ color: lightTextColor, ...theme.applyStyles('dark', { color: darkTextColor }) })}>
                  {miniMenuOpened || open ? (
                    <>{miniMenuOpened ? <ArrowRight2 {...arrowStyle} /> : <ArrowUp2 {...arrowStyle} />}</>
                  ) : (
                    <ArrowDown2 {...arrowStyle} />
                  )}
                </Box>
              ))}

            <Activity mode={!drawerOpen ? 'visible' : 'hidden'}>
              <PopperStyled open={miniMenuOpened} anchorEl={anchorEl} placement="right-start" sx={{ zIndex: 2001 }}>
                {({ TransitionProps }) => (
                  <Transitions in={miniMenuOpened} {...TransitionProps}>
                    <Paper
                      sx={(theme) => ({
                        overflow: 'hidden',
                        boxShadow: theme.vars.customShadows.z1,
                        backgroundImage: 'none',
                        border: '1px solid ',
                        borderColor: 'divider'
                      })}
                    >
                      <ClickAwayListener onClickAway={handleClose}>
                        <SimpleBar sx={{ overflowX: 'hidden', overflowY: 'auto', maxHeight: 'calc(100vh - 170px)' }}>
                          {navCollapse}
                        </SimpleBar>
                      </ClickAwayListener>
                    </Paper>
                  </Transitions>
                )}
              </PopperStyled>
            </Activity>
          </ListItemButton>
          <Activity mode={drawerOpen && !menu?.isDropdown ? 'visible' : 'hidden'}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List sx={{ py: 0, px: level <= 1 ? 1.5 : 0 }}>{navCollapse}</List>
            </Collapse>
          </Activity>
          <Activity mode={drawerOpen && menu?.isDropdown ? 'visible' : 'hidden'}>
            <Menu
              id={`${menu.id}-menu`}
              aria-labelledby={`${menu.id}-button`}
              anchorEl={anchorElCollapse}
              open={openCollapse}
              onClose={handleCloseCollapse}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              slotProps={{ paper: { sx: { boxShadow: theme.shadows[2] } } }}
            >
              {navCollapse}
            </Menu>
          </Activity>
        </>
      ) : (
        <ListItemButton
          id={`boundary-${popperId}`}
          selected={isSelected}
          onMouseEnter={handleHover}
          onMouseLeave={handleClose}
          onClick={handleHover}
          aria-describedby={popperId}
          disableTouchRipple
          className={anchorEl ? 'Mui-selected' : ''}
          sx={{
            zIndex: 121,
            borderRadius: level >= 1 ? 0 : 1,
            '&.Mui-selected': {
              '&:hover': {
                bgcolor: 'transparent'
              },
              bgcolor: 'transparent'
            }
          }}
        >
          <Box onClick={handlerIconLink} sx={FlexBox}>
            <Activity mode={menuIcon ? 'visible' : 'hidden'}>
              <ListItemIcon sx={{ my: 'auto', minWidth: !menu.icon ? 18 : 36, color: 'secondary.dark' }}>{menuIcon}</ListItemIcon>
            </Activity>
            <ListItemText
              primary={
                <Typography
                  variant="h6"
                  sx={(theme) => ({
                    fontWeight: isSelected || anchorEl ? 500 : 400,
                    color: lightTextColor,
                    ...theme.applyStyles('dark', { color: darkTextColor })
                  })}
                >
                  {menu.title}
                </Typography>
              }
            />
            <Box component="span" sx={(theme) => ({ color: lightTextColor, ...theme.applyStyles('dark', { color: darkTextColor }) })}>
              {miniMenuOpened ? <ArrowRight2 size={12} /> : <ArrowDown2 size={12} />}
            </Box>
          </Box>

          <Activity mode={anchorEl ? 'visible' : 'hidden'}>
            <PopperStyled
              id={popperId}
              open={miniMenuOpened}
              anchorEl={anchorEl}
              placement="right-start"
              sx={{ zIndex: 2001 }}
              modifiers={[{ name: 'offset', options: { offset: [-14, 0] } }]}
            >
              {({ TransitionProps }) => (
                <Transitions in={miniMenuOpened} {...TransitionProps}>
                  <Paper
                    sx={(theme) => ({
                      overflow: 'hidden',
                      py: 0.5,
                      boxShadow: theme.vars.customShadows.z1,
                      border: '1px solid ',
                      borderColor: 'divider',
                      backgroundImage: 'none'
                    })}
                  >
                    <ClickAwayListener onClickAway={handleClose}>
                      <SimpleBar sx={{ overflowX: 'hidden', overflowY: 'auto', maxHeight: 'calc(100vh - 170px)' }}>{navCollapse}</SimpleBar>
                    </ClickAwayListener>
                  </Paper>
                </Transitions>
              )}
            </PopperStyled>
          </Activity>
        </ListItemButton>
      )}
    </>
  );
}

NavCollapse.propTypes = {
  menu: PropTypes.any,
  level: PropTypes.number,
  parentId: PropTypes.string,
  setSelectedItems: PropTypes.oneOfType([PropTypes.any, PropTypes.string]),
  selectedItems: PropTypes.oneOfType([PropTypes.any, PropTypes.string]),
  setSelectedLevel: PropTypes.object,
  selectedLevel: PropTypes.number
};
