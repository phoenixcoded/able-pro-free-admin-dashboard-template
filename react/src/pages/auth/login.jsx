import { Link } from 'react-router-dom';

// material-ui
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project-imports
import Logo from 'components/logo';
import AuthSocButton from 'sections/auth/AuthSocButton';
import AuthDivider from 'sections/auth/AuthDivider';
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthLogin from 'sections/auth/auth-forms/AuthLogin';

// assets
import imgFacebook from 'assets/images/auth/facebook.svg';
import imgTwitter from 'assets/images/auth/twitter.svg';
import imgGoogle from 'assets/images/auth/google.svg';

// ================================|| LOGIN ||================================ //

export default function Login() {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid sx={{ textAlign: 'center' }} size={12}>
          <Logo />
        </Grid>
        <Grid size={12}>
          <Stack gap={1} alignItems="center">
            <AuthSocButton>
              <img src={imgFacebook} alt="Facebook" style={{ margin: '0 10px' }} /> Sign In with Facebook
            </AuthSocButton>
            <AuthSocButton>
              <img src={imgTwitter} alt="Facebook" style={{ margin: '0 10px' }} /> Sign In with Twitter
            </AuthSocButton>
            <AuthSocButton>
              <img src={imgGoogle} alt="Facebook" style={{ margin: '0 10px' }} /> Sign In with Google
            </AuthSocButton>
          </Stack>
        </Grid>
        <Grid size={12}>
          <AuthDivider>
            <Typography variant="body1">OR</Typography>
          </AuthDivider>
        </Grid>
        <Grid size={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Login</Typography>
            <Typography component={Link} to={'/auth/register'} variant="body1" sx={{ textDecoration: 'none' }} color="primary">
              Don&apos;t have an account?
            </Typography>
          </Stack>
        </Grid>
        <Grid size={12}>
          <AuthLogin forgot="/auth/forgot-password" />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}
