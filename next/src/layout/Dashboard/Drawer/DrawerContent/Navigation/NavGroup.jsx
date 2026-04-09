'use client';

import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// material-ui

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project-imports
import NavItem from './NavItem';
import { useGetMenuMaster } from 'api/menu';

export default function NavGroup({ item, lastItem, remItems, lastItemId, setSelectedID }) {
  const pathname = usePathname();

  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;
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
  }, [item, lastItem, lastItemId, remItems]);

  // ✅ Replace matchPath logic
  const isPathMatch = useCallback(
    (url) => {
      return pathname === url;
    },
    [pathname]
  );

  const checkOpenForParent = useCallback(
    (child, id) => {
      child.forEach((ele) => {
        if (ele.children?.length) {
          checkOpenForParent(ele.children, currentItem.id);
        }

        if (ele.url && isPathMatch(ele.link || ele.url)) {
          setSelectedID(id);
        }
      });
    },
    [currentItem.id, isPathMatch, setSelectedID]
  );

  const checkSelectedOnload = useCallback(
    (data) => {
      const childrens = data.children || [];

      childrens.forEach((itemCheck) => {
        if (itemCheck?.children?.length) {
          checkOpenForParent(itemCheck.children, currentItem.id);
        }

        if (itemCheck.url && isPathMatch(itemCheck.link || itemCheck.url)) {
          setSelectedID(currentItem.id);
        }
      });
    },
    [checkOpenForParent, currentItem.id, isPathMatch, setSelectedID]
  );

  useEffect(() => {
    checkSelectedOnload(currentItem);
    if (openMini) setAnchorEl(null);
  }, [checkSelectedOnload, currentItem, openMini]);

  const navCollapse = item.children?.map((menuItem, index) => {
    switch (menuItem.type) {
      case 'collapse':
        return (
          <Typography key={menuItem.id} variant="h6" color="error" align="center">
            Pro Version
          </Typography>
        );
      case 'item':
        return <NavItem key={menuItem.id} item={menuItem} level={1} />;
      default:
        return (
          <Typography key={index} variant="h6" color="error" align="center">
            Fix - Group Collapse or Items
          </Typography>
        );
    }
  });

  return (
    <List
      subheader={
        <>
          {item.title ? (
            drawerOpen && (
              <Box sx={{ pl: 3, mb: 1.5 }}>
                <Typography
                  variant="h5"
                  sx={{
                    textTransform: 'uppercase',
                    fontSize: '0.688rem',
                    color: 'secondary.dark'
                  }}
                >
                  {item.title}
                </Typography>
                {item.caption && (
                  <Typography variant="caption" color="secondary">
                    {item.caption}
                  </Typography>
                )}
              </Box>
            )
          ) : (
            <Divider sx={{ my: 0.5 }} />
          )}
        </>
      }
      sx={{ mt: drawerOpen && item.title ? 1.5 : 0, py: 0, zIndex: 0 }}
    >
      {navCollapse}
    </List>
  );
}

NavGroup.propTypes = {
  item: PropTypes.any,
  lastItem: PropTypes.number,
  remItems: PropTypes.array,
  lastItemId: PropTypes.string,
  selectedID: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  setSelectedID: PropTypes.oneOfType([PropTypes.any, PropTypes.func]),
  setSelectedItems: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  selectedItems: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  setSelectedLevel: PropTypes.object,
  selectedLevel: PropTypes.number
};
