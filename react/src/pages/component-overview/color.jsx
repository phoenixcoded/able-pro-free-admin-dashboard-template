import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project-imports
import MainCard from 'components/MainCard';
import { GRID_COMMON_SPACING } from 'config';

import ComponentWrapper from 'sections/components-overview/ComponentWrapper';
import ComponentSkeleton from 'sections/components-overview/ComponentSkeleton';

// ===============================|| COLOR BOX ||=============================== //

function ColorBox({ bgcolor, title, data, dark, main }) {
  return (
    <>
      <Card sx={{ '&.MuiPaper-root': { borderRadius: '0px' } }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            py: 2.5,
            bgcolor,
            color: dark ? 'secondary.800' : '#ffffff',
            border: main ? '1px dashed' : '1px solid transparent'
          }}
        >
          {title && (
            <Grid container sx={{ justifyContent: 'space-around', alignItems: 'center', width: 1 }}>
              <Grid>
                {data && (
                  <Stack sx={{ gap: 0.75, alignItems: 'center' }}>
                    <Typography variant="subtitle2">{data.label}</Typography>
                    <Typography variant="subtitle1">{data.color}</Typography>
                  </Stack>
                )}
              </Grid>
              <Grid>
                <Typography variant="subtitle1" color="inherit">
                  {title}
                </Typography>
              </Grid>
            </Grid>
          )}
        </Box>
      </Card>
    </>
  );
}

// ===============================|| COMPONENTS - COLOR ||=============================== //

