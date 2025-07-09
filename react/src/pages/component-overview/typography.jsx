// material-ui
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project-imports
import MainCard from 'components/MainCard';
import { GRID_COMMON_SPACING } from 'config';

import ComponentWrapper from 'sections/components-overview/ComponentWrapper';
import ComponentSkeleton from 'sections/components-overview/ComponentSkeleton';

// ==============================|| COMPONENTS - TYPOGRAPHY ||============================== //

export default function ComponentTypography() {
  return (
    <ComponentSkeleton>
      <ComponentWrapper>
        <Grid container spacing={GRID_COMMON_SPACING}>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Stack sx={{ gap: GRID_COMMON_SPACING }}>
              <MainCard title="Basic">
                <Stack sx={{ gap: 0.75, mt: -1.5 }}>
                  <Typography variant="h1">Inter</Typography>
                  <Typography variant="h5">Font Family</Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Regular</Typography>
                    <Typography variant="h6">Medium</Typography>
                    <Typography variant="h6">Bold</Typography>
                  </Breadcrumbs>
                </Stack>
              </MainCard>
              <MainCard title="Heading">
                <Stack sx={{ gap: 2 }}>
                  <Typography variant="h1">H1 Heading</Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 38px</Typography>
                    <Typography variant="h6">Weight: Bold</Typography>
                    <Typography variant="h6">Line Height: 46px</Typography>
                  </Breadcrumbs>
                  <Divider />

                  <Typography variant="h2">H2 Heading</Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 30px</Typography>
                    <Typography variant="h6">Weight: Bold</Typography>
                    <Typography variant="h6">Line Height: 38px</Typography>
                  </Breadcrumbs>
                  <Divider />

                  <Typography variant="h3">H3 Heading</Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 24px</Typography>
                    <Typography variant="h6">Weight: Regular & Bold</Typography>
                    <Typography variant="h6">Line Height: 32px</Typography>
                  </Breadcrumbs>
                  <Divider />

                  <Typography variant="h4">H4 Heading</Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 20px</Typography>
                    <Typography variant="h6">Weight: Bold</Typography>
                    <Typography variant="h6">Line Height: 28px</Typography>
                  </Breadcrumbs>
                  <Divider />

                  <Typography variant="h5">H5 Heading</Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 16px</Typography>
                    <Typography variant="h6">Weight: Regular & Medium & Bold</Typography>
                    <Typography variant="h6">Line Height: 24px</Typography>
                  </Breadcrumbs>
                  <Divider />

                  <Typography variant="h6">H6 Heading / Subheading</Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 14px</Typography>
                    <Typography variant="h6">Weight: Regular</Typography>
                    <Typography variant="h6">Line Height: 22px</Typography>
                  </Breadcrumbs>
                </Stack>
              </MainCard>
              <MainCard title="Body 1">
                <>
                  <Typography variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 14px</Typography>
                    <Typography variant="h6">Weight: Regular</Typography>
                    <Typography variant="h6">Line Height: 22px</Typography>
                  </Breadcrumbs>
                </>
              </MainCard>
              <MainCard title="Body 2">
                <>
                  <Typography variant="body2" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 12px</Typography>
                    <Typography variant="h6">Weight: Regular</Typography>
                    <Typography variant="h6">Line Height: 20px</Typography>
                  </Breadcrumbs>
                </>
              </MainCard>
              <MainCard title="Subtitle 1">
                <>
                  <Typography variant="subtitle1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 14px</Typography>
                    <Typography variant="h6">Weight: Medium</Typography>
                    <Typography variant="h6">Line Height: 22px</Typography>
                  </Breadcrumbs>
                </>
              </MainCard>
              <MainCard title="Subtitle 2">
                <>
                  <Typography variant="subtitle2" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 12px</Typography>
                    <Typography variant="h6">Weight: Medium</Typography>
                    <Typography variant="h6">Line Height: 20px</Typography>
                  </Breadcrumbs>
                </>
              </MainCard>
              <MainCard title="Caption">
                <Stack sx={{ gap: 1 }}>
                  <Typography variant="caption">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 12px</Typography>
                    <Typography variant="h6">Weight: Regular</Typography>
                    <Typography variant="h6">Line Height: 20px</Typography>
                  </Breadcrumbs>
                </Stack>
              </MainCard>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Stack sx={{ gap: GRID_COMMON_SPACING }}>
              <MainCard title="Alignment">
                <>
                  <Typography variant="body2" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ textAlign: 'center' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                  <Typography variant="body2" sx={{ textAlign: 'right' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                </>
              </MainCard>
              <MainCard title="Gutter Bottom">
                <>
                  <Typography variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 12px</Typography>
                    <Typography variant="h6">Weight: Regular</Typography>
                    <Typography variant="h6">Line Height: 20px</Typography>
                  </Breadcrumbs>
                </>
              </MainCard>
              <MainCard title="Overline">
                <Stack sx={{ gap: 1.5 }}>
                  <Typography variant="overline">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 12px</Typography>
                    <Typography variant="h6">Weight: Regular</Typography>
                    <Typography variant="h6">Line Height: 20px</Typography>
                  </Breadcrumbs>
                </Stack>
              </MainCard>
              <MainCard title="Link">
                <Stack sx={{ gap: 1.5 }}>
                  <Link href="#">#able-pro</Link>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 12px</Typography>
                    <Typography variant="h6">Weight: Regular</Typography>
                    <Typography variant="h6">Line Height: 20px</Typography>
                  </Breadcrumbs>
                </Stack>
              </MainCard>
              <MainCard title="Colors">
                <>
                  <Typography variant="h6" gutterBottom sx={{ color: 'text.primary' }}>
                    This is textPrimary text color.
                  </Typography>
                  <Typography variant="h6" gutterBottom sx={{ color: 'text.secondary' }}>
                    This is textSecondary text color.
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    This is primary text color.
                  </Typography>
                  <Typography variant="h6" color="secondary" gutterBottom>
                    This is secondary text color.
                  </Typography>
                  <Typography variant="h6" color="success" gutterBottom>
                    This is success text color.
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'warning.main' }} gutterBottom>
                    This is warning text color.
                  </Typography>
                  <Typography variant="h6" color="error" gutterBottom>
                    This is error text color.
                  </Typography>
                </>
              </MainCard>
              <MainCard title="Paragraph">
                <>
                  <Typography variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 14px</Typography>
                    <Typography variant="h6">Weight: Regular</Typography>
                    <Typography variant="h6">Line Height: 22px</Typography>
                  </Breadcrumbs>
                </>
              </MainCard>
              <MainCard title="Font Style">
                <>
                  <Typography variant="body1" gutterBottom sx={{ fontStyle: 'italic' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom sx={{ fontStyle: 'italic' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 14px</Typography>
                    <Typography variant="h6">Weight: Italic Regular & Italic Bold</Typography>
                    <Typography variant="h6">Line Height: 22px</Typography>
                  </Breadcrumbs>
                </>
              </MainCard>
            </Stack>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </ComponentSkeleton>
  );
}
