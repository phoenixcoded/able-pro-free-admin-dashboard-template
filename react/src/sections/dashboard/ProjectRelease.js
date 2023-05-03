// material-ui
import { Button, Chip, Grid, LinearProgress, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';
import Dot from 'components/@extended/Dot';

// assets
import { Add, Link1 } from 'iconsax-react';

// =========================|| DATA WIDGET - ADD NEW TASK ||========================= //

const ProjectRelease = () => {
  return (
    <MainCard title="Project - Able Pro">
      <Grid container spacing={1.5}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography>Release v1.2.0</Typography>
              <Typography>72%</Typography>
            </Stack>
            <LinearProgress variant="determinate" value={72} />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <List>
            <ListItemButton sx={{ flexWrap: 'wrap', rowGap: 1 }}>
              <ListItemIcon>
                <Dot color="warning" />
              </ListItemIcon>
              <ListItemText primary="Horizontal Layout" />
              <Chip
                label={
                  <Typography sx={{ display: 'flex', alignItems: 'center', gap: 0.5, '& svg': { width: 12, height: 12 } }}>
                    <Link1 />2
                  </Typography>
                }
                size="small"
                sx={{ borderRadius: 1 }}
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Dot color="warning" />
              </ListItemIcon>
              <ListItemText primary="Invoice Generator" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Dot />
              </ListItemIcon>
              <ListItemText primary="Package Upgrades" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Dot color="success" />
              </ListItemIcon>
              <ListItemText primary="Figma Auto Layout" />
            </ListItemButton>
          </List>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained" startIcon={<Add />}>
            Add task
          </Button>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default ProjectRelease;
