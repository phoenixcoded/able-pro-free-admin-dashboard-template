// material-ui
import Links from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project-imports
import { NextLink } from 'components/routes';

// ==============================|| MAIN LAYOUT - FOOTER ||============================== //

export default function Footer() {
  return (
    <Stack direction={{ sm: 'row' }} sx={{ gap: 1, justifyContent: 'space-between', alignItems: 'center', pt: 3, mt: 'auto' }}>
      <Typography variant="caption">
        &copy; Handcrafted by Team Phoenixcoded. Powered by{' '}
        <Links component={NextLink} href="https://codedthemes.com" target="_blank" underline="none">
          {' '}
          CodedThemes
        </Links>
        .
      </Typography>
      <Stack direction="row" sx={{ gap: 1.5, justifyContent: 'space-between', alignItems: 'center' }}>
        <Links component={NextLink} href="https://ableproadmin.com" target="_blank" variant="caption" color="text.primary">
          Home
        </Links>
        <Links component={NextLink} href="https://phoenixcoded.gitbook.io/able-pro" target="_blank" variant="caption" color="text.primary">
          Documentation
        </Links>
        <Links component={NextLink} href="https://codedthemes.support-hub.io/" target="_blank" variant="caption" color="text.primary">
          Support
        </Links>
      </Stack>
    </Stack>
  );
}
