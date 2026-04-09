'use client';

// next
import Link from 'next/link';
import Image from 'next/image';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project-imports
import { APP_DEFAULT_PATH } from '../config';

// assets
const error500 = '/assets/images/maintenance/img-error-500.svg';

// ==============================|| ERROR 500 ||============================== //

export default function Error500() {
  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack sx={{ minHeight: '100vh', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
      <Box sx={{ width: downSM ? 240 : 325 }}>
        <Image
          src={error500}
          alt="mantis"
          width={downSM ? 350 : 396}
          height={downSM ? 325 : 370}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Box>
      <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Typography align="center" variant={downSM ? 'h2' : 'h1'}>
          Internal Server Error
        </Typography>
        <Typography color="text.secondary" variant="body2" align="center" sx={{ width: { xs: '73%', sm: '70%' }, mt: 1 }}>
          Server error 500. we fixing the problem. please try again at a later stage.
        </Typography>
        <Button component={Link} href={APP_DEFAULT_PATH} variant="contained" sx={{ textTransform: 'none', mt: 4 }}>
          Back To Home
        </Button>
      </Stack>
    </Stack>
  );
}