export default function ComponentColor() {
  const theme = useTheme();

  return (
    <ComponentSkeleton>
      <ComponentWrapper>
        <Grid container spacing={GRID_COMMON_SPACING}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <MainCard title="Primary Color">
              <Stack>
                <ColorBox
                  bgcolor="primary.lighter"
                  data={{ label: 'Blue-1', color: `${theme.palette.primary.lighter}` }}
                  title="primary.lighter"
                  dark={true}
                />
                <ColorBox
                  bgcolor="primary.100"
                  data={{ label: 'Blue-2', color: `${theme.palette.primary[100]}` }}
                  title="primary[100]"
                  dark={true}
                />
                <ColorBox
                  bgcolor="primary.200"
                  data={{ label: 'Blue-3', color: `${theme.palette.primary[200]}` }}
                  title="primary[200]"
                  dark={true}
                />
                <ColorBox
                  bgcolor="primary.light"
                  data={{ label: 'Blue-4', color: `${theme.palette.primary.light}` }}
                  title="primary.light"
                  dark={true}
                />
                <ColorBox bgcolor="primary.400" data={{ label: 'Blue-5', color: `${theme.palette.primary[400]}` }} title="primary[400]" />
                <ColorBox
                  bgcolor="primary.main"
                  data={{ label: 'Blue-6', color: `${theme.palette.primary.main}` }}
                  title="primary.main"
                  main
                />
                <ColorBox bgcolor="primary.dark" data={{ label: 'Blue-7', color: `${theme.palette.primary.dark}` }} title="primary.dark" />
                <ColorBox
                  bgcolor="primary.700"
                  data={{ label: 'Blue-8', color: `${theme.palette.primary[700]}` }}
                  title="primary[700]"
                  dark={false}
                />
                <ColorBox
                  bgcolor="primary.darker"
                  data={{ label: 'Blue-9', color: `${theme.palette.primary.darker}` }}
                  title="primary.darker"
                  dark={false}
                />
                <ColorBox
                  bgcolor="primary.900"
                  data={{ label: 'Blue-10', color: `${theme.palette.primary.lighter}` }}
                  title="primary.900"
                  dark={false}
                />
              </Stack>
            </MainCard>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <MainCard title="Secondary Color">
              <Stack>
                <ColorBox
                  bgcolor="secondary.lighter"
                  data={{ label: 'Grey-1', color: `${theme.palette.secondary.lighter}` }}
                  title="secondary.lighter"
                  dark={true}
                />
                <ColorBox
                  bgcolor="secondary.100"
                  data={{ label: 'Grey-2', color: `${theme.palette.secondary[100]}` }}
                  title="secondary[100]"
                  dark={true}
                />
                <ColorBox
                  bgcolor="secondary.200"
                  data={{ label: 'Grey-3', color: `${theme.palette.secondary[200]}` }}
                  title="secondary[200]"
                  dark={true}
                />
                <ColorBox
                  bgcolor="secondary.light"
                  data={{ label: 'Grey-4', color: `${theme.palette.secondary.light}` }}
                  title="secondary.light"
                  dark={true}
                />
                <ColorBox
                  bgcolor="secondary.400"
                  data={{ label: 'Grey-5', color: `${theme.palette.secondary[400]}` }}
                  title="secondary[400]"
                />
                <ColorBox
                  bgcolor="secondary.500"
                  data={{ label: 'Grey-6', color: `${theme.palette.secondary[500]}` }}
                  title="secondary.500"
                  main
                />
                <ColorBox
                  bgcolor="secondary.main"
                  data={{ label: 'Grey-7', color: `${theme.palette.secondary.main}` }}
                  title="secondary.main"
                  dark={false}
                />
                <ColorBox
                  bgcolor="secondary.dark"
                  data={{ label: 'Grey-8', color: `${theme.palette.secondary.dark}` }}
                  title="secondary.dark"
                  dark={false}
                />
                <ColorBox
                  bgcolor="secondary.800"
                  data={{ label: 'Grey-9', color: `${theme.palette.secondary[800]}` }}
                  title="secondary.800"
                  dark={false}
                />
                <ColorBox
                  bgcolor="secondary.darker"
                  data={{ label: 'Grey-10', color: `${theme.palette.secondary.darker}` }}
                  title="secondary.darker"
                  dark={false}
                />
              </Stack>
            </MainCard>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <MainCard title="Success Color">
              <Stack>
                <ColorBox
                  bgcolor="success.lighter"
                  data={{ label: 'Green-1', color: `${theme.palette.success.lighter}` }}
                  title="success.lighter"
                  dark={true}
                />
                <ColorBox
                  bgcolor="success.light"
                  data={{ label: 'Green-4', color: `${theme.palette.success.light}` }}
                  title="success.light"
                  dark={true}
                />
                <ColorBox
                  bgcolor="success.main"
                  data={{ label: 'Green-6', color: `${theme.palette.success.main}` }}
                  title="success.main"
                  main
                />
                <ColorBox
                  bgcolor="success.dark"
                  data={{ label: 'Green-8', color: `${theme.palette.success.dark}` }}
                  title="success.dark"
                  dark={false}
                />
                <ColorBox
                  bgcolor="success.darker"
                  data={{ label: 'Green-10', color: `${theme.palette.success.darker}` }}
                  title="success.darker"
                  dark={false}
                />
              </Stack>
            </MainCard>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <MainCard title="Error Color">
              <Stack>
                <ColorBox
                  bgcolor="error.lighter"
                  data={{ label: 'Red-1', color: `${theme.palette.error.lighter}` }}
                  title="error.lighter"
                  dark={true}
                />
                <ColorBox
                  bgcolor="error.light"
                  data={{ label: 'Red-4', color: `${theme.palette.error.light}` }}
                  title="error.light"
                  dark={true}
                />
                <ColorBox bgcolor="error.main" data={{ label: 'Red-6', color: `${theme.palette.error.main}` }} title="error.main" main />
                <ColorBox
                  bgcolor="error.dark"
                  data={{ label: 'Red-8', color: `${theme.palette.error.dark}` }}
                  title="error.dark"
                  dark={false}
                />
                <ColorBox
                  bgcolor="error.darker"
                  data={{ label: 'Red-10', color: `${theme.palette.error.darker}` }}
                  title="error.darker"
                  dark={false}
                />
              </Stack>
            </MainCard>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <MainCard title="Warning Color">
              <Stack>
                <ColorBox
                  bgcolor="warning.lighter"
                  data={{ label: 'Gold-1', color: `${theme.palette.warning.lighter}` }}
                  title="warning.lighter"
                  dark={true}
                />
                <ColorBox
                  bgcolor="warning.light"
                  data={{ label: 'Gold-4', color: `${theme.palette.warning.light}` }}
                  title="warning.light"
                  dark={true}
                />
                <ColorBox
                  bgcolor="warning.main"
                  data={{ label: 'Gold-6', color: `${theme.palette.warning.main}` }}
                  title="warning.main"
                  main
                />
                <ColorBox
                  bgcolor="warning.dark"
                  data={{ label: 'Gold-8', color: `${theme.palette.warning.dark}` }}
                  title="warning.dark"
                  dark={false}
                />
                <ColorBox
                  bgcolor="warning.darker"
                  data={{ label: 'Gold-10', color: `${theme.palette.warning.darker}` }}
                  title="warning.darker"
                  dark={false}
                />
              </Stack>
            </MainCard>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </ComponentSkeleton>
  );
}

ColorBox.propTypes = {
  bgcolor: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.object,
  dark: PropTypes.bool,
  main: PropTypes.bool
};
