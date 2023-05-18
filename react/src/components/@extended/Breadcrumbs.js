import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// material-ui
import { Grid, Typography } from '@mui/material';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';

// project-imports
import MainCard from 'components/MainCard';

// assets
import { ArrowRight2 } from 'iconsax-react';

// ==============================|| BREADCRUMBS ||============================== //

const Breadcrumbs = ({ navigation, title, sx, ...others }) => {
  const location = useLocation();
  const [item, setItem] = useState();

  useEffect(() => {
    navigation?.items?.map((menu) => {
      if (menu.type && menu.type === 'group') {
        getCollapse(menu);
      }
      return false;
    });
  });

  let customLocation = location.pathname;

  // set active item state
  const getCollapse = (menu) => {
    if (menu.children) {
      menu.children.filter((collapse) => {
        if (collapse.type && collapse.type === 'collapse') {
          getCollapse(collapse);
          if (collapse.url === customLocation) {
            setItem(collapse);
          }
        } else if (collapse.type && collapse.type === 'item') {
          if (customLocation === collapse.url) {
            setItem(collapse);
          }
        }
        return false;
      });
    }
  };

  let mainContent;
  let itemContent;
  let breadcrumbContent = <Typography />;
  let itemTitle = '';

  // items
  if (item && item.type === 'item') {
    itemTitle = item.title;

    itemContent = (
      <Typography variant="h6" color="secondary" sx={{ display: 'flex', alignItems: 'center' }}>
        {itemTitle}
      </Typography>
    );

    // main
    if (item.breadcrumbs !== false) {
      breadcrumbContent = (
        <MainCard sx={{ mb: 3, bgcolor: 'transparent', border: 'none', ...sx }} {...others} content={false}>
          <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={0.5}>
            <Grid item>
              <MuiBreadcrumbs aria-label="breadcrumb" separator={<ArrowRight2 size={12} />}>
                <Typography
                  component={Link}
                  to="/"
                  color="textPrimary"
                  variant="h6"
                  sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
                >
                  Home
                </Typography>
                {mainContent}
                {itemContent}
              </MuiBreadcrumbs>
            </Grid>
            {title && (
              <Grid item sx={{ mt: 0 }}>
                <Typography variant="h2" sx={{ fontWeight: 700 }}>
                  {item.title}
                </Typography>
              </Grid>
            )}
          </Grid>
        </MainCard>
      );
    }
  }

  return breadcrumbContent;
};

Breadcrumbs.propTypes = {
  navigation: PropTypes.object,
  title: PropTypes.bool,
  sx: PropTypes.object,
  items: PropTypes.object,
  children: PropTypes.node
};

export default Breadcrumbs;
