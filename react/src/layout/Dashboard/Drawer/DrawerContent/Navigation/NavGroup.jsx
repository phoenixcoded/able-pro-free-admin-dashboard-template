import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

// project-imports
import NavItem from './NavItem';

import { dispatch, useSelector } from 'store';
import { activeID } from 'store/reducers/menu';

// ==============================|| NAVIGATION - GROUP ||============================== //

export default function NavGroup({ item, lastItem, remItems, lastItemId }) {
  const theme = useTheme();
  const { pathname } = useLocation();

  const { drawerOpen } = useSelector((state) => state.menu);

  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const [anchorEl, setAnchorEl] = useState(null);
  const [currentItem, setCurrentItem] = useState(item);

  const openMini = Boolean(anchorEl);

  useEffect(() => {
    if (lastItem) {
      if (item.id === lastItemId) {
        const localItem = { ...item };
        const elements = remItems.map((ele) => ele.elements);
        localItem.children = elements.flat(1);
        setCurrentItem(localItem);
      } else {
        setCurrentItem(item);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, lastItem, downLG]);

  const checkOpenForParent = (child, id) => {
    child.forEach((ele) => {
      if (ele.children?.length) {
        checkOpenForParent(ele.children, currentItem.id);
      }
      if (ele.url === pathname) {
        dispatch(activeID(id));
      }
    });
  };
  const checkSelectedOnload = (data) => {
    const childrens = data.children ? data.children : [];
    childrens.forEach((itemCheck) => {
      if (itemCheck.children?.length) {
        checkOpenForParent(itemCheck.children, currentItem.id);
      }
      if (itemCheck.url === pathname) {
        dispatch(activeID(currentItem.id));
      }
    });
  };

  useEffect(() => {
    checkSelectedOnload(currentItem);
    if (openMini) setAnchorEl(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, currentItem]);

  const navCollapse = item.children?.map((menuItem) => {
    switch (menuItem.type) {
      case 'collapse':
        // Pro version
        return (
          <Typography key={menuItem.id} variant="h6" color="error" align="center">
            Pro Version
          </Typography>
        );
      case 'item':
        return <NavItem key={menuItem.id} item={menuItem} level={1} />;
      default:
        return (
          <Typography key={menuItem.id} variant="h6" color="error" align="center">
            Fix - Group Collapse or Items
          </Typography>
        );
    }
  });

  return (
    <>
      <List
        subheader={
          item.title &&
          drawerOpen && (
            <Box sx={{ pl: 3, mb: 1.5 }}>
              <Typography variant="h5" color="secondary.dark" sx={{ textTransform: 'uppercase', fontSize: '0.688rem' }}>
                {item.title}
              </Typography>
              {item.caption && (
                <Typography variant="caption" color="secondary">
                  {item.caption}
                </Typography>
              )}
            </Box>
          )
        }
        sx={{ mt: drawerOpen && item.title ? 1.5 : 0, py: 0, zIndex: 0 }}
      >
        {navCollapse}
      </List>
    </>
  );
}

NavGroup.propTypes = {
  item: PropTypes.object,
  lastItem: PropTypes.bool,
  remItems: PropTypes.array,
  lastItemId: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  caption: PropTypes.string
};
